/**
 * Verify basic fake logger, uses console.log to format the log.
 */
class Logger {
  colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    reset: "\x1b[0m"
  };
  error(message, className, extendedFields = {}) {
    this._writeLocal("ERROR", className, message, extendedFields, this.colors.red);
  }
  warn(message, className, extendedFields = {}) {
    this._writeLocal("WARN", className, message, extendedFields, this.colors.yellow);
  }
  info(message, className, extendedFields = {}) {
    this._writeLocal("INFO", className, message, extendedFields, this.colors.cyan);
  }
  debug(message, className, extendedFields = {}) {
    this._writeLocal("DEBUG", className, message, extendedFields, this.colors.green);
  }
  _writeLocal(level, className, message, extendedFields, color) {
    const formattedMessage =
      `\n-----\n${new Date().toLocaleString()} - ${level}\n` +
      `file: ${className}\n` +
      `message: ${message}\n` +
      `extendedFields: ${JSON.stringify(extendedFields)}\n-----\n`;
    console.log(color, formattedMessage, this.colors.reset);
  }
}

module.exports = new Logger();
