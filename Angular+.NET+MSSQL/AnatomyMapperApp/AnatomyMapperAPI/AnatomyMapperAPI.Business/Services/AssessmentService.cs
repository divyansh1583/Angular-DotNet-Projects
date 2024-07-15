using AnatomyMapperAPI.Data.Models;
using AnatomyMapperAPI.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnatomyMapperAPI.Business.Services
{
    public class AssessmentService : IAssessmentService
    {
        private readonly IAssessmentRepository _repository;

        public AssessmentService(IAssessmentRepository repository)
        {
            _repository = repository;
        }

        public async Task<Assessment> GetAssessmentByIdAsync(int id)
        {
            return await _repository.GetAssessmentByIdAsync(id);
        }

        public async Task<IEnumerable<Assessment>> GetAllAssessmentsAsync()
        {
            return await _repository.GetAllAssessmentsAsync();
        }

        public async Task AddAssessmentAsync(Assessment assessment)
        {
            await _repository.AddAssessmentAsync(assessment);
            await _repository.SaveAsync();
        }
    }
}
