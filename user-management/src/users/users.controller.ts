
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): User {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: User): User {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User): User {
    return this.usersService.update(id, user);
  }
  @Delete(':id')
  delete(@Param('id') id: number): boolean {
    return this.usersService.delete(id);
  }

}