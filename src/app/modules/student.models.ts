import { Schema, model, connect } from 'mongoose';
import { Student, UserName, userPersonalInfo, userGurdianInfo } from './Student/student.interface';

const userNameSchema= new Schema<UserName>({
    name:{
        firstName:{
            type:String,
           
        },
        lastName:{
            type:String,
           
        },
      }
})

const userPersonalInfoSchema=new Schema<userPersonalInfo>({
address: String,
  email: String,
  gender: ['male' , 'female'],
  dateOfBirth: { type: String, required: true },
  isActive: ['active' , 'blocked'],
  height: Number,
  bloodGroup: [' A+' , 'A-' , 'B+' , 'B-' , 'O+' , 'O-' , 'AB+' , 'AB-'],
})


const userGurdianInfoSchema=new Schema<userGurdianInfo>({
    fathersName: { type: String, required: true },
    fathersPhone: { type: String, required: true },
    fathersOccapation: String,
    mothersName: { type: String, required: true },
    mothersPhone: String,
    mothersOccapation: String,
  })
const studentSchema = new Schema<Student>({
  id: { type: String },
  name:userNameSchema,
  personalInfo:userPersonalInfoSchema,
  gurdianInfo:userGurdianInfoSchema,
});


export const StudentModel=model<Student>('student',studentSchema)