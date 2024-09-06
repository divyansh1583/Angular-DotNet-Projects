

namespace MutliTenantAPI.Application.Interfaces.Services
{
    public interface IOrganizationService
    {
        Task<Guid> CreateOrganizationAsync(string name, string subdomain);
    }
}
