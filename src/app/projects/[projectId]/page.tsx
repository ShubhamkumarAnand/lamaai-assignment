import Link from "next/link";
import EpisodeFeature from "~/components/EpisodeListFeatures";
import EpisodeModel from "~/components/EpisodeModel";
import EpisodeSidebar from "~/components/EpisodeSidebar";
import { db } from "~/server/db";
import Image from "next/image";
import SideIcon from "~/components/SideIcon";

export default async function Project({ params }: { params: { projectId: string } }) {
  const episodes = await db.episode.findMany({
    where: {
      projectId: params.projectId,
    },
  });
  return (
    <main>
      <div className="flex gap-6">
        <div className="w-[440px]">
          <EpisodeSidebar projectId={params.projectId} />
        </div>
        <main className="flex flex-col mx-48">
          <header className=" flex justify-between mt-16 mb-12">
            <Link
              href="/projects"
              className="flex text-2xl justify-start items-center font-bold text-gray-500">
              <Image
                src="/images/buttons/projectHome.svg"
                width={52}
                height={52}
                alt="home"
                className="-mt-1"
              />
              <p className="mt-1">/ Sample Project /</p>
              <p className="text-purple-700 mt-2">Upload</p>
            </Link>
            <SideIcon />
          </header>
          <div className="flex justify-between mb-10">
            <p className="text-5xl font-bold text-purple-700">Episodes</p>
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-6 ">
            {episodes.map((episode) => (
              <Link
                prefetch
                href={`/projects/${episode.id}`}
                className="flex max-w-sm gap-3 rounded-xl border-[1px] border-gray-300 shadow-2xl p-2"
                key={episode.id}>
                <p className="text-white bg-purple-700 rounded-full h-28 w-28">
                  <p className="p-2 my-4 text-6xl font-semibold text-center">{episode.name.charAt(0)}P</p>
                </p>
                <div className="flex flex-col items-center justify-center my-1">
                  <p className="text-2xl font-semibold">{episode.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <EpisodeFeature />
          <div className="flex items-center justify-center">
            <EpisodeModel projectId={params.projectId} />
          </div>
          S
        </main>
      </div>
    </main>
  );
}
