import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { id } = req.query;
  const url = await kv.get(id);
  if (url) return res.redirect(302, url);
  res.status(404).send('Not found');
}
