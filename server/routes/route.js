import express from "express";
import {
  create_Register,
  login,
  update,
  fetchData,
} from "../controller/controller.js";

const routes = express.Router();

routes.route("/api/register")
  .post(create_Register)
  .options((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, X-Auth-Token"
    );
    res.sendStatus(200);
  });

routes.route("/api/login")
  .post((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    login(req, res);
  });

routes.route("/api/update/:id")
  .put((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    update(req, res);
  });

routes.route("/api/fetchData")
  .get((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    fetchData(req, res);
  });

export { routes };
