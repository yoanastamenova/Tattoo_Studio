import express from 'express';
import 'dotenv/config'
import { AppDataSource } from './database/db';
import { deleteUserById, getAllUsers, updateUserById } from './controllers/users.controller';
import { register, userLogIn } from './controllers/auth.controller';
import { createService, getAllServices } from './controllers/services.controller';

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



// AUTHENTICATION CRUD

app.post('/register', register)       // to create new user
app.post('/login', userLogIn)   //to log in to your account 


// USERS CRUD

app.get('/users/', getAllUsers)       //To show all users in our DB in admin POV
app.get('/users/profile')             //To see user profile as user POV
app.put('/users/profile')             // To modify(update) user profile as user POV


  //additional USER CRUD
app.put('/users/:id', updateUserById)  // to update User finded by ID
app.delete('/user/:id/:role', deleteUserById)   //to eliminate User finded by ID


//APPOINTMENTS CRUD
app.post('/appointments')       //Create new appointment
app.put('/appointments')        //Update an appointment
app.get('/appointments/:id')       //Show an appointment by ID
app.get('/appointments')          //Show all my appointments

// SERVICES CRUD

app.get('/services', getAllServices)     // to see all the services
app.post('/services', createService) //to create a service
app.put('/services/:id')       // to update a service by its ID
app.delete('/services/:id')        // to delete a service by its ID
