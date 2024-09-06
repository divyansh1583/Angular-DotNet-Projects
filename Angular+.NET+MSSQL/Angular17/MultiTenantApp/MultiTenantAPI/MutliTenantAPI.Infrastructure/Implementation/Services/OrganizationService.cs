using MutliTenantAPI.Infrastructure.Data;
using Microsoft.Extensions.Configuration;
using MutliTenantAPI.Application.Interfaces.Services;
using MutliTenantAPI.Domain.Enities;
using Microsoft.Data.SqlClient;


namespace MutliTenantAPI.Infrastructure.Implementation.Services
{
    public class OrganizationService : IOrganizationService
    {
        private readonly MasterDbContext _masterDbContext;
        private readonly IConfiguration _configuration;

        public OrganizationService(MasterDbContext masterDbContext, IConfiguration configuration)
        {
            _masterDbContext = masterDbContext;
            _configuration = configuration;
        }

        public async Task<Guid> CreateOrganizationAsync(string name, string subdomain)
        {
            var organizationId = Guid.NewGuid();
            var connectionString = GenerateConnectionString(organizationId);

            var organization = new Organization
            {
                Id = organizationId,
                Name = name,
                Subdomain = subdomain,
                ConnectionString = connectionString
            };

            _masterDbContext.Organizations.Add(organization);
            await _masterDbContext.SaveChangesAsync();

            await CreateOrganizationDatabaseAsync(connectionString);

            return organizationId;
        }

        private string GenerateConnectionString(Guid organizationId)
        {
            var masterConnectionString = _configuration.GetConnectionString("MasterDatabase");
            var builder = new SqlConnectionStringBuilder(masterConnectionString)
            {
                InitialCatalog = $"Org_{organizationId}"
            };
            return builder.ConnectionString;
        }

        private async Task CreateOrganizationDatabaseAsync(string connectionString)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("MasterDatabase"));
            await connection.OpenAsync();

            var dbName = new SqlConnectionStringBuilder(connectionString).InitialCatalog;

            var command = new SqlCommand($"CREATE DATABASE [{dbName}]", connection);
            await command.ExecuteNonQueryAsync();

            await CreateTablesAsync(connectionString);
        }

        private async Task CreateTablesAsync(string connectionString)
        {
            using var connection = new SqlConnection(connectionString);
            await connection.OpenAsync();

            var command = new SqlCommand(@"
            CREATE TABLE Staff (
                Id INT PRIMARY KEY IDENTITY,
                Name NVARCHAR(100) NOT NULL,
                Email NVARCHAR(100) NOT NULL
            );

            CREATE TABLE Patients (
                Id INT PRIMARY KEY IDENTITY,
                Name NVARCHAR(100) NOT NULL,
                Email NVARCHAR(100) NOT NULL
            );

            CREATE TABLE Users (
                Id INT PRIMARY KEY IDENTITY,
                Email NVARCHAR(100) NOT NULL,
                PasswordHash NVARCHAR(255) NOT NULL
            );", connection);

            await command.ExecuteNonQueryAsync();
        }
    }
}
