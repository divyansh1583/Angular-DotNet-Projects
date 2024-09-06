using CQRSPattern.Models;

namespace CQRSPattern.Repositories
{
    public interface IEmployeeQueriesRepository
    {
        Employee GetByID(int employeeID);
    }
}
