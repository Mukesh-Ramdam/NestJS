import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor( @InjectModel(User.name) private userModel: Model<UserDocument> ) {}


  // CREATE
  async create(createUserDto: CreateUserDto) {
    const user= await new this.userModel(createUserDto)
    return user.save();
  }

  // READ
  async findAll() {
    const users= await this.userModel.find();
    // console.log("Users", users)
    return users;
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
      console.log("ID is", _id)
      console.log("toBeUpdated", updateUserDto)
      const updatedUser= await this.userModel.findByIdAndUpdate(_id, updateUserDto,{new:true});
      console.log("updatedUser", updatedUser)
      return updatedUser;
    }

  // async update(updateUserDto: UpdateUserDto) {
  //     const updatedUser= await this.userModel.findByIdAndUpdate("638e1e22be8b4f6abda9e6f4", updateUserDto, { new: true });
  //     return updatedUser;
  //   }
  
  // findOne(id: number) {
    //   return `This action returns a #${id} user`;
    // }
    
      
      // remove(id: number) {
        //   return `This action removes a #${id} user`;
        // }
        
        //   async getAllStudents(): Promise<IStudent[]> {
        //     const studentData = await this.studentModel.find();
        //     if (!studentData || studentData.length == 0) {
        //         throw new NotFoundException('Students data not found!');
        //     }
        //     return studentData;
        // }
      }
      