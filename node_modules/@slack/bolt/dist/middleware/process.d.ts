import { Middleware, AnyMiddlewareArgs, Context } from '../types';
import { WebClient } from '@slack/web-api';
import { Logger } from '@slack/logger';
export declare function processMiddleware(middleware: Middleware<AnyMiddlewareArgs>[], initialArgs: AnyMiddlewareArgs, context: Context, client: WebClient, logger: Logger, last: () => Promise<void>): Promise<void>;
//# sourceMappingURL=process.d.ts.map