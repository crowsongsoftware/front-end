import {NgxLoggerLevel } from 'ngx-logger';

export const appLogger = {
    serverLoggingUrl: '/api/logs',
    level: NgxLoggerLevel.TRACE,
    serverLogLevel: NgxLoggerLevel.ERROR,
    disableConsoleLogging: false
};