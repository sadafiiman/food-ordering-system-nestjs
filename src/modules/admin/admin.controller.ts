import { Controller, Get, Post, Patch, Body, Param , UseGuards} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AddFoodAvailabilityDto } from './DTOs/AddFoodAvailabilityDto';
import { CreateFoodDto } from './DTOs/CreateFoodDto';
import { UpdateUserStatusDto } from './DTOs/UpdateUserStatusDto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @UseGuards(JwtAuthGuard)
  @Get('users')
  listUsers() {
    return this.adminService.listUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/pending')
  listPendingUsers() {
    return this.adminService.listPendingUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Patch('users/:id/status')
  updateStatus(@Param('id') id: string, @Body() body: UpdateUserStatusDto) {
    return this.adminService.updateUserStatus(id, body.isActive);
  }

  @UseGuards(JwtAuthGuard)
  @Post('foods')
  createFood(@Body() body: CreateFoodDto) {
    return this.adminService.createFood(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('foods')
  listFoods() {
    return this.adminService.listFoods();
  }

  @UseGuards(JwtAuthGuard)
  @Post('foods/:id/availability')
  setAvailability(
    @Param('id') id: string,
    @Body() body: AddFoodAvailabilityDto,
  ) {
    return this.adminService.setAvailability(id, body.date, body.quantity);
  }

  @UseGuards(JwtAuthGuard)
  @Get('orders')
  listOrders() {
    return this.adminService.listOrders();
  }
}
