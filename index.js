import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_, res) => res.send("Ok From index.js"));

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
