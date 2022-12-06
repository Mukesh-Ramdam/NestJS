import {IsString, IsEmail, Min, Max} from 'class-validator'

export class CreateUserDto {
    @IsEmail()
    email:String;


    @Min(8, {message:"Password should be at least 8 characters"})
    @IsString()
    password:String;
}
