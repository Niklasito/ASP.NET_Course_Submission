using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    public class AdminController : Controller
    {

        //domain.com/admin
        public IActionResult Index()
        {
            return View();
        }
        
        
    }
}
