// [id].ts: [] in file names for dynamic routes in Next.js
// This endpoint is part of the user profile management feature
// it fetches a user's profile by their ID.
// pages/api/profile/[id].ts
// pages/api/profile/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getProfile = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default getProfile;
