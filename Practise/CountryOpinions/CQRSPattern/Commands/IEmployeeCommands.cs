using CQRSPattern.Models;

namespace CQRSPattern.Commands
{
    public interface IEmployeeCommands
    {
        void SaveEmployeeData(Employee employee);
    }
}
