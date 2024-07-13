"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./database/db");
const users_controller_1 = require("./controllers/users.controller");
const auth_controller_1 = require("./controllers/auth.controller");
const services_controller_1 = require("./controllers/services.controller");
const auth_1 = require("./middlewares/auth");
const isAdmin_1 = require("./middlewares/isAdmin");
const appointments_controller_1 = require("./controllers/appointments.controller");
const roles_controller_1 = require("./controllers/roles.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 4000;
db_1.AppDataSource.initialize()
    .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch(error => {
    console.log(error);
});
// AUTHENTICATION CRUD
app.post('/api/auth/register', auth_controller_1.register); // to create new user  - pass to Thunder > body > email + password
app.post('/api/auth/login', auth_controller_1.userLogIn); //to log in to your account   - pass to Thunder > auth > your token hash
// USERS CRUD
app.get('/api/users', auth_1.auth, isAdmin_1.isAdmin, users_controller_1.getAllUsers); //To show all users in our DB in admin POV         - pass to Thunder > auth > your token hash
app.get('/api/users/profile', auth_1.auth, users_controller_1.getUserProfile); //To see user profile as user POV          - pass to Thunder > auth > your token hash
app.put('/api/users/profile', auth_1.auth, users_controller_1.modifyUserProfile); // To modify(update) user profile as user POV    - pass to Thunder > auth > your token hash + body > info to be updated ex. email
app.get('/api/users/:email', auth_1.auth, isAdmin_1.isAdmin, users_controller_1.getUserByEmail); // to get user by mail
app.delete('/api/users/:id', auth_1.auth, isAdmin_1.isAdmin, users_controller_1.deleteUserById); //to eliminate User finded by ID
app.put('/api/users/:id/role', auth_1.auth, isAdmin_1.isAdmin, users_controller_1.changeUserRole); // to change User role finded by ID
//APPOINTMENTS CRUD
app.post('/api/appointments/create', auth_1.auth, appointments_controller_1.createAppointment); //Create new appointment           - pass to Thunder > auth > your token hash
app.put('/api/appointments/change', auth_1.auth, appointments_controller_1.updateAppointment); //Update an appointment           - pass to Thunder > auth > your token hash
app.get('/api/appointments/scheduled', auth_1.auth, appointments_controller_1.showMyAppointments); //Show all my appointments        - pass to Thunder > auth > your token hash
app.delete('/api/appointments/delete', auth_1.auth, appointments_controller_1.deleteAppointment); //to delete selected appoitnment
app.get('/api/appointments/:id', auth_1.auth, appointments_controller_1.findAppointmendById); //Show an appointment by ID                - pass to Thunder > auth > your token hash
// SERVICES CRUD
app.get('/api/services', services_controller_1.getAllServices); // to see all the services
app.post('/api/services', auth_1.auth, isAdmin_1.isAdmin, services_controller_1.createService); //to create a service
app.put('/api/services/:id', auth_1.auth, isAdmin_1.isAdmin, services_controller_1.updateSerivce); // to update a service by its ID
app.delete('/api/services/:id', auth_1.auth, isAdmin_1.isAdmin, services_controller_1.deleteService); // to delete a service by its ID
// ROLES CRUD
app.get('/api/roles', auth_1.auth, isAdmin_1.isAdmin, roles_controller_1.getRoles); // to see all roles
app.post('/api/roles/create', auth_1.auth, isAdmin_1.isAdmin, roles_controller_1.createRole); //to make new role
app.put('/api/roles/update/:id', auth_1.auth, isAdmin_1.isAdmin, roles_controller_1.updateRole); //to update role by its ID
app.delete('/api/roles/delete', auth_1.auth, isAdmin_1.isAdmin); //to delete a role by its ID 
