import express from "express";
import upload from "../middleware/multer.js"
import { addDonateMember, getAllDonors,filterDonors,getDonorById } from "../controllers/bloodFormController.js";

const router = express.Router();

router.post("/adddonor", upload.single("image"), addDonateMember);
router.get("/donors", getAllDonors);
router.get("/filter", filterDonors);
router.get("/donorid/:id",getDonorById)

export default router;