import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile(@Req() req: any) {
    return this.userService.getProfile(req.user.id);
  }

  @Get('foods')
  getFoods() {
    return this.userService.getAvailableFoods();
  }

  @Get('orders')
  getMyOrders(@Req() req: any) {
    return this.userService.getMyOrders(req.user.id);
  }
}