# 🔗 Tattoo Studio Database Project 🔗

Welcome to my first backend project using various backend technologies and libraries!

<img src="./img/banner.jpg">
<br>

  <summary> Table of contents 📝</summary>
  <ol>
    <li><a href="#about-the-project-📁">About the project</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#er-diagram-from-sql">ER Diagram from SQL</a></li>
    <li><a href="#local-installation-option">Clone</a></li>
    <li><a href="#endpoints-⚒">Endpoints</a></li>
    <li><a href="#future-functionalities">Future functionalities</a></li>
    <li><a href="#contributions">Contribution</a></li>
    <li><a href="#web-refferences">Web refferences</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#appreciations">Appreciation</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

## About the project 📁

This project is about learning to use Express JS together with some other libraries such as bcrypt and jsonwebtoken on the way. 
The main idea was creating a Database which logs in users/admins and Super Admins to a Tattoo Studio Web Page. To be fully functional users can create appointments, change them, choose what kind of service they want and so on. The same goes for admins(the tattoo artists) and we have one super admin which is the owner of the database and can manage everything if needed.  
<br> More functionalities coming veeeery soon! :)

## Deploy 🚀

<div align="center">
    <a href="https://tattoo-studio.zeabur.app/"><strong> Click here! </strong></a>🚀🚀🚀
</div>

## Stack

Used technologies for the project:

<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://typescriptlang.org">
     <img src= "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</a>    
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="">
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
</a>
<a href="">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&" alt="TypeScript" />
</a>
 </div>

## ER Diagram from SQL 📊

<img src="./img/Screenshot 2024-07-03 at 20.05.06.png">

- We have 4 entities in our Database created here. The strong among them is Roles (it can exist by itself), then we have Users which has many to one relation
  with roles. After this, we have Services which has One to many relation with our last entitiy (Appointments). Speaking of it - Appointments is the weekest of all
  entities, because it depends strongly on Users (because of the user_id) and Services(because of the service_id). More or less our database can be easily understood just by looking at the DDL schema posted here.

## Local installation option ⚙️

1. Clone the repository from the url
2. `$ npm install` (to get all the node packages)
3. Connect the cloned repo with our Database
4. `$ Execute the migrations`
5. `$ Execute the seeders`
6. `$ npm run dev` to run our server
7. ...

## Endpoints ⚒

<details>
<summary>Authentication 🔓</summary> 

- REGISTER

          POST http://localhost:4000/api/register

    body:

    ```js
        {
            "email": "name@mail.com",
            "password": "123456789"
        }
    ```

<br>

- LOGIN	

          POST http://localhost:4000/api/login

    body:

    ```js
        {
            "email": "name@mail.com",
            "password": "123456789"
        }
    ```
</details>

<details>
<summary>Users 🗂</summary>

- GET ALL USERS (only admin)

          GET http://localhost:4000/api/users

    auth:

    ```js
        your token
    ```

<br>

- GET USER PROFILE 

          GET http://localhost:4000/api/users/profile

    auth:

    ```js
        your token
    ```

<br>

- UPDATE USER PROFILE BY ID

          PUT http://localhost:4000/api/profile/update

    body:

    ```js
        {
        "email": "newemail@mail.com"
        }
    ```

    auth:

    ```js
        your token
    ```
<br>

- GET USER BY EMAIL (only admin)

          GET http://localhost:4000/api/users/:email

    body:

    ```js
        {
            "email": "example@mail.com"
        }
    ```

    auth:

    ```js
        your token
    ```
<br>


- DELETE USER BY ID (only admin)

          DELETE http://localhost:4000/api/users/:id

    body:

    ```js
        {
            "id": 3     (the id of the user we want to delete)
        }
    ```

    auth:

    ```js
        your token
    ```

<br>

- CHANGE USER ROLE BY ID (only admin)

          PUT http://localhost:4000/api/users/:id/role

    auth:

    ```js
        your token
    ```
    body:

    ```js
        {
            "id" : 1 (this is the id of the user we will update)
            "role_id": 3     (the new role_id for our user goes here)
        }
    ```

</details>

<details>
<summary>Appointments ☎️</summary>

