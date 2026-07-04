using Microsoft.EntityFrameworkCore;
using Tcc.Exam.Api.Models;

namespace Tcc.Exam.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<ExamQuestion> ExamQuestions { get; set; }
    }
}