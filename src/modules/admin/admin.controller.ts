import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AddFoodAvailabilityDto } from './DTOs/AddFoodAvailabilityDto';
import { CreateFoodDto } from './DTOs/CreateFoodDto';
import { UpdateUserStatusDto } from './DTOs/UpdateUserStatusDto';

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
  updateStatus(@Param('id') id: string, @Body() body: UpdateUserStatusDto) {
    return this.adminService.updateUserStatus(id, body.isActive);
  }

  @Post('foods')
  createFood(@Body() body: CreateFoodDto) {
    return this.adminService.createFood(body);
  }

  @Get('foods')
  listFoods() {
    return this.adminService.listFoods();
  }

  @Post('foods/:id/availability')
  setAvailability(
    @Param('id') id: string,
    @Body() body: AddFoodAvailabilityDto,
  ) {
    return this.adminService.setAvailability(id, body.date, body.quantity);
  }

  // 🧾 ORDERS
  @Get('orders')
  listOrders() {
    return this.adminService.listOrders();
  }
}
