using MutliTenantAPI.Application.Interfaces.Services;
using MutliTenantAPI.Domain.Enities;
using MutliTenantAPI.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MutliTenantAPI.Infrastructure.Implementation.Services
{
    public class PatientService : IPatientService
    {
        private readonly ITenantService _tenantService;

        public PatientService(ITenantService tenantService)
        {
            _tenantService = tenantService;
        }

        public async Task AddPatientAsync(Patient patient)
        {
            var connectionString = await _tenantService.GetCurrentTenantConnectionStringAsync();
            using var context = new TenantDbContext(connectionString);

            context.Patients.Add(patient);
            await context.SaveChangesAsync();
        }
    }
}
