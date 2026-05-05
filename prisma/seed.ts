import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@example.com';
  const password = await bcrypt.hash('admin123', 10);

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (!existing) {
    await prisma.user.create({
      data: {
        email,
        password,
        role: Role.ADMIN,
        isActive: true,
      },
    });

    console.log('✅ Admin user created');
  } else {
    console.log('⚠️ Admin already exists');
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });