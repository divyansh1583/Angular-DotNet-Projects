using CQRSPattern.Models;

namespace CQRSPattern.Repositories
{
    public interface IEmployeeCommandsRepository
    {
        void SaveEmployee(Employee employee);
    }
}
