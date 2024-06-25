using Microsoft.AspNetCore.Mvc;

namespace FormApp.API
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
