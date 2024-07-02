// pages/api/services/search.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const searchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { zipcode, city, state, country, category, rating } = req.query;

  try {
    const services = await prisma.service.findMany({
      where: {
        zipcode: zipcode ? { equals: String(zipcode) } : undefined,
        city: city ? { equals: String(city) } : undefined,
        state: state ? { equals: String(state) } : undefined,
        country: country ? { equals: String(country) } : undefined,
        category: category ? { equals: String(category) } : undefined,
        rating: rating ? { gte: Number(rating) } : undefined,
      },
    });

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default searchHandler;
