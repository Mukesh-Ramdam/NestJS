import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DemoDocument = Demo & Document;


@Schema()
export class Demo {
    
    @Prop({required:true})
    email:String;

    @Prop({required:true})
    password:String;

    @Prop({required:true})
    isSeller:boolean;
    
}

export const DemoSchema = SchemaFactory.createForClass(Demo);