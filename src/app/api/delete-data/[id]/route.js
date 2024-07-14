import { data } from "../../data";

export async function DELETE(_request, { params }) {
  const { id } = params;

  const targetIndex = data.findIndex((item) => item.id === Number(id));

  const deleted = data[targetIndex];

  data.splice(targetIndex, 1);

  return new Response(JSON.stringify(deleted), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
