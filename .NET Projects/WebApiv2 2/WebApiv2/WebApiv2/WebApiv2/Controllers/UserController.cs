using Microsoft.AspNetCore.Mvc;
using WebApiv2.Application.Interfaces;
using WebApiv2.Shared.Models;

namespace WebApiv2.Controllers
{
    [Route("api/user")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("user")]
        public async Task<IActionResult> AddUser(UserInfoDto userDto)
        {
            _userService.AddUser(userDto);
            return Ok();
        }
    }
}
