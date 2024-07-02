// scripts/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.service.createMany({
    data: [
      {
        title: 'Service 1',
        description: 'Description for service 1',
        price: 100,
        providerId: 1,
        zipcode: '12345',
        city: 'SomeCity',
        state: 'SomeState',
        country: 'SomeCountry',
        category: 'SomeCategory',
        rating: 5,
      },
      {
        title: 'Service 2',
        description: 'Description for service 2',
        price: 150,
        providerId: 1,
        zipcode: '67890',
        city: 'AnotherCity',
        state: 'AnotherState',
        country: 'AnotherCountry',
        category: 'AnotherCategory',
        rating: 4,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
