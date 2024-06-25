using FormApp.API.Data;
using FormApp.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FormApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        public readonly FormDbContext _formDbContext;

        public FormController(FormDbContext context)
        {
            _formDbContext = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllForms()
        {
            var forms = await _formDbContext.forms.ToListAsync();

            return Ok(forms);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetFormById(Guid id)
        {
            var form = await _formDbContext.forms.FindAsync(id);

            if (form == null)
                return NotFound();

            return Ok(form);
        }

        [HttpPost]
        
        public async Task<IActionResult> AddForm(Form form)
        {
            _formDbContext.forms.Add(form);
            await _formDbContext.SaveChangesAsync();
            return Ok(form);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateForm([FromRoute] Guid id, Form updatedForm)
        {
            var form = await _formDbContext.forms.FindAsync(id);

            if (form == null)
                return NotFound();
            form.Name = updatedForm.Name;
            form.Address = updatedForm.Address;
            form.PhoneNo = updatedForm.PhoneNo;
            form.ClassId = updatedForm.ClassId;
            form.DOB = updatedForm.DOB;

            await _formDbContext.SaveChangesAsync();
            return Ok(form);

        }

        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> deleteForm(Guid id)
        {
            var form = await _formDbContext.forms.FindAsync(id);

            if(form==null)
                return NotFound();

            _formDbContext.forms.Remove(form);

            await _formDbContext.SaveChangesAsync();
            return Ok(form);
        }
    }
}
