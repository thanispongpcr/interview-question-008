using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tcc.Exam.Api.Data;
using Tcc.Exam.Api.Dtos;
using Tcc.Exam.Api.Models;

namespace Tcc.Exam.Api.Controllers
{
    [ApiController]
    [Route("api/exam-questions")]
    public class ExamQuestionsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ExamQuestionsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<ExamQuestion>>> GetAll()
        {
            var questions = await _context.ExamQuestions
                .OrderBy(x => x.Number)
                .ToListAsync();

            return Ok(questions);
        }

        [HttpPost]
        public async Task<ActionResult<ExamQuestion>> Create(CreateExamQuestionRequest request)
        {
            if (
                string.IsNullOrWhiteSpace(request.QuestionText) ||
                string.IsNullOrWhiteSpace(request.Choice1) ||
                string.IsNullOrWhiteSpace(request.Choice2) ||
                string.IsNullOrWhiteSpace(request.Choice3) ||
                string.IsNullOrWhiteSpace(request.Choice4)
            )
            {
                return BadRequest("กรุณากรอกข้อมูลให้ครบถ้วน");
            }

            var nextNumber = await _context.ExamQuestions.AnyAsync()
                ? await _context.ExamQuestions.MaxAsync(x => x.Number) + 1
                : 1;

            var question = new ExamQuestion
            {
                Number = nextNumber,
                QuestionText = request.QuestionText.Trim(),
                Choice1 = request.Choice1.Trim(),
                Choice2 = request.Choice2.Trim(),
                Choice3 = request.Choice3.Trim(),
                Choice4 = request.Choice4.Trim()
            };

            _context.ExamQuestions.Add(question);
            await _context.SaveChangesAsync();

            return Ok(question);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var question = await _context.ExamQuestions.FindAsync(id);

            if (question == null)
            {
                return NotFound();
            }

            _context.ExamQuestions.Remove(question);
            await _context.SaveChangesAsync();

            var questions = await _context.ExamQuestions
                .OrderBy(x => x.Number)
                .ToListAsync();

            for (int i = 0; i < questions.Count; i++)
            {
                questions[i].Number = i + 1;
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}