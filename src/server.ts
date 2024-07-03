import express from 'express';
import 'dotenv/config'
import { AppDataSource } from './database/db';
import { deleteUserById, getAllUsers, updateUserById } from './controllers/users.controller';
import { register } from './controllers/auth.controller';

const app = express();
app.use(express.json())

const PORT = process.env.port || 4000;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })

    // USERS CRUD

    app.get('/users/', getAllUsers)      //To show all users in our DB in admin POV
    app.post('/users/register', register)  // to create newUser
    app.post('/users/:id', updateUserById)  // to update User finded by ID
    app.delete('/user/:id', deleteUserById)   //to eliminate User finded by ID