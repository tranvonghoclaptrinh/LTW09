using System.Text.Json;
using LTW09.Models;
using Microsoft.AspNetCore.Mvc;

namespace LTW09.Controllers;

public class HomeController : Controller
{
    private readonly IWebHostEnvironment _environment;

    public HomeController(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    public async Task<IActionResult> Index()
    {
        var path = Path.Combine(_environment.WebRootPath, "data", "assignments.json");
        var assignments = new List<Assignment>();

        if (System.IO.File.Exists(path))
        {
            await using var stream = System.IO.File.OpenRead(path);
            assignments = await JsonSerializer.DeserializeAsync<List<Assignment>>(stream,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? assignments;
        }

        return View(assignments);
    }
}
