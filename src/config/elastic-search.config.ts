import * as dotenv from 'dotenv';
dotenv.config();
export const elasticSearchConfig = {
    node: process.env.ELASTICSEARCH_NODE,
    maxRetries: 10,
    pingTimeout: 60000,
    sniffOnStart: true,
    reload_connections: true,
    retry_on_failure: 2,
    request_timeout: 60,
}