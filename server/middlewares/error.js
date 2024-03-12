

export const errorMiddleware = (err, req, res, next) => {
    err.message ||= "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
      success: false,
        message: err.message,
    });
};


export const TryCatch = (passedFunction) => async (req, res, next) => {
    try {
        passedFunction(req, res, next);
        
    } catch (error) {
        next(error);
    }
}