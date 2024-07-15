using WebApiv2.Application.Interfaces;
using WebApiv2.Domain.Entities;
using WebApiv2.Infrastructure.DatabaseContext;

namespace WebApiv2.Infrastructure.Implementation.Repositories
{
    public class Repository : IRepository
    {
        private readonly SDirectDbContext _dbContext;
        public Repository(SDirectDbContext sDirectDbContext)
        {
            _dbContext = sDirectDbContext;
        }
        public void Delete(User user)
        {
            throw new NotImplementedException();
        }

        public void Insert(User user)
        {
            _dbContext.Set<User>().Add(user);
            _dbContext.SaveChanges();
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
