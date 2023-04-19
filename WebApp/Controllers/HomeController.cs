using Microsoft.AspNetCore.Mvc;
using WebApp.Models.Contexts;

namespace WebApp.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            
            return View();
        }
    }
}
