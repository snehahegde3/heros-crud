namespace SupaHerosAPI;

public static class GitHelpers
{
    public static string GetShortCommitSha()
    {
        string pathToRepo = @"C:\path\to\repo"; // Replace with your path to the Git repository

        // navigate to the Git repository directory
        ProcessStartInfo startInfo = new ProcessStartInfo
        {
            FileName = "git",
            Arguments = $"rev-parse --short HEAD",
            WorkingDirectory = pathToRepo,
            RedirectStandardOutput = true,
            UseShellExecute = false
        };

        using (Process process = Process.Start(startInfo))
        {
            process.WaitForExit();
            string output = process.StandardOutput.ReadToEnd().Trim();
            return output;
        }
    }
}
