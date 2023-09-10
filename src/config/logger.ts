// const winston = require('winston');
import winston from 'winston';
import 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';

// Define your severity levels.
// With them, You can create log files,
// see or hide levels based on the running ENV.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
} 
// This method set the current severity based on
// the current NODE_ENV: show all the log levels
// if the server was run in development mode; otherwise,
// if it was run in production, show only warn and error messages.
const level = () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
}
// Define different colors for each level.
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}
// Tell winston that you want to link the colors
// defined above to the severity levels.
winston.addColors(colors)
// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
  // Add the message timestamp with the preferred format
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  // Tell Winston that the logs must be colored
  winston.format.colorize({ all: true }),
  // winston.format.json(),
  
  // Define the format of the message showing the timestamp, the level and the message
  winston.format.printf(
    (info) => `${info.timestamp} ${info.message} ${info.level}  `,
  ),
) 
// Define which transports the logger must use to print out messages.
// In this example, we are using three different transports
 // Define which transports the logger must use to print out messages.
const transports = [
  // Allow the use the console to print the messages
  new winston.transports.Console(),
  //  rotate logs every 3 days
  new winston.transports.DailyRotateFile({
    dirname: 'logs',
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true, 
    maxSize: '20m',
    maxFiles: '14d',
    auditFile: 'audit.json',
    auditHashType: 'sha256',
    // createSymlink: true,
    // symlinkName: 'application.log',
    // format: winston.format.combine(
    //   winston.format.timestamp(),
    //   winston.format.json()
    // )
  }),
  // rotate only error logs every 3 days
  new winston.transports.DailyRotateFile({
    dirname: 'logs/error',
    filename: 'error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    auditFile: 'audit.json',
    auditHashType: 'sha256',
    level: 'error',
  }),
 

]
// Create the logger instance that has to be exported
// and used to log messages.
export const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
})

//  createa a fn that will read the logs folder and return the latest log file
export const getLatestLog = () => {
  //  dont use __dirname because it will return the dist folder
  const readDir = path.join(process.cwd(), 'logs');
  const logPath = fs.readdirSync(readDir).filter((file) => {
    return file.match(/.*\.log$/);
  }).sort((a, b) => {
    return fs.statSync(path.join(readDir, b)).mtime.getTime() -
      fs.statSync(path.join(readDir, a)).mtime.getTime();
  })[0];



 console.log(logPath);
 let logs = fs.readFileSync(path.join(readDir, logPath), 'utf-8');
 console.log(logs);
 
  return logs;
}
// getLatestLog();
