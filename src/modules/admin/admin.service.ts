import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // 👥 USERS

  async listUsers() {
    return this.prisma.user.findMany();
  }

  async listPendingUsers() {
    return this.prisma.user.findMany({
      where: { isActive: false },
    });
  }

  async updateUserStatus(userId: string, isActive: boolean) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { isActive },
    });
  }

  async activateUser(userId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { isActive: true },
    });
  }

  async deactivateUser(userId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { isActive: false },
    });
  }

  // 🍔 FOOD MANAGEMENT

  createFood(data: { name: string; price: number; description?: string }) {
    return this.prisma.food.create({
      data,
    });
  }

  async listFoods() {
    return this.prisma.food.findMany();
  }

  // 📅 SET FOOD AVAILABILITY

  async setAvailability(foodId: string, date: Date, quantity: number) {
    return this.prisma.foodAvailability.create({
      data: {
        foodId,
        date,
        quantity,
      },
    });
  }

  // 🧾 ORDER MANAGEMENT

  async listOrders() {
    return this.prisma.order.findMany({
      include: {
        user: true,
        food: true,
      },
    });
  }

  async updateOrderStatus(orderId: string, status: any) {
    return this.prisma.order.update({
      where: { id: orderId },
      data: { status },
    });
  }
}