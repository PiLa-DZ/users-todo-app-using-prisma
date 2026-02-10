import express from "express";
const router = express.Router();

router.get("/", (_, res) => {
  res.send("Ok from users router");
});

export default router;
