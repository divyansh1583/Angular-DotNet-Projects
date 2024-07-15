using AnatomyMapperAPI.Data.Context;
using AnatomyMapperAPI.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnatomyMapperAPI.Data.Repositories
{
    public class AssessmentRepository : IAssessmentRepository
    {
        private readonly AssessmentContext _context;

        public AssessmentRepository(AssessmentContext context)
        {
            _context = context;
        }

        public async Task<Assessment> GetAssessmentByIdAsync(int id)
        {
            return await _context.Assessments.Include(a => a.BodyPartMappings).FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<IEnumerable<Assessment>> GetAllAssessmentsAsync()
        {
            return await _context.Assessments.Include(a => a.BodyPartMappings).ToListAsync();
        }

        public async Task AddAssessmentAsync(Assessment assessment)
        {
            await _context.Assessments.AddAsync(assessment);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

    }
}
