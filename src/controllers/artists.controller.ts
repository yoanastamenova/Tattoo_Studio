import { Request, Response } from "express";
import { Artist } from "../database/models/Artist";

export const getAllArtists = async (req: Request, res: Response) => {
    try {
        const artists = await Artist.find()

        res.status(200).json(
            {
                success: true,
                message: "All artists retrived successfully!",
                data: artists
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Artists cannot be retrived!",
                error: error
            }
        )
    }
}