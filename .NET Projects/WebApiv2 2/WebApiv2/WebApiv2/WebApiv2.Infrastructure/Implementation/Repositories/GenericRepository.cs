using WebApiv2.Application.Interfaces;
using WebApiv2.Infrastructure.DatabaseContext;

namespace WebApiv2.Infrastructure.Implementation.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly SDirectDbContext _dbContext;
        public GenericRepository(SDirectDbContext sDirectDbContext)
        {
            _dbContext = sDirectDbContext;
        }
        public void Delete(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
            _dbContext.SaveChanges();
        }

        public void Insert(T entity)
        {
            _dbContext.Set<T>().Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(T entity)
        {
            _dbContext.Set<T>().Update(entity);
            _dbContext.SaveChanges();
        }
    }
}
