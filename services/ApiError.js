class ApiError extends Error {
  constructor(message, httpStatusCode = 500, context, ...params) {
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    this.message = message;
    this.code = httpStatusCode;
    this.context = context;
    this.date = new Date();
  }
}

module.exports = ApiError;
