using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupaHerosAPI.Data;

namespace SupaHerosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupaHeroController : ControllerBase
    {
        public readonly DataContext _context;
        public SupaHeroController(DataContext context)
        {
            _context= context;
        }

        [HttpGet]
        public async Task<ActionResult<List<SupaHero>>> GetSupaHeros()
        {
            return Ok(await _context.SupaHeros.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<SupaHero>>> CreateSupaHero(SupaHero hero)
        {
            _context.SupaHeros.Add(hero);
            await _context.SaveChangesAsync();

            return Ok(await _context.SupaHeros.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<SupaHero>>> UpdateSupaHero(SupaHero hero)
        {
            //overwrites every property of that supahero
            var dbHero = await _context.SupaHeros.FindAsync(hero.Id);
            if (dbHero == null)
            {
                return BadRequest("Hero not found");
            }
            dbHero.Name = hero.Name;
            dbHero.FirstName = hero.FirstName;
            dbHero.LastName = hero.LastName;
            dbHero.Place= hero.Place;

            await _context.SaveChangesAsync();

            return Ok(await _context.SupaHeros.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SupaHero>>> DeleteSupaHero(int id)
        {
            var dbHero = await _context.SupaHeros.FindAsync(id);
            if (dbHero == null)
            {
                return BadRequest("Hero not found");
            }
            _context.SupaHeros.Remove(dbHero);
            await _context.SaveChangesAsync();

            return Ok(await _context.SupaHeros.ToListAsync());
        }
    }
}
