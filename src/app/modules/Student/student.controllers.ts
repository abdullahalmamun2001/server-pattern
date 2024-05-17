import { Request, Response } from 'express';
import { studentServices } from './student.service';

export const createStudentController = (req: Request, res: Response) => {
 try{
    const studentData = req.body;
    const result = studentServices.createStudentIntoDb(studentData);
  
  
    res.status(200).json({
      success:true,
      message:"Student is created successfully",
      data:result
    })
 }catch(err){
    console.log(err);
 }
};

// {
//   "id": "12345",
//   "name": {
//     "firstName": {
//       "type": "John",
//       "required": true
//     },
//     "lastName": {
//       "type": "Doe",
//       "required": true
//     }
//   },
//   "personalInfo": {
//     "address": "123 Main Street, Springfield",
//     "email": "john.doe@example.com",
//     "gender": "male",
//     "dateOfBirth": {
//       "type": "1990-01-01",
//       "required": true
//     },
//     "isActive": "active",
//     "height": 180,
//     "bloodGroup": "O+"
//   },
//   "gurdianInfo": {
//     "fathersName": {
//       "type": "Richard Doe",
//       "required": true
//     },
//     "fathersPhone": {
//       "type": "555-6789",
//       "required": true
//     },
//     "fathersOccapation": "Engineer",
//     "mothersName": {
//       "type": "Jane Doe",
//       "required": true
//     },
//     "mothersPhone": "555-1234",
//     "mothersOccapation": "Teacher"
//   }
// }


