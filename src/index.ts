import {createExpressServer} from './app';
import {getPort} from "./imports/envVariables";

(async () => {
  const server = await createExpressServer();
  const port = getPort();
  server.listen(port, () =>
    console.log(`Example app listening at port ${port}`));
})();


