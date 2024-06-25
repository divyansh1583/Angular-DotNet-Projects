using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EverythingFormAPI.Models
{
    public class EverythingFormModel
    {
        //public int? Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Age is required")]
        [Range(18, 100, ErrorMessage = "Age must be between 18 and 100")]
        public int Age { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public GenderType? Gender { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address"    )]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters long")]
        public string Password { get; set; }

        [Required(ErrorMessage = "SelectSingle is required")]
        public int SelectSingle { get; set; }

        [Required(ErrorMessage = "SelectMultiple is required")]
        public int[] SelectMultiple { get; set; }

        [Required(ErrorMessage = "Textarea is required")]
        public string Textarea { get; set; }

        // Additional properties can be added as needed
        public IFormFile? FileInput { get; set; }
        public enum GenderType
        {
            Male,
            Female
        }
    }
}