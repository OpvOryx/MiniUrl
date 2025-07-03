let store = {};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;
    const id = Math.random().toString(36).substring(2, 8);
    store[id] = url;
    res.status(200).json({ id });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
globalThis.store = store;
