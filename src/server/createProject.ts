import { db } from "~/server/db";

export async function createProject(projectName: string) {
  await db.project.create({
    data: {
      name: projectName,
    },
  });
}
