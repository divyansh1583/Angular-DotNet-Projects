
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PatientAPI.Data;
using PatientAPI.Models;
namespace PatientAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {   

        public readonly PatientDbContext _patientDbContext;
        public PatientController(PatientDbContext context) 
        {
                _patientDbContext = context;
        }


        //[HttpGet]
        //[Route("/get")]
        //public async Task<IActionResult> GetPatientDetailsAsync()
        //{
        //    var patientDetails = await _patientDbContext.DC_patient.ToListAsync();

        //    return Ok(patientDetails);
        //}


        [HttpPost]
        [Route("/add")]
        public IActionResult AddPatientAsync([FromForm] PatientModel patient)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.Values);
            }
            //_patientDbContext.DC_patient.Add(patient);
            //_patientDbContext.SaveChanges();
            return Ok(patient);
        }   
    }
}