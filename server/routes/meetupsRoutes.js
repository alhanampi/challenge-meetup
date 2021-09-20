import express from "express";
import meetupsController from "../controllers/meetupsController.js";
const { getMeetups, postMeetups } = meetupsController;

const router = express.Router();

router.get("/", getMeetups);
router.post("/post", postMeetups);

export default router;
