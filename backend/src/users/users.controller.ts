import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // @ApiBearerAuth()
  // @UseGuards(RoleGuard(Role.ADMIN))
  // @UseGuards(JwtGuard)
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
