import db from "../database/db.js"
import { DataTypes } from "sequelize"

const NotasModel = db.define('notas', {
    titulo: { type: DataTypes.TEXT },
    fecha: { type: DataTypes.DATE },
    contenido: { type: DataTypes.TEXT}
})

export default NotasModel