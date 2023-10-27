import express from 'express';
import { addUser } from '../Controller/user-controller.js';
import { getUsers } from '../Controller/user-controller.js';
import { getUser } from '../Controller/user-controller.js';
import User from '../schema/user-schema.js';


const router = express.Router();


router.post('/add' , addUser);
router.get('/all', getUsers);
router.get('/:id',getUser);


export default router;