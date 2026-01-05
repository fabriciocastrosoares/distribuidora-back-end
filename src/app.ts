import  express, { json, Request, Response }  from "express";
import httpStatus from "http-status";
import router from "./routers/index-routes";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK);
});

app.use(router);

export default app;