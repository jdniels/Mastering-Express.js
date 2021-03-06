const fetch = require("node-fetch");

const r = async (url, method) =>
  await fetch(`http://localhost:9999${url}`, { method }).then(r => r.json());
const log = (...obj) => obj.forEach(o => console.dir(o, { colors: true }));

async function delById() {
  const users = await r("/users/all", "get");
  const { id } = users[0];
  const deleteById = await r(`/users/${id}`, "delete");
  const getAll = await r("/users/all", "get");

  log("[GET] users:", users);
  log(`[DELETE] a user with id="${id}":`, deleteById);
  log(`[GET] users:`, getAll);
}

delById();
