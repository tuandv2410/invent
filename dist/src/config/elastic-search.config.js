"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elasticSearchConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.elasticSearchConfig = {
    node: process.env.ELASTICSEARCH_NODE,
    maxRetries: 10,
    pingTimeout: 60000,
    sniffOnStart: true,
    reload_connections: true,
    retry_on_failure: 2,
    request_timeout: 60,
};
//# sourceMappingURL=elastic-search.config.js.map