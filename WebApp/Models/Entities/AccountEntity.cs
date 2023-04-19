using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApp.Models.Contexts;

namespace WebApp.Models.Entities;

public class AccountEntity
{
    [Key, ForeignKey(nameof(User))]
    public string UserId { get; set; } = null!;
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string? PhoneNumber { get; set; }

    public IdentityUser User { get; set; } = null!;
    public ICollection<AccountAddressEntity> Addresses { get; set; } = new List<AccountAddressEntity>();
}
