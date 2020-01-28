const winston = require("winston");

const transports = [];
if (process.env.NODE_ENV !== "dev") {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat()
      )
    })
  );
}

const myFormat = winston.format.printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const loggerInstance = winston.createLogger({
  transports,
  level: process.env.LOG_LEVEL,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    myFormat,
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  )
});

module.exports = loggerInstance;
