import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import { IncomingMessage, ServerResponse } from 'http';

const Server = http.createServer();

Server.listen(3001, () => {
  console.log('服务器开启成功');
});
