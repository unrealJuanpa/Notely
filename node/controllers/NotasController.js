import NotasModel from "../models/NotasModel.js"

export const getAllNotas = async (req, res) => {
    try 
    {
        const datos = await NotasModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getNotas = async (req, res) => {
    try
    {
        const datos = await NotasModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(datos[0])
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const createNotas = async (req, res) => {
    try
    {
        await NotasModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateNotas = async (req, res) => {
    try
    {
        await NotasModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json( { message: "Registro actualizado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const deleteNotas = async (req, res) => {
    try
    {
        await NotasModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Registro eliminado correctamente!" })
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

