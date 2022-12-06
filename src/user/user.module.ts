import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Demo, DemoSchema } from "../schemas/demo.schema";
import { User, UserSchema } from "../schemas/user.schema";

@Module({
  imports:[
    MongooseModule.forRoot("mongodb+srv://sujit99:amorhack7878@qb-1.1hswt.mongodb.net/chat?retryWrites=true&w=majority"),
    MongooseModule.forFeature([{name:Demo.name, schema:DemoSchema}]),
    MongooseModule.forFeature([{name:User.name, schema:UserSchema}]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
