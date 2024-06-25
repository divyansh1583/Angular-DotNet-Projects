using FormApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FormApp.API.Data
{
    public class FormDbContext : DbContext
    {
        public FormDbContext(DbContextOptions<FormDbContext> options) : base(options) { }

        public DbSet<Form> forms { get; set; }

    }
}
