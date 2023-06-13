import config from "./dbconfig.js";
import sql from "mssql";

class PizzaService {
    getAll = async () => { 
    let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .query('SELECT * FROM Pizzas')
            returnEntity = result.recordset;

        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    getById = async (id) => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM Pizzas')
            returnEntity = result.recordset[0][0];

        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (pizza) => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .input('pNombre', sql.VarChar, nombre)
            .input('pLibreGluten', sql.Bit, libreGluten)
            .input('pImporte', sql.Float, importe)
            .input('pDescripcion', sql.VarChar, descripcion)

            .query('INSERT INTO Pizzas (Id, Nombre, LibreGluten, Importe, Descripcion VALUES (@pId, @pNombre, @pLibreGluten, @pImporte, @pDescripcion')
     
            returnEntity = result.recordset[0][0];

        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}
