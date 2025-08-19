import { GET_EPISODES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: 1 }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rick and Morty Episodes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.episodes.results.map((episode: any) => (
          <div key={episode.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{episode.name}</h2>
            <p className="text-gray-600">{episode.episode}</p>
            <p className="text-sm text-gray-500">Air Date: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}