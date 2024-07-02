import { Request, Response } from "express";
import { User } from "../database/models/User";

export const createUser = async (req: Request, res: Response) => {
    try {
        //1. Retrive all the information of the request
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const password_hash = req.body.password_hash;

        //2. Validate the obtained information

        if (!first_name || !last_name) {
            return res.status(400).json(
                {
                    success: false,
                    message: "First and last name are required fields!"
                }
            )
        }

        if (!email || !password_hash) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email and password cannot be empty!"
                }
            )
        }

        //3. Work with the obtained user information 

        //4. Save the info in out DataBase

        const newUser = await User.create(
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password_hash: password_hash
            }
        ).save();

        //5. Respond to the page

        res.json(
            {
                success: true,
                message: "User was created successfully! You can now log in to the page!",
                data: newUser
            }
        )
    }

    catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Cannot create user",
                error: error
            }
        )
    }
}

export const updateUserById = async (req: Request, res: Response) => {
    try {
        //1. Retrive the id for the user which we want to update
        const userIdToUpdate = req.params.userIdToUpdate
        const body = req.body

        //2. If needed we can - validate the info or amend it

        //4. Update the info in our DataBase
        const userUpdated = await User.update(
            {
                id: parseInt(userIdToUpdate)
            },
            body
        )

        //5. Provide a response to the web page
        res.status(200).json(
            {
                success: true,
                message: "User updated successfully!",
                data: userUpdated
            }
        )
    } catch (error) {
      res.status(500).json(
        {
            success: false,
            message: "User cannot be updated! Try again!",
            error: error
        }
      )
    }
}

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        //1. Get the id of the user we want to delete

      const userIdToDelete = Number(req.params.id)

      //2. Delete the user from the DataBase
      const userDeleted = await User.delete(userIdToDelete)

      if(!userDeleted.affected) {
        return res.status(400).json(
            {
                success: false,
                message: "The ID of the user does not exist!"
            }
        )
      }

      //3. Provide a response
      res.status(200).json(
        {
            success: true,
            message: "User was deleted successfully!",
            data: userDeleted
        }
      )
    } catch(error){
        res.status(500).json(
            {
                success: false,
                message: "Error deleting user! Please, try again!",
                error: error
            }
        )
    }
}