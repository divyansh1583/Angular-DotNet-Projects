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
    public class StaffService : IStaffService
    {
        private readonly ITenantService _tenantService;

        public StaffService(ITenantService tenantService)
        {
            _tenantService = tenantService;
        }

        public async Task AddStaffMemberAsync(Staff staffMember)
        {
            var connectionString = await _tenantService.GetCurrentTenantConnectionStringAsync();
            using var context = new TenantDbContext(connectionString);

            context.Staff.Add(staffMember);
            await context.SaveChangesAsync();
        }
    }
}
