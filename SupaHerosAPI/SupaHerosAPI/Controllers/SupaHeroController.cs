using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
                    Id = 1,
                    Name="Spider Man",
                    FirstName="Peter",
                    LastName="Parker",
                    Place="New York City"
                }
            };
        }
    }
}
