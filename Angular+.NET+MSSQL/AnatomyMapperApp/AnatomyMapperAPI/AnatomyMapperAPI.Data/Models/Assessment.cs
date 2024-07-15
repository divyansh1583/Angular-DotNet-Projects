using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnatomyMapperAPI.Data.Models
{
    public class Assessment
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public List<BodyPartMapping> BodyPartMappings { get; set; }
    }
}
