using EverythingFormAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EverythingFormAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EverythingFormController : ControllerBase
    {
        [HttpGet]

        public async Task<IActionResult> GetAsync()
        {
            return Ok("EverythingFormController");
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync([FromForm] EverythingFormModel form)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(form);
        }
    }
}