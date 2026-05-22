import bloodModel from "../models/bloodModel.js";

export const addDonateMember = async (req, res) => {
  try {
    const { fullName, email, phone, whatsapp, bloodGroup, place, dateOfBirth } =
      req.body;

    if (!fullName || !phone || !whatsapp || !bloodGroup || !dateOfBirth) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let imageurl = "";
    let public_id = "";

    if (req.file) {
      imageurl = req.file.path;
      public_id = req.file.filename;
    }

    const newDonor = await bloodModel.create({
      fullName,
      email,
      phone,
      whatsapp,
      bloodGroup,
      dateOfBirth,
      place,
      imageurl,
      public_id,
    });

    return res.status(201).json({
      message: "Donor Registered Successfully",
      data: newDonor,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export const getAllDonors = async (req, res) => {
  try {
    const donors = await bloodModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      donors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching donors",
      error: error.message,
    });
  }
};

export const filterDonors = async (req, res) => {
  try {
    const { name, bloodGroup } = req.query;

    let query = {};

    if (name) {
      query.fullName = { $regex: name, $options: "i" };
    }

    if (bloodGroup) {
      query.bloodGroup = bloodGroup;
    }

    const donors = await bloodModel.find(query).sort({ createdAt: -1 });
    res.status(200).json({
      donors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error filtering donors",
      error: error.message,
    });
  }
};
export const getDonorById = async (req, res) => {
  try {
    const id = req.params.id;

    const donor = await bloodModel.findById(id);

    if (!donor) {
      return res.status(404).json({
        message: "Donor not found",
      });
    }

    res.status(200).json({
      donor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
