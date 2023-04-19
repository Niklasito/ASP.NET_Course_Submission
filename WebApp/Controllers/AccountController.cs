using Microsoft.AspNetCore.Mvc;
using WebApp.Models.ViewModels;

namespace WebApp.Controllers;

public class AccountController : Controller
{

    #region My Account(//domain.com/account)

    //domain.com/account
    public IActionResult Index()
    {
        return View();
    }

    #endregion


    #region Register(//domain.com/account/register)
    //domain.com/register
    public IActionResult Register()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Register(AccountRegisterViewModel viewModel )
    {
        return View();
    }

    #endregion
  
    
    #region Login(//domain.com/account/login)
    public IActionResult LogIn()
    {
        return View();
    }

    //domain.com/login

    [HttpPost]
    public IActionResult LogIn(AccountLoginViewModel viewModel)
    {
        return View();
    }

    #endregion


    #region Logout(//domain.com/account/logout)
    //domain.com/account/logout
    public IActionResult LogOut()
    {
        return View();
    }

    #endregion
}
