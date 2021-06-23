import { IncomingMessage, OutgoingMessage } from 'http';

import http from 'http';

export default http.createServer(
  (req: IncomingMessage, res: OutgoingMessage) => {
    // res.write('hello world');
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.write('哈哈哈哈');
    res.end();
  }
);
