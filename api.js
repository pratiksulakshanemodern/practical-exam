// This goes inside /api/api.js
export default function handler(req, res) {
  const name = req.query.name || "World";
  res.status(200).json({ message: `Hello, ${name}!` });
}
