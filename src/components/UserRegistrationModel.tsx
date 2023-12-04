import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
import { db } from "~/server/db";

export default async function UserRegistrationModel() {
  const createUser = async (formData: FormData) => {
    "use server";
    const userEmail = formData.get("email") as string;
    const userName = formData.get("username") as string;

    const isUserRegistered = await db.user.findFirst({
      where: {
        email: userEmail,
      },
    });
    if (!isUserRegistered) {
      await db.user.create({
        data: {
          email: userEmail,
          name: userName,
        },
      });
    }
    revalidatePath("/projects");
    redirect("/projects");
  };
  return (
    <Dialog>
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <DialogTrigger asChild aria-label="User Registration" className="hover:bg-transparent mt-10">
            <Button variant="outline" className="border-none bg-none hover:bg-none">
              <div className="text-purple-700 text-center text-xl font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch border-purple-700 self-center mt-9 px-12 py-5 rounded-xl border-[1.925px] border-solid max-md:px-5">
                Enter Your Email
              </div>
            </Button>
          </DialogTrigger>
        </div>
      </div>
      <DialogContent className="min-w-[45%] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl">Enter Your Username & Email</DialogTitle>
        </DialogHeader>
        <form action={createUser} className="">
          <div className="flex flex-col">
            <Label htmlFor="username" className="my-3 text-lg font-normal text-left">
              Username :
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="Your Username..."
              className="text-xl"
              required
            />
            <Label htmlFor="email" className="my-3 text-lg font-normal text-left">
              Email :
            </Label>
            <Input id="email" name="email" placeholder="Your Email..." required className="text-xl p-3" />
          </div>
          <DialogFooter>
            <Button type="submit" className="mt-3 text-lg bg-purple-700">
              Register
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
