import express from 'express';
import 'dotenv/config'
import { AppDataSource } from './database/db';
import { deleteUserById, getAllUsers, getUserProfile, modifyUserProfile, updateUserById } from './controllers/users.controller';
import { register, userLogIn } from './controllers/auth.controller';
import { createService, deleteService, getAllServices, updateSerivce } from './controllers/services.controller';
import { auth } from './middlewares/auth';
import { isAdmin } from './middlewares/isAdmin';
import { createAppointment, deleteAppointment, findAppointmendById, showMyAppointments, updateAppointment } from './controllers/appointments.controller';

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

app.post('/api/auth/register', register)       // to create new user  - pass to Thunder > body > email + password
app.post('/api/auth/login', userLogIn)   //to log in to your account   - pass to Thunder > auth > your token hash


// USERS CRUD

app.get('/api/users', auth, isAdmin, getAllUsers)       //To show all users in our DB in admin POV         - pass to Thunder > auth > your token hash

app.get('/api/users/profile',  auth, getUserProfile)             //To see user profile as user POV          - pass to Thunder > auth > your token hash

app.put('/api/users/profile', auth, modifyUserProfile)             // To modify(update) user profile as user POV    - pass to Thunder > auth > your token hash + body > info to be updated ex. email



  //additional USER CRUD
app.put('/api/users/:id', auth, isAdmin, updateUserById)  // to update User finded by ID
app.delete('/api/user/:id/:role', auth, isAdmin, deleteUserById)   //to eliminate User finded by ID


//APPOINTMENTS CRUD
app.post('/api/appointments/create', auth, createAppointment)       //Create new appointment           - pass to Thunder > auth > your token hash

app.put('/api/appointments/change', auth, updateAppointment)        //Update an appointment           - pass to Thunder > auth > your token hash

app.get('/appointments/:id', auth, findAppointmendById)       //Show an appointment by ID                - pass to Thunder > auth > your token hash

app.get('/appointments/scheduled', auth, showMyAppointments)          //Show all my appointments        - pass to Thunder > auth > your token hash

app.delete('/api/appointments/delte', auth, deleteAppointment)      //to delete selected appoitnment
// SERVICES CRUD

app.get('/api/services', getAllServices)     // to see all the services
app.post('/services', auth, isAdmin, createService) //to create a service
app.put('/services/:id', auth, isAdmin, updateSerivce)       // to update a service by its ID
app.delete('/services/:id', auth, isAdmin, deleteService)        // to delete a service by its ID