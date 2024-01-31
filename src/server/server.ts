import express from "express";
import os from "os";
import apiRouter from "./api-router";
import serverRender from "./render";

import config from "./config";

const server = express();

server.set("view engine", "ejs");

server.use(express.static("dist"));

server.use("/api", apiRouter);

server.get("/", async (req, res) => {
	const { initialMarkup, initialData } = await serverRender();
	res.render("index", {
		initialMarkup,
		initialData,
	});
});


server.listen(config.PORT, config.HOST, () => {
	console.info(
		`Express server is listening at ${config.SERVER_URL}`,
		`Free Mem: ${os.freemem() / 1024 / 1024}`,
	);
})
