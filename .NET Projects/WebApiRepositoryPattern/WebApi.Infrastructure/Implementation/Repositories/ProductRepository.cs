using WebApi.Application.Interfaces.Repositories;
using WebApi.Domain.Entities;

namespace WebApi.Infrastructure.Implementation.Repositories
{
    public class ProductRepository : IProductRepository
    {
        public Task AddProduct(Product product)
        {
            // add logic to add product
            throw new NotImplementedException();
        }
        public Product GetProduct(int productId)
        {
            // add logic to get product from database
            Product product = new() { Id = 1, Name = "Apple", Description = "Fruit" };
            return product;
        }
        public List<Product> GetProducts()
        {
            // get product from database

            Product product = new() { Id = 1, Name = "Apple", Description = "Fruit" };
            Product product1 = new() { Id = 1, Name = "Apple", Description = "Fruit" };
            Product product2 = new() { Id = 1, Name = "Apple", Description = "Fruit" };
            List<Product> products = new() { product1, product2 };
            return products;
        }
    }
}
