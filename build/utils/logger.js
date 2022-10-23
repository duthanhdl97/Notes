"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = exports.isDebugging = void 0;
const date_fns_1 = require("date-fns");
exports.isDebugging = process.env.NODE_ENV !== 'production' || process.env.DEBUGGING;
const getPrefix = (level, category) => {
    return `${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')} [${level}] ${category}`;
};
const logger = () => {
    return {
        getLogger(category) {
            return {
                debug: exports.isDebugging ? (message, ...optionalParams) => {
                    console.debug(getPrefix('DEBUG', category), message, ...optionalParams);
                } : (_message, ..._optionalParams) => {
                    //
                },
                info: (message, ...optionalParams) => {
                    console.info(getPrefix('INFO', category), message, ...optionalParams);
                },
                warn: (message, ...optionalParams) => {
                    console.warn(getPrefix('WARN', category), message, ...optionalParams);
                },
                error: (message, ...optionalParams) => {
                    console.error(getPrefix('ERROR', category), message, ...optionalParams);
                },
            };
        },
    };
};
exports.getLogger = logger().getLogger;
exports.default = (0, exports.getLogger)('app');
