import prisma from "../lib/prisma.js";

// 1. Create One Task By User ID
export const createOneTaskByUserId = async (req, res) => {
  const { userId, title, completed } = req.body;
  const result = await prisma.task.create({
    data: { userId, title, completed },
  });
  res.json(result);
};
