# Tattoo Studio Database Project

<img src="./img/banner.jpg">
<br>

<details>
  <summary> Table of contents 📝</summary>
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#er-diagram-from-sql">Database Diagram</a></li>
    <li><a href="#clond">Clone</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#future-functionalities">Future functionalities</a></li>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#web-refferances">Web refferance</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#appreciations">Appreciations</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the project
This project is about learning to use Express JS together with some other frameworks such as bcrypt and jsonwebtoken on the way. The main idea was creating a Database which logs in users/admins and Super Admins to a Tattoo Studio Web Page. To be fully functional users can create appointments, change them, choose what kind of service they want and so on. The same goes for admins(the tattoo artists) and we have one super admin which is the owner of the database and can manage everything if needed. More to come in terms of functionalities soon :)  

## Deploy 🚀
<div align="center">
    <a href="https://www.google.com"><strong> Web page coming soon! </strong></a>🚀🚀🚀
</div>

## Stack
Used technologies for the project:
<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>


## ER Diagram from SQL
<img src="./img/Screenshot 2024-07-03 at 20.05.06.png">

## Local installation option
1. Clone the repository from the url
2. ` $ npm install `
3. Connect the cloned repo with our Database
4. ``` $ Execute the migrations ``` 
5. ``` $ Execute the seeders ``` 
6. ``` $ npm run dev ``` to elevate our server
7. ...

## Endpoints
<details>
<summary>Authentication</summary>

- AUTH
    - REGISTER

            POST http://localhost:4000/api/auth/register
        body:
        ``` js
            {
                "user": "Name",
                "email": "yourmail@mail.com",
                "password": "123456789"
            }
        ```

    - LOGIN

            POST http://localhost:4000/api/auth/login  
        body:
        ``` js
            {
                "user": "Name",
                "email": "yourmail@mail.com",
                "password": "123456789"
            }
        ```
        </details>
        <details>

<summary>Users</summary>

- USERS

    - GET ALL USERS (ONLY FOR ADMINS)

            GET http://localhost:4000/api/users
        auth:
        ```
        your token

        ```

    - CHANGE PROFILE

            PUT http://localhost:4000/api/users/profile
        auth:
        ```
        your token

        ```
        body:
        ``` js
            {
                info you want to change goes here
            }
        ```

    - USER PROFILE

            GET http://localhost:4000/api/users/profile
        auth:
        ```
        your token

        ```


    - PROFILE UPDATE BY ID

            GET http://localhost:4000/api/users/profile
        auth:
        ```
        your token
        ```

    - DELETE USER BY ID

            GET http://localhost:4000/api/users/profile
        auth:
        ```
        your token
        ```


</details>

<details>
<summary>Appointments</summary>

- APPOINTMENTS

    - CREATE APPOINTMENT

            POST http://localhost:4000/api/appointments/create
        
        auth:
        ```
        your token
        ```
        body:
        ``` js
            {
                "appointment_date": "2024/01/01",
                "service_id": 2
            }
        ```

    - CHANGE APPOINTMENT

            PUT http://localhost:4000/api/appointments/change
             
        auth:
        ```
        your token
        ```
        body:
        ``` js
            {
                "id": yourappid,
                "infotochange": change
            }
        ```

        - FIND APPOINTMENT BY ID
        
            GET http://localhost:4000/api/appointments/:id
             
        auth:
        ```
        your token
        ```
        body:
        ``` js
            {
                "id": 1
            }
        ```

        - SHOW USER APPOINTMENTS

            GET http://localhost:4000/api/appointments/scheduled
             
        auth:
        ```
        your token
        ``` 

        - DELETE APPOINTMENT

            DELETE http://localhost:4000/api/appointments/delete
             
        auth:
        ```
        your token
        ``` 
        body:
        ``` js
            {
                "id": 1
            }
        ```
</details>

<details>

<summary> Services </summary>

- SERVICES
    - CREATE SERVICE

            POST http://localhost:4000/api/services
                 
        auth:
        ```
        your token
        ``` 
        body:
        ``` js
            {
                "service_name": "Name",
                "description": "blablabla.com"
            }
        ```

    - SEE ALL SERVICES

            GET http://localhost:4000/api/services
                 
        auth:
        ```
        your token
        ``` 
        
        
    - UPDATE SERVICE

            PUT http://localhost:4000/api/services/:id
                 
        auth:
        ```
        your token
        ``` 
        body:
        ``` js
            {
                "id": 2,
                "description": "blablabla.com"
            }
        ```
     - FIND SERVICE BY ID

            GET http://localhost:4000/api/services/:id
                 
        auth:
        ```
        your token
        ``` 
        body:
        ``` js
            {
                "id": 1
            }
        ```
</details>


## Future functionalities
[ ] Add FRONT-END view
[ ] Add user login
[ ] Email and password validations 
[ ] ...

## Contribute to the project
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


## Web refferences:
To achieve my project I used data from the following sites:
-  google.com
-  nobleart.com
-  ink.com
- ...

## Development:

``` js
 const developer = "datata";

 console.log("Desarrollado por: " + datata);
```  

## Appreciations:

Forever gratefull to GeeksHubs Academy for the oportunety to learn and grow on my career path.

## Contact
<a href = "mailto:micorreoelectronico@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>