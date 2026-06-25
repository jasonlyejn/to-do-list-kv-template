import {
	type LoaderFunctionArgs,
	type ActionFunctionArgs,
} from "@remix-run/cloudflare";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const k = url.searchParams.get("k");
	if (!k) return Response.json({ error: "Missing key" }, { status: 400 });
	const value = await context.cloudflare.env.TO_DO_LIST.get(k);
	return Response.json({ value });
};

export const action = async ({ request, context }: ActionFunctionArgs) => {
	if (request.method !== "POST") {
		return Response.json({ error: "Method not allowed" }, { status: 405 });
	}
	const body = (await request.json()) as { k: string; v: string };
	const { k, v } = body;
	if (!k) return Response.json({ error: "Missing key" }, { status: 400 });
	await context.cloudflare.env.TO_DO_LIST.put(k, v);
	return Response.json({ ok: true });
};
