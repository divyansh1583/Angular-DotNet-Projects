

using AnatomyMapperAPI.Business.Services;
using AnatomyMapperAPI.Data.Context;
using AnatomyMapperAPI.Data.Repositories;
using Microsoft.EntityFrameworkCore;
namespace AnatomyMapperAPI.Presentation
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddDbContext<AssessmentContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddScoped<IAssessmentRepository, AssessmentRepository>();
            builder.Services.AddScoped<IAssessmentService, AssessmentService>();

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}