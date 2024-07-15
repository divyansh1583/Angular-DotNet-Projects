namespace WebApiv2.Application.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        void Delete(T entity);
        void Insert(T entity);
        void Update(T entity);
    }
}
