import { Sidebar } from "lucide-react";
import Link from "next/link";
import EpisodeFeature from "~/components/EpisodeListFeatures";
import EpisodeModel from "~/components/EpisodeModel";
import Navbar from "~/components/Navbar";
import { db } from "~/server/db";

export default async function Project({ params }: { params: { projectId: string } }) {
  const episodes = await db.episode.findMany({
    where: {
      projectId: params.projectId,
    },
  });
  return (
    <main>
      <Navbar />
      <Sidebar />
      <main className="flex flex-col mx-48">
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
    </main>
  );
}
