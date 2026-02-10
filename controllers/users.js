import prisma from "../lib/prisma.js";

// 1. Create One User
export const createOneUser = async (req, res) => {
  const { name } = req.body;
  const result = await prisma.user.create({
    data: { name },
  });
  res.json(result);
};
