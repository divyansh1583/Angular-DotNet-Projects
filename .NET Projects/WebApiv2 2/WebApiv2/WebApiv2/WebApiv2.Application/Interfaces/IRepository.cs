using WebApiv2.Domain.Entities;

namespace WebApiv2.Application.Interfaces
{
    public interface IRepository
    {
        void Insert(User user);
        void Update(User user);
        void Delete(User user);
    }
}
