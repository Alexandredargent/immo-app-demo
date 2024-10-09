import express, { Request, Response } from "express";
import { findOneById } from "../services/immos";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    if(!id)
        res.send("All parameters mus be mandatory").status(400);
    else {
        res.send(await findOneById(`${id}`)).status(200)
    }
})

export default router;