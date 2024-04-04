import express from "express";
import contoller from "../contollers/contoller.js";
const router = express.Router();

router.post("/post" ,contoller.addUser);

router.get("/get" , contoller.getAll)

router.get("/user/:id" , contoller.getUserById)

router.get("/find/:roll" , contoller.getUserByRoll)

router.put("/edit/:id" ,contoller.editUser)

router.delete("/delete/:id" , contoller.deleteUser)

router.get("/firstThree" , contoller.firstThree)

router.get("/lastThree" , contoller.lastThree)

export default router