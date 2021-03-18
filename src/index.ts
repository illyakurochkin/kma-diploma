import {createExpressServer} from './app';

(async () => {
  const server = await createExpressServer();
  const port = process.env.PORT || 8081;
  server.listen(port, () =>
    console.log(`Example app listening at port ${port}`));
})();


