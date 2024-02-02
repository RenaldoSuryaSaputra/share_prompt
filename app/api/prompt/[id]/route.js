import Prompt from "@models/prompt";
import { connectToDB } from "@utils/databases";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    // params id adalah dynamic params
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response("Prompt Not Found", { status: 404 });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json(); // ambil body

  try {
    await connectToDB();
    // Find the existing prompt by ID
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }
    // Update the prompt with new data
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    // simpan data terbaru kedalam database
    await existingPrompt.save();

    return new Response("Successfully updated the Prompts", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Prompt", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    console.log("DELETE");
    await Prompt.findByIdAndDelete({ _id: params.id });

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error deleting prompt", { status: 500 });
  }
};
