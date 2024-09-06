

namespace MutliTenantAPI.Application.Interfaces.Services
{
    public interface ITenantService
    {
        Task<string> GetCurrentTenantConnectionStringAsync();
    }
}
