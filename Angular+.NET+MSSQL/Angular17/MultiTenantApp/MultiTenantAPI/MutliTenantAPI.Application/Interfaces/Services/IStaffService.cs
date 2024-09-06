using MutliTenantAPI.Domain.Enities;


namespace MutliTenantAPI.Application.Interfaces.Services
{
    public interface IStaffService
    {
        Task AddStaffMemberAsync(Staff staffMember);
    }
}
