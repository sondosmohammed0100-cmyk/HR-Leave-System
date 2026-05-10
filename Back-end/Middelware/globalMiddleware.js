const globalMiddleware = (err ,req, res, next) => {
    console.log(err);
    res.status(500).json({
        msg:"server error"
    })
}
module.exports = globalMiddleware;
