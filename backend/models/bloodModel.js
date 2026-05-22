import mongoose from "mongoose";

const bloodSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: true },
  whatsapp: { type: String, required: true },
  bloodGroup: { type: String, required: true }, // ✅ fixed
 dateOfBirth: { type: Date, required: true },
  place: { type: String },
  imageurl: { type: String },
  public_id: { type: String },
}, { timestamps: true })

const bloodModel = mongoose.model("BloodDoners", bloodSchema);

export default bloodModel;