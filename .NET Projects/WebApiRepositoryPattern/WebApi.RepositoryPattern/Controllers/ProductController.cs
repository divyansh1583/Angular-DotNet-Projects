using Microsoft.AspNetCore.Mvc;
using WebApi.Application.DTOs;
using WebApi.Application.Interfaces.Services;

namespace WebApi.RepositoryPattern.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpPost("addProdcut")]
        public ActionResult AddProduct(ProductDto productDto)
        {
            if (productDto == null)
            {
                return BadRequest();
            }
            else
            {
                _productService.AddProduct(productDto);
                return Ok();
            }
        }
        [HttpGet("getProducts")]
        public ActionResult GetProducts()
        {
            var products = _productService.GetProducts();
            if (products.Count > 0)
            {
                return Ok(products);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpGet("getProduct/{productId}")]
        public ActionResult GetProduct(int productId)
        {
            var productDetail = _productService.GetProduct(productId);
            return Ok(productDetail is null ? NotFound() : productDetail);
        }
    }
}
