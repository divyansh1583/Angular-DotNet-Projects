using Microsoft.EntityFrameworkCore;
using WebApiv2.Domain.Entities;

namespace WebApiv2.Infrastructure.DatabaseContext
{
    public class SDirectDbContext : DbContext
    {
        public SDirectDbContext(DbContextOptions<SDirectDbContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        public virtual DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired();
                entity.Property(e => e.EmailAddress).IsRequired();
            });
        }
    }
}
