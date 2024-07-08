
/*
1: errores
2: Requerimiento
3:Respuesta */
function errorHandler(error, req, res, next){
    return res.status(500).json({
        message: error.message.toUpperCase(),
    })
}

export default errorHandler