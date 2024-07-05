import { Request, Response } from "express";
import { User } from "../database/models/User";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        //1. Retrive all of the users
        const users = await User.find(
            {
                select: {
                    email: true,
                    created_at: true
                }
            }
        )

        //2. Provide a response
        res.json(
            {
                success: true,
                message: "All users retrived successfully!",
                data: users
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error showing all users",
                error: error
            }
        )
    }
}

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        //1. get the needed user ID
        const userId = req.tokenData.id;

        //2. Look for this ID in our DB

        const user = await User.findOne(
            {
                select: {
                   email: true,
                   created_at: true,
                },
                where: {
                    id: userId
                }
            }
        )

        //3. Provide a response
        res.json(
            {
                success: true,
                message: "Welcome to your profile!",
                data: user
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error opening user profile!"
            }
        )
    }
}

export const modifyUserProfile = async (req: Request, res: Response) => {
    try {
        //1. Get the needed user ID
        const userId = req.tokenData.id;
        const body = req.body;

        //2. Validate if this user exists

        const user = User.findOne(
            {
                where: {
                    id: userId
                }
            }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found!"
            })
        }

        // 3. Insert new data that will be changed and saved into BD
         const updateBody = await User.update(
            {
                id: userId 
            },
            body
         )

        // 4. Confirmation to web page 

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updateBody
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User can't be updated",
            error: error
        })
    }
}


//////// EXTRA CRUD

export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        //1. get the needed user ID
        const userId = req.tokenData.id;
        const userEmail = req.body.email;

        //2. Look for this ID in our DB

        const user = await User.findOne(
            {
                select: {
                   email: true,
                   created_at: true,
                },
                where: {
                    id: userId,
                    email: userEmail
                }
            }
        )

        //3. Provide a response
        res.json(
            {
                success: true,
                message: "User with selected email retrived successfulyy!",
                data: user
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error opening selected user!"
            }
        )
    }
}

export const changeUserRole = async (req: Request, res: Response) => {
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

        if (!userDeleted.affected) {
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
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error deleting user! Please, try again!",
                error: error
            }
        )
    }
}
