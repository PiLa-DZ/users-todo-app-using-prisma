import express from "express";
import usersRouter from "./routes/users.js";
import tasksRouter from "./routes/tasks.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tasks", tasksRouter);

app.get("/", (_, res) => res.send("Ok From index.js"));

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
