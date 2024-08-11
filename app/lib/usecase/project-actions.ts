"use server";

import { z } from "zod";
import { insertProject } from "../data/project-repository";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Por favor ingrese un nombre de proyecto",
  }),
  description: z.string({
    message: "Por favor ingrese una breve descripción del proyecto",
  }),
  createdAt: z.string(),
  modifiedAt: z.string(),
});

export type State = {
  errors?: {
    name?: string[];
    description?: string[];
  };
  message?: string | null;
};

const CreateProject = FormSchema.omit({
  id: true,
  createdAt: true,
  modifiedAt: true,
});

export async function createProject(prevState: State, formData: FormData) {
  const validatedFields = CreateProject.safeParse({
    name: formData.get("projectName"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create project.",
    };
  }

  const { name, description } = validatedFields.data;
  const created_at = new Date().toISOString().split("T")[0];
  const modified_at = created_at;

  try {
    await insertProject({ id: "", name, description, created_at, modified_at });
  } catch (error) {
    return {
      message: "Database Error:Failed to create project.",
    };
  }

  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
}
