namespace Tcc.Exam.Api.Models
{
    public class ExamQuestion
    {
        public int Id { get; set; }
        public int Number { get; set; }

        public string QuestionText { get; set; } = string.Empty;

        public string Choice1 { get; set; } = string.Empty;

        public string Choice2 { get; set; } = string.Empty;

        public string Choice3 { get; set; } = string.Empty;

        public string Choice4 { get; set; } = string.Empty;
    }
}