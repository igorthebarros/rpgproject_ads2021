//Probably we won't need this in the future, because routes are in server.js
import { Router, request, response } from "express";

const router = Router();

app.get('/', (reques, response) => {
    response.send('index')
});

export { router };