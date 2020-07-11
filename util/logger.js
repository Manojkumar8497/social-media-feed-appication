const log4js = require('log4js');
log4js.configure({
    appenders: { serverError: { type: 'file', filename: './util/errors/errors.log' } },
    categories: { default: { appenders: ['serverError'], level: 'error' } }
});

const logger = log4js.getLogger('serverError');

module.exports = logger;