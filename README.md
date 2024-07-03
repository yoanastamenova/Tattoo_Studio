# Tattoo Studio Database Project

<details>
  <summary>Content 📝</summary>
  <ol>
    <li><a href="#objetivo">Objective</a></li>
    <li><a href="#sobre-el-proyecto">About the project</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Database Diagram</a></li>
    <li><a href="#instalación-en-local">Clone</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Future functionalities</a></li>
    <li><a href="#contribuciones">Contributions</a></li>
    <li><a href="#webgrafia">Webgrafy</a></li>
    <li><a href="#desarrollo">Development</a></li>
    <li><a href="#agradecimientos">Appretiations</a></li>
    <li><a href="#contacto">Contact</a></li>
  </ol>
</details>

## Objective
Este proyecto requería una API funcional conectada a una base de datos con al menos una relación de uno a muchos y una relación de muchos a muchos.

## About the project
Decidí crear una aplicación web para ayudar a los amantes del gimnasio, que les permitiría crear y realizar un seguimiento de nuevas rutinas para sus ejercicios diarios. He visto muchas apps de este estilo pero ninguna que nos permita cambiar tan libremente las rutinas adaptandolas a nuestras necesidades.    

## Deploy 🚀
<div align="center">
    <a href="https://www.google.com"><strong>Click here to view the web page </strong></a>🚀🚀🚀
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
!['image-db'] <img src="./img/Screenshot 2024-07-03 at 20.05.06.png">

## Local installation option
1. Clonar the repository from the url
2. ` $ npm install `
3. Connect the cloned repo with our Database
4. ``` $ Execute the migrations ``` 
5. ``` $ Execute the seeders ``` 
6. ``` $ npm run dev ``` to elevate our server
7. ...

## Endpoints
<details>
<summary>Users</summary>

- AUTH
    - REGISTER

            POST http://localhost:3000/api/register
        body:
        ``` js
            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        ```

    - LOGIN

            POST http://localhost:3000/api/login  
        body:
        ``` js
            {
                "user": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        ```
- RUTINAS
    - RECUPERAR RUTINAS  

            GET http://localhost:3000/api/rutina

    - ...
</details>

<details>
<summary> Services </summary>
</details>


<details>

<summary>Appointments</summary>

</details>


## Futuras functionalities to be added
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


## Webgrafy:
To achieve my project I used data from the following sites:
-  google.com
- link.com
- ...

## Development:

``` js
 const developer = "datata";

 console.log("Desarrollado por: " + datata);
```  

## Appreciations:

Forever gratefull to GeeksHubs Academy for the oportunety to learn and grow on my career path.

## Contacto
<a href = "mailto:micorreoelectronico@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>