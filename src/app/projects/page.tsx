import Link from "next/link";
import CreateProjectModel from "~/components/CreateProjectModel";
import Navbar from "~/components/Navbar";
import { db } from "~/server/db";

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
              className="flex max-w-lg gap-6 rounded-xl border-[1px] border-black p-2"
              key={project.id}
            >
              <p className="h-28 w-32 rounded-2xl bg-purple-500 text-white">
                <p className="my-3 p-2 text-7xl font-semibold">
                  {project.name.charAt(0)}P
                </p>
              </p>
              <div className="my-1 flex flex-col">
                <p className="text-lg font-semibold">{project.name}</p>
                <p>{project.episodes.length} - Episodes</p>
                <p className="mt-3">
                  Last Edited - {project.updatedAt.toDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
