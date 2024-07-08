function notFoundPath(req, res, next){
    return res.starus(404).json({
        message: "NOT FOUND PATH"
    });
}

export default notFoundPath