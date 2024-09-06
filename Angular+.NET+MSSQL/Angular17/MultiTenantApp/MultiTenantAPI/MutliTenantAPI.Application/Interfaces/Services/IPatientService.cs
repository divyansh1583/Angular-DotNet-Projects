using MutliTenantAPI.Domain.Enities;


namespace MutliTenantAPI.Application.Interfaces.Services
{
    public interface IPatientService
    {
        Task AddPatientAsync(Patient patient);
    }
}
