import { data } from "../../data";

export async function PATCH(request, { params }) {
  const { id } = params;
  const { entry } = await request.json();

  const targetIndex = data.findIndex((item) => item.id === Number(id));

  data[targetIndex].dummyData = entry;

  return new Response(JSON.stringify(data[targetIndex]), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
