import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import RoleGuard, { JwtGuard } from 'src/auth/guard';
import { Role } from 'src/shema';
@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiBearerAuth()
  @UseGuards(RoleGuard(Role.USER))
  @UseGuards(JwtGuard)
  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('sort') sort: string,
  ) {
    const queryDto = { matches: {}, page, limit, sort };
    return await this.userService.findAllProfiles(queryDto);
  }
}
