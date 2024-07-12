import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// In production and preview deployments (on Vercel), the VERCEL_URL environment variable is set.
// In development (on your local machine), the NGROK_HOST environment variable is set.
const WEBHOOK_HOST = process.env.VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NGROK_HOST;

export async function POST(request) {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      'The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.'
    );
  }

  const { prompt } = await request.json();

  const input = {
    top_p: 0.9,
    prompt: prompt,
    min_tokens: 0,
    temperature: 0.6,
    prompt_template: "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a helpful assistant<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
    presence_penalty: 1.15
  };

//   if (WEBHOOK_HOST) {
//     input.webhook = `${WEBHOOK_HOST}/api/webhooks`;
//     input.webhook_events_filter = ['start', 'completed'];
//   }

  // A prediction is the result you get when you run a model, including the input, output, and other details
  //   const prediction = await replicate.predictions.create(options);

  const output = await replicate.predictions.create({
    model: "meta/meta-llama-3-70b-instruct",
    input,
    stream: true,
  });


  if (output?.error) {
    return NextResponse.json({ detail: output.error }, { status: 500 });
  }

  return NextResponse.json(output, { status: 201 });
}
