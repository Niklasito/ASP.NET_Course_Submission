using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using WebApp.Models.Contexts;
using WebApp.Models.Entities;
using WebApp.Models.Identities;
using WebApp.Models.ViewModels;

namespace WebApp.Services;

public class AuthService
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;
    private readonly AddressService _addressService;
    private readonly SeedService _seedService;

    public AuthService(UserManager<AppUser> userManager, AddressService addressService, SignInManager<AppUser> signInManager, SeedService seedService)
    {
        _userManager = userManager;
        _addressService = addressService;
        _signInManager = signInManager;
        _seedService = seedService;
    }

    public async Task<bool> UserAlreadyExistsAsync(Expression<Func<AppUser, bool>> expression)
    {
      return await _userManager.Users.AnyAsync(expression);
    }

    public async Task<bool> RegisterUserAsync(AccountRegisterViewModel viewModel)
    {

        await _seedService.SeedRoles();

        var userRoleName = "user";

        if (!await _userManager.Users.AnyAsync())
        {
            userRoleName = "admin";
        }

        AppUser appUser = viewModel;

        var result = await _userManager.CreateAsync(appUser, viewModel.Password);

        if (result.Succeeded)
        {
            await _userManager.AddToRoleAsync(appUser, userRoleName);

            
            var addressEntity = await _addressService.GetOrCreateAsync(viewModel);
            if (addressEntity != null)
            {
                await _addressService.AddAddressAsync(appUser, addressEntity);
                return true;
            }
        }
        
        return false;
       
    }


    public async Task<bool> LogInAsync(AccountLoginViewModel viewModel)
    {
        var user = await _userManager.FindByEmailAsync(viewModel.Email);
        if (user != null)
        {
           var result = await _signInManager.PasswordSignInAsync(user, viewModel.Password, viewModel.RememberMe, false);
            return result.Succeeded;
        }
        return false;
    }

}
