import express from "express";
import upload from "../middleware/multer.js";

import {
  addDonateMember,
  getAllDonors,
  filterDonors,
  getDonorById,
  getPendingDonors,
  approveDonor,
  rejectDonor,
  deleteDonor,
} from "../controllers/bloodFormController.js";

import {
  isLogged,
  checkAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/adddonor", upload.single("image"),addDonateMember);
router.get("/donors", getAllDonors);
router.get("/filter", filterDonors);
router.get("/donorid/:id", getDonorById);

// Admin routes
router.get("/admin/pending", isLogged, checkAdmin, getPendingDonors);
router.patch("/admin/approve/:id", isLogged, checkAdmin, approveDonor);
router.patch("/admin/reject/:id", isLogged, checkAdmin, rejectDonor);
router.delete("/admin/delete/:id", isLogged, checkAdmin, deleteDonor);

export default router;