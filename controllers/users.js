import prisma from "../lib/prisma.js";

// 1. Create One User
export const createOneUser = async (req, res) => {
  const { name } = req.body;
  const result = await prisma.user.create({
    data: { name },
  });
  res.json(result);
};

// 2. Get All Users
export const getAllUsers = async (_, res) => {
  const result = await prisma.user.findMany();
  res.json(result);
};

// 3. Get One User By ID
export const getOneUserById = async (req, res) => {
  const id = Number(req.params.id);
  const result = await prisma.user.findUnique({
    where: { id },
  });
  res.json(result);
};
