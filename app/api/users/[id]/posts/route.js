import Prompt from "@models/prompt";
import { connectToDB } from "@utils/databases";

// dynamic variable params [id]
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    // mendapatkan prompts berserta creator atau usernya "populate"
    const prompts = await Prompt.find({ creator: params.id }).populate("creator");
    const response = {
      data : prompts,
      message : "Berhasil mendapatkan data",
      page : 1
    }
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", { status: 500 });
  }
};
