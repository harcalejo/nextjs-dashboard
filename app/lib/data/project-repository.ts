import { sql } from "@vercel/postgres";
import { ProjectsTable } from "./entity";

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProjects(currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const projects = await sql<ProjectsTable>`
        SELECT
          projects.id,
          projects.name,
          projects.description
        FROM projects
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
    return projects.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}

export async function fetchProjectsPages() {
  try {
    const count = await sql`SELECT COUNT(*) FROM projects`;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of projects.");
  }
}

export async function insertProject(project: ProjectsTable) {
  try {
    await sql<ProjectsTable>`
      INSERT INTO projects
        (name, description, created_at, modified_at)
      VALUES
        (${project.name}, ${project.description}, ${project.created_at}, ${project.modified_at})
    `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to insert project.");
  }
}
