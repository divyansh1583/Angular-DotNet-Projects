using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnatomyMapperAPI.Data.Models
{
    public class BodyPartMapping
    {
        public int Id { get; set; }
        public int AssessmentId { get; set; }
        public string BodyPart { get; set; }
        public string Details { get; set; }
    }
}
