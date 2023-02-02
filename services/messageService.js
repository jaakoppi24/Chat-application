import { sql } from "../database/database.js";

const create = async (name, message) => {
  await sql`INSERT INTO messages (sender, message) VALUES (${ name }, ${message})`;
};

const findAll = async () => {
 const arr = await sql`SELECT * FROM messages`;
  return arr.slice(-5).reverse();
};


export { create, findAll };