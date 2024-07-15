using WebApi.Domain.Entities;

namespace WebApi.Application.Interfaces.Repositories
{
    public interface IProductRepository
    {
        Task AddProduct(Product product);
        List<Product> GetProducts();
        Product GetProduct(int productId);
    }
}
