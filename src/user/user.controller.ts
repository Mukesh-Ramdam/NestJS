import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userValidationPipe } from './../pipes/userValidation.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(new userValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(":_id")
  update(@Param('_id') _id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log("ID from controller", _id)
    return this.userService.update(_id, updateUserDto);
  }

  // @Patch()
  // update(@Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(updateUserDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }


  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
