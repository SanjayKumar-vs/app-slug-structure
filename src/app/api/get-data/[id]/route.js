import { data } from "../../data";

export async function GET(_request, { params }) {
  const { id } = params;

  const targetIndex = data.findIndex((item) => item.id === Number(id));

  return new Response(JSON.stringify(data[targetIndex]), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
