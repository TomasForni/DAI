import config from "./dbconfig.js";
import sql from "mssql";

let pool = await sql.connect(config);
let result = await pool.request().query("SELECT top 2 * from Pizzas")

console.log(result.recordset.length);
console.log(result.recordset[0].length);
console.log(result.recordset[0]);
console.log(result.recordset);
console.log(result.returnValue);
console.log(result.output);
console.log(result.rowsAffected);

process.exit();