import Link from "next/link";
import Navbar from "~/components/Navbar";
import { db } from "~/server/db";

export default async function Project({
  params,
}: {
  params: { projectId: string };
}) {
  const episodes = await db.episode.findMany({
    where: {
      projectId: params.projectId,
    },
  });
  return (
    <main>
      <Navbar />
      <main className="mx-40">
        <div className="mb-10 flex justify-between">
          <p className="text-5xl font-bold text-purple-700">Episodes</p>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-2">
          {episodes.map((episode) => (
            <Link
              prefetch
              href={`/projects/${episode.id}`}
              className="flex max-w-sm gap-6 rounded-xl border-[1px] border-black p-2"
              key={episode.id}
            >
              <p className="h-28 w-28 rounded-full bg-purple-700 text-white">
                <p className="my-4 p-2 text-center text-6xl font-semibold">
                  {episode.name.charAt(0)}P
                </p>
              </p>
              <div className="my-1 flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold">{episode.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </main>
  );
}
