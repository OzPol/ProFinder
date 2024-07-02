// pages/api/profile/update.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateProfile = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, email, profilePicture } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        profilePicture,
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default updateProfile;
