using WebApiv2.Application.Interfaces;
using WebApiv2.Infrastructure.Implementation.Repositories;

namespace WebApiv2.Infrastructure.DatabaseContext
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly SDirectDbContext _context;
        public UnitOfWork(SDirectDbContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            _context.Dispose();
        }
        public void Commit()
        {
            _context.SaveChanges();
        }

        public IGenericRepository<T> Repository<T>() where T : class
        {
            return new GenericRepository<T>(_context);
        }
    }
}
