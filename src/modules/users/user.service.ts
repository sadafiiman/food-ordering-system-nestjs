import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // 👤 Get current user profile
  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });
  }

  // 🍔 View available food (user side)
  async getAvailableFoods() {
    return this.prisma.food.findMany({
      include: {
        availabilities: true,
      },
    });
  }

  // 🧾 View own orders
  async getMyOrders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        food: true,
      },
    });
  }
}