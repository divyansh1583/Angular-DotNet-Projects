namespace FormApp.API.Models
{
    public class Form
    {
        public Guid Id { get; set; } // Assuming Id is an integer
        public string? Name { get; set; } // Mapping Name to NVARCHAR(50)
        public string? Address { get; set; } // Mapping Address to NVARCHAR(100)
        public string? PhoneNo { get; set; } // Mapping PhoneNo to NVARCHAR(15) 
        public int ClassId { get; set; } // Mapping ClassId to INT
        public DateTime DOB { get; set; } // Mapping DOB to DATE
    }
}
