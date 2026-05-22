import express from "express";
import dotenv from "dotenv";
import connect from "./config/connectDB.js";
import cors from "cors";
import upload from "./middleware/multer.js";
import donateRouter from "./routes/bloodFormRouter.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/BloodDoners", donateRouter);

connect();
app.listen(process.env.PORT, () => {
  console.log("server connected");
});

app.post("/bloodform-image", upload.single("image"), (req, res) => {
  try {
    res.json({
      success: true,
      url: req.file.path,
      public_id: req.file.filename,
    });
  } catch (error) {
    console.error("Upload error", error);
    res.status(500).json({ success: false, error: "Upload failed" });
  }
});
