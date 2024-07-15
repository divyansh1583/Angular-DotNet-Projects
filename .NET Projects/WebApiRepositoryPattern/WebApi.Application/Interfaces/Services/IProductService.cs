using WebApi.Application.DTOs;
using WebApi.Domain.Entities;

namespace WebApi.Application.Interfaces.Services
{
    public interface IProductService
    {
        void AddProduct(ProductDto productDto);
        List<Product> GetProducts();
        Product GetProduct(int productId);
    }
}
