let store = globalThis.store || {};

export default async function handler(req, res) {
  const { id } = req.query;
  const target = store[id];
  if (target) {
    res.writeHead(302, { Location: target });
    res.end();
  } else {
    res.status(404).send('Link not found');
  }
}
