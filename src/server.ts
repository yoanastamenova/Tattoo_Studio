import express from 'express';
import 'dotenv/config'
import { AppDataSource } from './database/db';
import { deleteUserById, getAllUsers, getUserProfile, modifyUserProfile, updateUserById } from './controllers/users.controller';
import { register, userLogIn } from './controllers/auth.controller';
import { createService, deleteService, getAllServices, updateSerivce } from './controllers/services.controller';
import { auth } from './middlewares/auth';
import { isAdmin } from './middlewares/isAdmin';

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
app.post('/login', auth, userLogIn)   //to log in to your account 


// USERS CRUD

app.get('/users', auth, isAdmin, getAllUsers)       //To show all users in our DB in admin POV
app.get('/users/profile',  auth, getUserProfile)             //To see user profile as user POV
app.put('/profile/update', auth, modifyUserProfile)             // To modify(update) user profile as user POV


  //additional USER CRUD
app.put('/users/:id', updateUserById)  // to update User finded by ID
app.delete('/user/:id/:role', deleteUserById)   //to eliminate User finded by ID


//APPOINTMENTS CRUD
app.post('/appointments/create')       //Create new appointment
app.put('/appointments/change')        //Update an appointment
app.get('/appointments/:id')       //Show an appointment by ID
app.get('/appointments/scheduled')          //Show all my appointments

// SERVICES CRUD

app.get('/services', getAllServices)     // to see all the services
app.post('/services', createService) //to create a service
app.put('/services/:id', isAdmin, updateSerivce)       // to update a service by its ID
app.delete('/services/:id', isAdmin, deleteService)        // to delete a service by its ID
