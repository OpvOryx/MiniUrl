import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { url } = req.body;
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  await kv.set(id, url);
  res.status(200).json({ id });
}
