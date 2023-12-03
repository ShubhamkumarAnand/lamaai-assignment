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
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Textarea } from "~/components/ui/textarea";

export default async function EpisodeModel({ projectId }: { projectId: string }) {
  const createEpisode = async (formData: FormData) => {
    "use server";
    const projectName = formData.get("episodeName");
    const description = formData.get("description");
    await db.episode.create({
      data: {
        name: projectName as string,
        description: description as string,
        projectId: projectId,
      },
    });
    revalidatePath("/projects");
    redirect(`/projects/${projectId}`);
  };
  return (
    <Dialog>
      <div className="flex justify-center">
        <div className="flex flex-col items-center self-stretch justify-center px-16 border-4 border-dashed mt-9 py-9 rounded-3xl border-neutral-400 max-md:max-w-full max-md:px-5">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="upload Image"
              width={128}
              height={128}
              loading="lazy"
              src="/images/upload.svg"
              className="aspect-[1.07] object-contain object-center w-[137px] overflow-hidden self-center max-w-full"
            />
            <div className="self-stretch mt-6 text-3xl text-zinc-700 whitespace-nowrap max-md:max-w-full">
              Select a file or drag and drop here (Podcast Media or Transcription Text)
            </div>
            <div className="self-center mt-3 text-2xl text-black text-opacity-40 whitespace-nowrap max-md:max-w-full">
              MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
            </div>
            <DialogTrigger asChild aria-label="Episode Creation Form" className="hover:bg-transparent">
              <Button variant="outline" className="border-none bg-none hover:bg-none">
                <div className="text-purple-700 text-center text-xl font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch border-purple-700 self-center mt-9 px-12 py-5 rounded-[192.5px] border-[1.925px] border-solid max-md:px-5">
                  Select File
                </div>
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </div>
      <DialogContent className="min-w-[55%] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Episode</DialogTitle>
        </DialogHeader>
        <form action={createEpisode} className="">
          <div className="flex flex-col">
            <Label htmlFor="episodeName" className="my-3 text-lg font-normal text-left">
              Enter Episode Name :
            </Label>
            <Input id="episodeName" name="episodeName" placeholder="Type Here" className="text-xl" required />
            <Label htmlFor="description" className="my-3 text-lg font-normal text-left">
              Enter Episode Description :
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Episode Description."
              required
              className="text-xl"
            />
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
