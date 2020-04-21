/// <reference types="node" />
import { Receiver } from './types';
import { Server } from 'http';
import { Application, RequestHandler } from 'express';
import App from './App';
import { Logger } from '@slack/logger';
export interface ExpressReceiverOptions {
    signingSecret: string;
    logger?: Logger;
    endpoints?: string | {
        [endpointType: string]: string;
    };
    processBeforeResponse?: boolean;
}
/**
 * Receives HTTP requests with Events, Slash Commands, and Actions
 */
export default class ExpressReceiver implements Receiver {
    app: Application;
    private server;
    private bolt;
    private logger;
    private processBeforeResponse;
    constructor({ signingSecret, logger, endpoints, processBeforeResponse, }: ExpressReceiverOptions);
    private requestHandler;
    init(bolt: App): void;
    start(port: number): Promise<Server>;
    stop(): Promise<void>;
}
export declare const respondToSslCheck: RequestHandler;
export declare const respondToUrlVerification: RequestHandler;
/**
 * This request handler has two responsibilities:
 * - Verify the request signature
 * - Parse request.body and assign the successfully parsed object to it.
 */
export declare function verifySignatureAndParseRawBody(logger: Logger, signingSecret: string): RequestHandler;
//# sourceMappingURL=ExpressReceiver.d.ts.map