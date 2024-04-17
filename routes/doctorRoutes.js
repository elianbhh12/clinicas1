import express from "express";
import { cdoctores } from "../controllers/doctorController.js";


const router = express.Router();
router.post("/register", cdoctores);

// router.get("/logindoctores", (req, res) => {
//   res.send("vista de login para doctores");
// });


export default router;