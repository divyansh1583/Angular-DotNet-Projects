using WebApi.Application.DTOs;
using WebApi.Application.Interfaces.Repositories;
using WebApi.Application.Interfaces.Services;
using WebApi.Domain.Entities;

namespace WebApi.Infrastructure.Implementation.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public void AddProduct(ProductDto productDto)
        {
            //auto mapper
            //mapster
            Product product = new()
            {
                Id = productDto.Id,
                Name = productDto.Name,
                Description = productDto.Description,
            };
             _productRepository.AddProduct(product);
        }

        public Product GetProduct(int productId)
        {
            return _productRepository.GetProduct(productId);
        }

        public List<Product> GetProducts()
        {
            return _productRepository.GetProducts();
        }
    }
}
