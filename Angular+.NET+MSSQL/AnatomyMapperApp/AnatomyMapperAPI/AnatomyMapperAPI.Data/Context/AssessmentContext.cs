﻿using AnatomyMapperAPI.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnatomyMapperAPI.Data.Context
{
    public class AssessmentContext : DbContext
    {
        public AssessmentContext(DbContextOptions<AssessmentContext> options) : base(options)
        {
        }

        public DbSet<Assessment> DC_Assessments { get; set; }
        public DbSet<BodyPartMapping> DC_BodyPartMappings { get; set; }
    }
}
