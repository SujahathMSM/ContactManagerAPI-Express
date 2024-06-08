// Desc: Middleware to handle errors\
// This middleware will handle errors that are thrown in the application.
// It will return a JSON object with the error message and stack trace.
const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
      case constants.NOT_FOUND:
        res.json({
          title: "Not found",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case constants.VALIDATION_ERROR:
        res.json({
          title: "Validation Error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;

      case constants.UNAUTHORIZED:
        res.json({
          title: "Unauthorized Error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;

      case constants.FORBIDDEN:
        res.json({
          title: "Forbidden Error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;

      case constants.SERVER_ERROR:
        res.json({
          title: "Server Error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;

      default:
        console.log("No error!, all good");
        break;
    }
        
}

module.exports = errorHandler;