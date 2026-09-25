export interface SkillGroup {
  title: string;
  icon: string;
  color: string;
  content: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    color: "#228B22",
    content: ["JavaScript, TypeScript", "Python, Java, C#", "HTML, CSS"],
  },
  {
    title: "Frameworks & Runtimes",
    icon: "browser",
    color: "#D8BFD8",
    content: ["React, Next.js, Astro", "Node.js, Express.js, FastAPI", "ASP.NET"],
  },
  {
    title: "Databases",
    icon: "database",
    color: "#89CFF0",
    content: [
      "PostgreSQL, SQL Server",
      "MongoDB, Redis",
      "Firebase, Supabase",
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: "git-branch",
    color: "#F1502F",
    content: ["Git, GitHub, GitLab", "CI/CD, Docker, AWS", "Claude Code"],
  },
];
