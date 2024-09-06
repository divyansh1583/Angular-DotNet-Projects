using Microsoft.AspNetCore.Http;
using MutliTenantAPI.Application.Interfaces.Services;
using MutliTenantAPI.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MutliTenantAPI.Infrastructure.Implementation.Services
{
    public class TenantService : ITenantService
    {
        private readonly MasterDbContext _masterDbContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public TenantService(MasterDbContext masterDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _masterDbContext = masterDbContext;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<string> GetCurrentTenantConnectionStringAsync()
        {
            var subdomain = GetSubdomainFromRequest();
            var organization = await _masterDbContext.Organizations
                .FirstOrDefaultAsync(o => o.Subdomain == subdomain);

            if (organization == null)
            {
                throw new Exception("Organization not found");
            }

            return organization.ConnectionString;
        }

        private string GetSubdomainFromRequest()
        {
            var host = _httpContextAccessor.HttpContext.Request.Host.Host;
            var parts = host.Split('.');
            return parts.Length > 2 ? parts[0] : null;
        }
    }
}