- CREATE APPOINTMENT

          POST http://localhost:4000/api/appointments/create

    body:

    ```js
        {
        "appointment_date": "2024/01/01",
        "service_id": 2
        }
    ```

    auth:

    ```js
        your token
    ```

<br>

- UPDATE USER APPOINTMENT BY ID

          PUT http://localhost:4000/api/appointments/change

    body:

    ```js
        {
        "id": 3           (the id of the appointment to update)
        "appointment_date": "2024/07/20"        (the new date)
        }
    ```

    auth:

    ```js
        your token
    ```

<br>

- GET USER APPIONTMENTS

          GET http://localhost:4000/api/appointments/scheduled

    auth:

    ```js
        your token
    ```

<br>

- DELETE APPOINTMENT BY ID

          DELETE http://localhost:4000/api/appointments/delete

    auth:

    ```js
        your token
    ```
    body:

    ```js
       {
        "id": 3 (of the appointment you want to delete)
       }
    ```

<br>

- GET APPOINTMENT BY ID

          GET http://localhost:4000/api/appointments/:id

    auth:

    ```js
        your token
    ```

    body:

    ```js
        {
        "id": 3           (the id of the appointment)
        }
    ```

</details>

<details>
<summary>Services 🪪</summary>

- GET ALL SERVICES 

          GET http://localhost:4000/api/services

    auth:

    ```js
        your token
    ```

<br>

- CREATE SERVICE (only for admin)

          POST http://localhost:4000/api/services

    body:

    ```js
        {
        "service_name": "name",
        "description": "what is the service about"
        }
    ```

    auth:

    ```js
        your token
    ```

<br>

- UPDATE SERVICE BY ID (only admin)

          PUT http://localhost:4000/api/services/:id

    body:

    ```js
        {
        "id": 3 (the id of the service to be updated)
        "service_name": "new name"     (new info)
        }
    ```

    auth:

    ```js
        your token
    ```

<br>

- DELETE SERVICE BY ID (only admin)

          DELETE http://localhost:4000/api/services/:id

    auth:

    ```js
        your token
    ```

    body:
     ```js
        {
            "id" : 3
        }
    ```

</details>

<details>
<summary>Roles 🪪</summary>

- GET ALL ROLES (only admin)
      
     GET http://localhost:4000/api/roles

     
    auth:

    ```js
        your token
    ```

<br>

- CREATE ROLE (only admin)
      
      POST http://localhost:4000/api/roles/create
    

    body:

    ```js
        {
        "name": "newRole"
        }
    ```

    auth:

    ```js
        your token
    ```
<br>

- UPDATE ROLE BY ID (only admin)
     
     PUT http://localhost:4000/api/roles/update/:id

    body:

    ```js
        {
        "id": 8,
        "name": "newName"
        }
    ```

     
    auth:

    ```js
        your token
    ```

<br>

- DELETE ROLE BY ID (only admin)

    PUT http://localhost:4000/api/roles/delete

      body:

    ```js
        {
        "id": 8
        }
    ```

     
    auth:

    ```js
        your token
    ```

<br>
</details>

## Future functionalities 
<br>
✅ Add artists and relate them with appointments (still in progress) <br>
⬜ Add user biometrics <br>
⬜ Email and password validations <br>
⬜ ...  <br>

## Contribute to the project 📦

Feel free to suggest an improvment or functionality to my project.

There are two ways of doing this:

1. Opening an issue
2. Creating a fork of the repository
   - Creating a new branch
     ```
     $ git checkout -b feature/yourUsername -feat
     ```
   - Make a commit with your changes
     ```
     $ git commit -m 'feat: this X thing'
     ```
   - Make a push to the branch
     ```
     $ git push origin feature/yourUsername -feat
     ```
   - Opening a Pull Request

## Web refferences 📧

To achieve my project I used data from the following sites:

- google.com
- nobleart.com
- ink.com
- ...

## Development 📌

```js
const developer = "yoanastamenova";

console.log("Developed by: " + developer);
```

## Appreciation 📍

Forever gratefull to GeeksHubs Academy for the oportunety to learn and grow on my career path. ❤️

## Contact 📤

<a href = "mailto:yoana.stamenovaa@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/yoanastamenova" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</p>