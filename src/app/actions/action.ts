import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "~/server/db";

export async function createProject(formData: FormData) {
  const projectName = formData.get("projectName");
  await db.project.create({
    data: {
      name: projectName as string,
    },
  });
  revalidatePath("/projects");
  redirect("/projects");
}
