import { Controller, Get, Req, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    return this.userService.getProfile(req.user.id);
  }

  @Get('menu')
  getFoods() {
    return this.userService.getAvailableFoods();
  }

  @UseGuards(JwtAuthGuard)
  @Get('orders')
  getMyOrders(@Req() req: any) {
    return this.userService.getMyOrders(req.user.id);
  }
}
