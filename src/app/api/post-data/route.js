import { data } from "../data";

export async function POST(request) {
  const { entry } = await request.json();

  const newEntry = { id: data.length + 1, dummyData: entry };

  data.push(newEntry);

  return new Response(JSON.stringify(newEntry), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
    statusText: "Created",
  });
}
