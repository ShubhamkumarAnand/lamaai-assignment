import Link from "next/link";
import CreateProjectModel from "~/components/CreateProjectModel";
import Navbar from "~/components/Navbar";
import { db } from "~/server/db";
import { formatPrismaDate } from "~/utils/dateTime";

export default async function Projects() {
  const projects = await db.project.findMany({
    include: {
      episodes: true,
    },
  });
  return (
    <>
      <Navbar />
      <div className="mx-44 ">
        <div className="flex justify-between">
          <p className="text-5xl font-bold text-purple-700">Projects</p>
          <div className="-mt-16 scale-75">
            <CreateProjectModel />
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-10">
          {projects.map((project) => (
            <Link
              prefetch
              href={`/projects/${project.id}`}
              className="flex max-w-md gap-4 rounded-xl border-[1px] border-black p-2"
              key={project.id}>
              <p className="h-28 w-28 rounded-2xl bg-purple-700 text-white">
                <p className="my-3 p-2 text-7xl font-semibold mx-3">
                  {project.name.charAt(0).toUpperCase()}P
                </p>
              </p>
              <div className="my-1 flex flex-col">
                <p className="text-2xl font-semibold">{project.name}</p>
                <p>
                  {" "}
                  <span className="bg-purple-300 p-1 rounded-md text-sm">{project.episodes.length}</span> -
                  Episodes
                </p>
                <p className="mt-5">
                  Last Edited - <span className="font-semibold">{formatPrismaDate(project.updatedAt)}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
