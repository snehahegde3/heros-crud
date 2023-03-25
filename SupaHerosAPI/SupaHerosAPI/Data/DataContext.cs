using Microsoft.EntityFrameworkCore;

namespace SupaHerosAPI.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}

        public DbSet<SupaHero> SupaHeros => Set<SupaHero>();
    }
}