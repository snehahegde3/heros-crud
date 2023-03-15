using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace SupaHerosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupaHeroController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<SupaHero>>> GetSupaHeros()
        {
            return new List<SupaHero>
            {
                new SupaHero
                {
                    Name = "Spider Man",
                    FirstName = "Peter",
                    LastName = "Parker",
                    Place = "New York City"
                }
            };
        }
    }
}
