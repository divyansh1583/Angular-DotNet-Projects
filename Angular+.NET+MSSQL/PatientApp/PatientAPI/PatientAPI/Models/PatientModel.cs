using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PatientAPI.Models
{
    public class PatientModel
    {
        [Required(ErrorMessage = "First Name is required")]
        [MinLength(2, ErrorMessage = "First Name must be at least 2 characters long")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name is required")]
        [MinLength(2, ErrorMessage = "Last Name must be at least 2 characters long")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public GenderType? Gender { get; set; }

        [Required(ErrorMessage = "Date of Birth is required")]
        public DateTime  DOB { get; set; }

        [Required(ErrorMessage = "Phone Number is required")]
        [RegularExpression(@"^\d{10}$", ErrorMessage = "Phone Number must be 10 digits long")]
        public string PhoneNo { get; set; }

        [Required(ErrorMessage = "Address is required")]
        [MinLength(5, ErrorMessage = "Address must be at least 5 characters long")]
        [MaxLength(100, ErrorMessage = "Address cannot exceed 100 characters")]
        public string Address { get; set; }

        [Required(ErrorMessage = "File can't be empty")]
        public IFormFile File { get; set; }
    }
}
