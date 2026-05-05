import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // 👥 USERS
  @Get('users')
  listUsers() {
    return this.adminService.listUsers();
  }

  @Get('users/pending')
  listPendingUsers() {
    return this.adminService.listPendingUsers();
  }

  @Patch('users/:id/status')
  updateStatus(@Param('id') id: string, @Body() body: { isActive: boolean }) {
    return this.adminService.updateUserStatus(id, body.isActive);
  }

  @Post('foods')
  createFood(@Body() body: any) {
    return this.adminService.createFood(body);
  }

  @Get('foods')
  listFoods() {
    return this.adminService.listFoods();
  }

  // 📅 AVAILABILITY
  @Post('foods/:id/availability')
  setAvailability(
    @Param('id') id: string,
    @Body() body: { date: string; quantity: number },
  ) {
    return this.adminService.setAvailability(id, new Date(body.date), body.quantity);
  }

  // 🧾 ORDERS
  @Get('orders')
  listOrders() {
    return this.adminService.listOrders();
  }
}