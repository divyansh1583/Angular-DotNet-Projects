using AnatomyMapperAPI.Business.Services;
using AnatomyMapperAPI.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AnatomyMapperAPI.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssessmentController : ControllerBase
    {
        private readonly IAssessmentService _service;

        public AssessmentController(IAssessmentService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAssessment([FromBody] Assessment assessment)
        {
            await _service.AddAssessmentAsync(assessment);
            return Ok(assessment);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAssessment(int id)
        {
            var assessment = await _service.GetAssessmentByIdAsync(id);
            if (assessment == null)
            {
                return NotFound();
            }

            return Ok(assessment);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAssessments()
        {
            var assessments = await _service.GetAllAssessmentsAsync();
            return Ok(assessments);
        }
    }
}
