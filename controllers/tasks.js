import prisma from "../lib/prisma.js";

// 1. Create One Task By User ID
export const createOneTaskByUserId = async (req, res) => {
  const { userId, title, completed } = req.body;
  const result = await prisma.task.create({
    data: { userId, title, completed },
  });
  res.json(result);
};

// 2. Update One Task By Task ID
export const updateOneTaskById = async (req, res) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;
  const result = await prisma.task.update({
    where: { id },
    data: { title, completed },
  });
  res.json(result);
};

// 3. Delete One Task By ID
export const deleteOneTaskById = async (req, res) => {
  const id = Number(req.params.id);
  const result = await prisma.task.delete({
    where: { id },
  });
  res.json(result);
};
