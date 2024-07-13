import { notFound } from "next/navigation";

export default async function Home({ params }) {
  const { service } = params;

  const data = await import(`@/data/services/${service}.json`)
    .then((module) => module.default)
    .catch((error) => {
      console.error("ERROR finding JSON:", error);
      return notFound();
    });

  return (
    <div>
      PARAMS {"->"} {service}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
