using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models.Entities
{
    public class AccountAddressEntity
    {
        [Key, ForeignKey(nameof(Account))]
        public string UserId { get; set; } = null!;

        public AccountEntity Account { get; set; } = null!;

        [Key, ForeignKey(nameof(Address))]
        //public int AddressId { get; set; } = null!;

        public AddressEntity Address { get; set; } = null!;
       
        public ICollection<AccountAddressEntity> Accounts { get; set; } = new List<AccountAddressEntity>();
    }
}
