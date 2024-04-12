import express from 'express';
import {UsersController} from '../controllers/users.js';

const router = express.Router();
const { createUser, getUsers, deleteUser } = UsersController;

router.get('/', getUsers);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router