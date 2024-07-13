import { notFound } from "next/navigation";

export default async function Home({ params }) {
  const { satellite = [] } = params;

  const data = await import(`@/data/satellites/${satellite.join("/")}.json`)
    .then((module) => module.default)
    .catch((error) => {
      console.error("ERROR finding JSON:", error);
      return notFound();
    });

  return (
    <div>
      SATELLITE PARAMS {"->"} {satellite.join("/")}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
