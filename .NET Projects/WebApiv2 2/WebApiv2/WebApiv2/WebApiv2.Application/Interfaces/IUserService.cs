using WebApiv2.Shared.Models;

namespace WebApiv2.Application.Interfaces
{
    public interface IUserService
    {
        int GetUserId();
        void AddUser(UserInfoDto user);
    }
}
