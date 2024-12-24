import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET() {
  const responseText = "Hello World";

  // KV Example:
  const myKvCtx = await getCloudflareContext();
  const myKv = myKvCtx.env.CF_GREET;

  await myKv.put("suffix", " from a KV store!");
  const suffix = await myKv.get("suffix");
  return new Response(responseText + suffix);
}
