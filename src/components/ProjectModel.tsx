import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import Image from "next/image";
import { db } from "~/server/db";
import { revalidatePath } from "next/cache";

export default async function ProjectModel() {
  const createProject = async (formData: FormData) => {
    "use server";
    const projectName = formData.get("projectName");
    await db.project.create({
      data: {
        name: projectName as string,
      },
    });
    revalidatePath("/projects");
  };
  return (
    <Dialog>
      <div className="flex justify-center">
        <DialogTrigger
          asChild
          aria-label="Project Creation Form"
          className="left-0 right-0 flex items-center justify-center max-w-md gap-4 mt-6 hover:bg-current">
          <Button variant="outline" className="h-20 bg-gray-800 rounded-xl">
            <Image
              loading="lazy"
              src="/images/buttons/plus.svg"
              className="object-contain object-center max-w-full overflow-hidden aspect-square w-14 fill-stone-50 shrink-0"
              alt="Project Logo"
              width={56}
              height={56}
            />
            <p className="flex items-center self-start justify-center mt-3 text-3xl font-semibold text-stone-50">
              Create New Project
            </p>
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="min-w-[55%] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create Project</DialogTitle>
        </DialogHeader>
        <form action={createProject} className="">
          <div className="flex flex-col">
            <Label htmlFor="projectName" className="my-3 text-lg font-normal text-left">
              Enter Project Name :
            </Label>
            <Input id="projectName" name="projectName" placeholder="Type Here" className="text-xl" required />
          </div>
          <DialogFooter>
            <Button type="submit" className="mt-3 text-lg bg-purple-700">
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
