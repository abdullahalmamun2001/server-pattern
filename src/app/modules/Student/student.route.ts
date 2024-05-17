
import express from 'express';
import { createStudentController } from './student.controllers';


const router=express.Router();


router.post('/create-student',createStudentController);


export const studentRoutes=router;