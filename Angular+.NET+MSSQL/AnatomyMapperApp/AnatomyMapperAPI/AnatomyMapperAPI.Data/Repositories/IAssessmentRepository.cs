using AnatomyMapperAPI.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnatomyMapperAPI.Data.Repositories
{
    public interface IAssessmentRepository
    {
        Task<Assessment> GetAssessmentByIdAsync(int id);
        Task<IEnumerable<Assessment>> GetAllAssessmentsAsync();
        Task AddAssessmentAsync(Assessment assessment);
        Task SaveAsync();
    }
}
