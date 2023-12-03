import Link from "next/link";
import CreateProjectModel from "~/components/CreateProjectModel";
import Navbar from "~/components/Navbar";
import { db } from "~/server/db";
import { getWeeksBehind } from "~/utils/dateTime";

export default async function Projects() {
  const projects = await db.project.findMany({
    include: {
      episodes: true,
    },
  });
  return (
    <>
      <Navbar />
      <div className="mx-48 -mt-16">
        <div className="flex items-center justify-between">
          <p className="text-5xl font-bold text-purple-700">Projects</p>
          <div className="scale-75">
            <CreateProjectModel />
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              prefetch
              href={`/projects/${project.id}`}
              className="flex max-w-sm gap-4 rounded-xl border-[1.19px] border-gray-400 p-2 shadow-xl"
              key={project.id}>
              <p className="w-32 my-auto text-white bg-purple-700 shadow-2xl h-28 rounded-2xl">
                <p className="flex items-center justify-center p-2 my-2 font-semibold text-7xl">
                  {project.name.charAt(0).toUpperCase()}P
                </p>
              </p>
              <div className="flex flex-col my-1">
                <p className="mt-3 text-2xl font-semibold text-purple-700">{project.name}</p>
                <p className="text-sm">{project.episodes.length} Episodes</p>
                <p className="mt-3 text-gray-500">Last Edited {getWeeksBehind(project.updatedAt)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
