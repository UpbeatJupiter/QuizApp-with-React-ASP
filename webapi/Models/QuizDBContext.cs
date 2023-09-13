using Microsoft.EntityFrameworkCore;

namespace webapi.Models
{
	public class QuizDBContext:DbContext
	{
		public QuizDBContext(DbContextOptions<QuizDBContext> options) : base(options) { }

		public DbSet<Question> Questions { get; set; }
		public DbSet<Participant> Participants { get; set; }
	}
}
