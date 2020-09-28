import {Application} from "https://deno.land/x/oak/mod.ts";
import {router} from "./src/routes/index.ts";
import { APP_HOST, APP_PORT } from "./config.js";
import _404 from "./src/controllers/404.js";
import errorHandler from "./src/controllers/errorHandler.js"

const app = new Application();
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);