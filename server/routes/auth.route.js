import  express  from "express";
import { signin, signup } from "../Controllers/auth.controllers.js";
import {sendEmail} from '../Helper/email.js'

const router = express.Router()

router.post("/signup",signup, sendEmail)
router.post("/signin",signin)

export default router