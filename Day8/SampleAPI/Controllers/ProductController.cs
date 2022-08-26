using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SampleAPI.Models;
using SampleAPI.Services;

namespace SampleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCors")]
    public class ProductController : ControllerBase
    {
        private readonly IRepo _repo;

        public ProductController(IRepo repo)    
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> Get()
        {
            var products = await _repo.GetAll();
            if (products.Count > 0)
                return Ok(products);
            return BadRequest();
        }

        [HttpGet]
        [Route("GetProductById")]
        public async Task<ActionResult<List<Product>>> Get(int pid)
        {
            var product = await _repo.Get(pid);
            if (product != null)
                return Ok(product);
            return BadRequest();
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Post(Product product)
        {
            var prod = await _repo.Add(product);
            if (prod != null)
                return Created("Product Created",prod);
            return BadRequest("Unable to create product");
        }
        [HttpPut]
        public async Task<ActionResult<Product>> Put(Product product)
        {
            var prod = await _repo.Update(product);
            if (prod != null)
                return Ok(prod);
            return BadRequest("Unable to update product");
        }
        [HttpDelete]
        public async Task<ActionResult<Product>> Delete(int pid)
        {
            var prod = await _repo.Delete(pid);
            if (prod != null)
                return Ok(prod);
            return BadRequest("Unable to delete product");
        }
    }
}
