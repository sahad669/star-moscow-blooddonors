import bloodModel from "../models/bloodModel.js";
import sendAdminEmail from "../utils/brevoEmail.js";

// Register new donor (Public)
export const addDonateMember = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      whatsapp,
      bloodGroup,
      place,
      village,
      dateOfBirth,
      gender,
      taluk,
      district,
    } = req.body;

    if (
      !fullName ||
      !phone ||
      !whatsapp ||
      !bloodGroup ||
      !dateOfBirth ||
      !gender ||
      !taluk ||
      !district
    ) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
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
      place,
      village,
      dateOfBirth,
      gender,
      taluk,
      district,
      imageurl,
      public_id,
      status: "pending",
    });
   
await sendAdminEmail({
  subject: "New Donor Registration Received - Star Moscow Blood Donors",

  htmlContent: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #f4f6f8;
        font-family: Arial, Helvetica, sans-serif;
      ">

        <table width="100%" cellpadding="0" cellspacing="0"
          style="background-color: #f4f6f8; padding: 30px 10px;">
          <tr>
            <td align="center">

              <table width="100%" cellpadding="0" cellspacing="0"
                style="
                  max-width: 600px;
                  background-color: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                  border: 1px solid #e5e7eb;
                ">

                <!-- HEADER -->
                <tr>
                  <td align="center" style="
                    background-color: #b91c1c;
                    padding: 30px 20px;
                  ">

                    <img
                      src="/images/star-mosco-icon.png"
                      alt="Star Moscow Logo"
                      width="75"
                      height="75"
                      style="
                        display: block;
                        width: 75px;
                        height: 75px;
                        object-fit: contain;
                        margin: 0 auto 12px;
                        background-color: #ffffff;
                        border-radius: 50%;
                      "
                    />

                    <h1 style="
                      color: #ffffff;
                      font-size: 23px;
                      margin: 0;
                    ">
                      Star Moscow Blood Donors
                    </h1>

                    <p style="
                      color: #fee2e2;
                      font-size: 13px;
                      margin: 8px 0 0;
                    ">
                      Together, We Save Lives
                    </p>

                  </td>
                </tr>

                <!-- CONTENT -->
                <tr>
                  <td style="padding: 35px 30px;">

                    <!-- STATUS BADGE -->
                    <div style="
                      text-align: center;
                      margin-bottom: 25px;
                    ">
                      <span style="
                        display: inline-block;
                        background-color: #fef3c7;
                        color: #92400e;
                        padding: 9px 18px;
                        border-radius: 30px;
                        font-size: 13px;
                        font-weight: bold;
                      ">
                        ● NEW REGISTRATION - PENDING REVIEW
                      </span>
                    </div>

                    <h2 style="
                      color: #111827;
                      font-size: 23px;
                      text-align: center;
                      margin: 0 0 18px;
                    ">
                      New Donor Registration!
                    </h2>

                    <p style="
                      color: #4b5563;
                      font-size: 15px;
                      line-height: 1.7;
                    ">
                      Hello Admin,
                    </p>

                    <p style="
                      color: #4b5563;
                      font-size: 15px;
                      line-height: 1.7;
                    ">
                      A new donor registration has been successfully
                      submitted through the
                      <strong>Star Moscow Blood Donors</strong>
                      website.
                    </p>

                    <p style="
                      color: #4b5563;
                      font-size: 15px;
                      line-height: 1.7;
                    ">
                      The registration is currently waiting for your review
                      and approval. Please check the donor information below.
                    </p>

                    <!-- DONOR DETAILS -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="
                        background-color: #f9fafb;
                        border: 1px solid #e5e7eb;
                        border-radius: 8px;
                        margin: 25px 0;
                      ">

                      <tr>
                        <td colspan="2" style="
                          padding: 16px 18px;
                          color: #111827;
                          font-size: 16px;
                          font-weight: bold;
                          border-bottom: 1px solid #e5e7eb;
                        ">
                          New Donor Information
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 13px 18px; color: #6b7280; font-size: 14px;">
                          Full Name
                        </td>
                        <td align="right" style="padding: 13px 18px; color: #111827; font-size: 14px; font-weight: bold;">
                          ${newDonor.fullName}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 13px 18px; color: #6b7280; font-size: 14px;">
                          Email Address
                        </td>
                        <td align="right" style="padding: 13px 18px; color: #111827; font-size: 14px; font-weight: bold;">
                          ${newDonor.email || "Not provided"}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 13px 18px; color: #6b7280; font-size: 14px;">
                          Blood Group
                        </td>
                        <td align="right" style="padding: 13px 18px; color: #b91c1c; font-size: 15px; font-weight: bold;">
                          ${newDonor.bloodGroup}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 13px 18px; color: #6b7280; font-size: 14px;">
                          District
                        </td>
                        <td align="right" style="padding: 13px 18px; color: #111827; font-size: 14px; font-weight: bold;">
                          ${newDonor.district}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 13px 18px; color: #6b7280; font-size: 14px;">
                          Taluk
                        </td>
                        <td align="right" style="padding: 13px 18px; color: #111827; font-size: 14px; font-weight: bold;">
                          ${newDonor.taluk}
                        </td>
                      </tr>

                    </table>

                    <!-- ADMIN ACTION -->
                    <p style="
                      color: #4b5563;
                      font-size: 15px;
                      line-height: 1.7;
                      text-align: center;
                    ">
                      Please log in to your admin dashboard to review
                      this registration and approve or reject the donor.
                    </p>

                    <div style="
                      text-align: center;
                      margin: 25px 0;
                    ">
                      <a
                       href="http://localhost:5173/signin"
                        style="
                          display: inline-block;
                          background-color: #dc2626;
                          color: #ffffff;
                          padding: 14px 30px;
                          text-decoration: none;
                          border-radius: 6px;
                          font-size: 15px;
                          font-weight: bold;
                        "
                      >
                        Review New Registration
                      </a>
                    </div>

                    <p style="
                      color: #6b7280;
                      font-size: 13px;
                      line-height: 1.6;
                    ">
                      This notification was generated automatically when
                      a new donor submitted the registration form.
                    </p>

                    <p style="
                      color: #374151;
                      font-size: 15px;
                      line-height: 1.7;
                    ">
                      Regards,<br />
                      <strong>Star Moscow Blood Donors System</strong>
                    </p>

                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td align="center" style="
                    background-color: #f9fafb;
                    padding: 22px 20px;
                    border-top: 1px solid #e5e7eb;
                  ">

                    <p style="
                      color: #6b7280;
                      font-size: 12px;
                      line-height: 1.6;
                      margin: 0;
                    ">
                      Automated Admin Notification
                    </p>

                    <p style="
                      color: #9ca3af;
                      font-size: 11px;
                      margin: 10px 0 0;
                    ">
                      Star Moscow Blood Donors | Together, We Save Lives
                    </p>

                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </body>
    </html>
  `,
});


    return res.status(201).json({
      success: true,
      message: "Donor registered successfully. Waiting for admin approval.",
      data: newDonor,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Get all approved donors (Public)
export const getAllDonors = async (req, res) => {
  try {
    const donors = await bloodModel
      .find({ status: "approved" })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      donors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Filter approved donors (Public)
export const filterDonors = async (req, res) => {
  try {
    const { name, bloodGroup, gender, taluk, district, village, place } =
      req.query;

    // Only approved donors can appear in public search
    let query = {
      status: "approved",
    };

    if (name) {
      query.fullName = {
        $regex: name,
        $options: "i",
      };
    }

    if (bloodGroup) {
      query.bloodGroup = bloodGroup;
    }

    if (gender) {
      query.gender = gender;
    }

    if (taluk) {
      query.taluk = taluk;
    }

    if (district) {
      query.district = district;
    }

    if (village) {
      query.village = {
        $regex: village,
        $options: "i",
      };
    }

    if (place) {
      query.place = {
        $regex: place,
        $options: "i",
      };
    }

    const donors = await bloodModel.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      donors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error filtering donors",
      error: error.message,
    });
  }
};

// Get one approved donor by ID (Public)
export const getDonorById = async (req, res) => {
  try {
    const donor = await bloodModel.findOne({
      _id: req.params.id,
      status: "approved",
    });

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

// Get all pending donors (Admin only)
export const getPendingDonors = async (req, res) => {
  try {
    const donors = await bloodModel
      .find({ status: "pending" })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      donors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Approve donor (Admin only)

export const approveDonor = async (req, res) => {
  try {
    const donor = await bloodModel.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true, runValidators: true },
    );

    if (!donor) {
      return res.status(404).json({
        success: false,
        message: "Donor not found",
      });
    }

    // Send approval email to donor
    
if (donor.email) {
  await sendAdminEmail({
    toEmail: donor.email,
    subject: "Congratulations! Your Blood Donor Registration Has Been Approved",
    htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

        <body style="
          margin: 0;
          padding: 0;
          background-color: #f4f6f8;
          font-family: Arial, Helvetica, sans-serif;
        ">

          <table width="100%" cellpadding="0" cellspacing="0"
            style="background-color: #f4f6f8; padding: 30px 10px;">
            <tr>
              <td align="center">

                <table width="100%" cellpadding="0" cellspacing="0"
                  style="
                    max-width: 600px;
                    background-color: #ffffff;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #e5e7eb;
                  ">

                  <!-- HEADER -->
                  <tr>
                    <td align="center" style="
                      background-color: #b91c1c;
                      padding: 30px 20px;
                    ">

                      <img
                         src="/images/star-mosco-icon.png"
                        alt="Star Moscow Logo"
                        width="75"
                        height="75"
                        style="
                          display: block;
                          width: 75px;
                          height: 75px;
                          object-fit: contain;
                          margin: 0 auto 12px;
                          background-color: #ffffff;
                          border-radius: 50%;
                        "
                      />

                      <h1 style="
                        color: #ffffff;
                        font-size: 23px;
                        margin: 0;
                      ">
                        Star Moscow Blood Donors
                      </h1>

                      <p style="
                        color: #fee2e2;
                        font-size: 13px;
                        margin: 8px 0 0;
                      ">
                        Together, We Save Lives
                      </p>

                    </td>
                  </tr>

                  <!-- EMAIL CONTENT -->
                  <tr>
                    <td style="padding: 35px 30px;">

                      <div style="
                        text-align: center;
                        margin-bottom: 25px;
                      ">
                        <div style="
                          display: inline-block;
                          background-color: #dcfce7;
                          color: #15803d;
                          padding: 9px 18px;
                          border-radius: 30px;
                          font-size: 13px;
                          font-weight: bold;
                        ">
                          ✓ REGISTRATION APPROVED
                        </div>
                      </div>

                      <h2 style="
                        color: #111827;
                        font-size: 23px;
                        text-align: center;
                        margin: 0 0 18px;
                      ">
                        Congratulations, ${donor.fullName}!
                      </h2>

                      <p style="
                        color: #4b5563;
                        font-size: 15px;
                        line-height: 1.7;
                      ">
                        We are pleased to inform you that your blood donor
                        registration with
                        <strong>Star Moscow Blood Donors</strong>
                        has been successfully reviewed and approved.
                      </p>

                      <p style="
                        color: #4b5563;
                        font-size: 15px;
                        line-height: 1.7;
                      ">
                        Your details are now approved to be included in our
                        donor community. Thank you for taking this meaningful
                        step towards saving lives.
                      </p>

                      <!-- DONOR DETAILS -->
                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="
                          background-color: #f9fafb;
                          border: 1px solid #e5e7eb;
                          border-radius: 8px;
                          margin: 25px 0;
                        ">

                        <tr>
                          <td colspan="2" style="
                            padding: 16px 18px;
                            color: #111827;
                            font-size: 16px;
                            font-weight: bold;
                            border-bottom: 1px solid #e5e7eb;
                          ">
                            Your Registration Details
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 13px 18px; color: #6b7280; font-size: 14px;">
                            Full Name
                          </td>
                          <td align="right" style="padding: 13px 18px; color: #111827; font-size: 14px; font-weight: bold;">
                            ${donor.fullName}
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 13px 18px; color: #6b7280; font-size: 14px;">
                            Blood Group
                          </td>
                          <td align="right" style="padding: 13px 18px; color: #b91c1c; font-size: 15px; font-weight: bold;">
                            ${donor.bloodGroup}
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 13px 18px; color: #6b7280; font-size: 14px;">
                            District
                          </td>
                          <td align="right" style="padding: 13px 18px; color: #111827; font-size: 14px; font-weight: bold;">
                            ${donor.district}
                          </td>
                        </tr>

                      </table>

                      <p style="
                        color: #4b5563;
                        font-size: 15px;
                        line-height: 1.7;
                      ">
                        Your willingness to donate blood can make a real
                        difference. We sincerely appreciate your support.
                      </p>

                      <p style="
                        color: #374151;
                        font-size: 15px;
                        line-height: 1.7;
                      ">
                        With gratitude,<br />
                        <strong>Star Moscow Blood Donors Team</strong>
                      </p>

                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td align="center" style="
                      background-color: #f9fafb;
                      padding: 22px 20px;
                      border-top: 1px solid #e5e7eb;
                    ">

                      <p style="
                        color: #6b7280;
                        font-size: 12px;
                        line-height: 1.6;
                        margin: 0;
                      ">
                        This is an automated notification from
                        <strong>Star Moscow Blood Donors</strong>.
                      </p>

                      <p style="
                        color: #9ca3af;
                        font-size: 11px;
                        margin: 10px 0 0;
                      ">
                        Thank you for being part of our life-saving community.
                      </p>

                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
      </html>
    `,
  });
} else {
  console.log("Donor email not available.");
}


    return res.status(200).json({
      success: true,
      message: "Donor approved successfully",
      donor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Reject donor (Admin only)
export const rejectDonor = async (req, res) => {
  try {
    const donor = await bloodModel.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true, runValidators: true },
    );

    if (!donor) {
      return res.status(404).json({
        success: false,
        message: "Donor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Donor rejected successfully",
      donor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete donor (Admin only)
export const deleteDonor = async (req, res) => {
  try {
    const donor = await bloodModel.findByIdAndDelete(req.params.id);

    if (!donor) {
      return res.status(404).json({
        success: false,
        message: "Donor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Donor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// import bloodModel from "../models/bloodModel.js";
// import sendAdminEmail from "../utils/brevoEmail.js";

// // Escape special characters before using user input in a regular expression
// const escapeRegex = (value = "") => {
//   return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// };

// // 1. ADD NEW DONOR
// // Public registration: no login required
// // New donors are saved with pending status
// export const addDonateMember = async (req, res) => {
//   try {
//     const {
//       fullName,
//       email,
//       phone,
//       whatsapp,
//       bloodGroup,
//       place,
//       village,
//       dateOfBirth,
//       gender,
//       taluk,
//       district,
//     } = req.body;

//     // Validate required fields
//     if (
//       !fullName ||
//       !phone ||
//       !whatsapp ||
//       !bloodGroup ||
//       !dateOfBirth ||
//       !gender ||
//       !taluk ||
//       !district
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all required fields",
//       });
//     }

//     // Create donor
//     const newDonor = await bloodModel.create({
//       fullName: fullName.trim(),
//       email: email?.trim().toLowerCase() || "",
//       phone,
//       whatsapp,
//       bloodGroup,
//       place: place?.trim() || "",
//       village: village?.trim() || "",
//       dateOfBirth,
//       gender,
//       taluk,
//       district,
//       imageurl: req.file?.path || "",
//       public_id: req.file?.filename || "",
//       status: "pending",
//     });

//     // Send notification to admin
//     await sendAdminEmail({
//       subject: "New Donor Registration - Star Moscow",
//       htmlContent: `
//         <div style="font-family: Arial, sans-serif; padding: 20px;">
//           <h2>New Donor Registration</h2>
//           <p>A new donor has registered on your website.</p>

//           <p><strong>Name:</strong> ${newDonor.fullName}</p>
//           <p><strong>Email:</strong> ${newDonor.email || "Not provided"}</p>
//           <p><strong>Phone:</strong> ${newDonor.phone}</p>
//           <p><strong>Blood Group:</strong> ${newDonor.bloodGroup}</p>
//           <p><strong>Place:</strong> ${newDonor.place || "Not provided"}</p>

//           <p>
//   Please log in to your admin dashboard to review this registration.
// </p>

// <a
//   href="http://localhost:5173/signin"
//   style="
//     display: inline-block;
//     background-color: #dc2626;
//     color: #ffffff;
//     padding: 12px 24px;
//     text-decoration: none;
//     border-radius: 6px;
//     font-weight: bold;
//     margin-top: 10px;
//   "
// >
//   Admin Login
// </a>
//           <p>Star Moscow Blood Donors</p>
//         </div>
//       `,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Donor registered successfully. Waiting for admin approval.",
//       donor: newDonor,
//     });
//   } catch (error) {
//     console.error("Add donor error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 2. GET ALL APPROVED DONORS
// // Only approved donors are visible publicly
// export const getAllDonors = async (req, res) => {
//   try {
//     const donors = await bloodModel
//       .find({ status: "approved" })
//       .sort({ createdAt: -1 });

//     return res.status(200).json({
//       success: true,
//       donors,
//     });
//   } catch (error) {
//     console.error("Get donors error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 3. FILTER APPROVED DONORS
// export const filterDonors = async (req, res) => {
//   try {
//     const { name, bloodGroup, gender, taluk, district, village, place } =
//       req.query;

//     const filter = {
//       status: "approved",
//     };

//     if (name) {
//       filter.fullName = {
//         $regex: escapeRegex(name),
//         $options: "i",
//       };
//     }

//     if (bloodGroup) {
//       filter.bloodGroup = bloodGroup;
//     }

//     if (gender) {
//       filter.gender = gender;
//     }

//     if (taluk) {
//       filter.taluk = taluk;
//     }

//     if (district) {
//       filter.district = district;
//     }

//     if (village) {
//       filter.village = {
//         $regex: escapeRegex(village),
//         $options: "i",
//       };
//     }

//     if (place) {
//       filter.place = {
//         $regex: escapeRegex(place),
//         $options: "i",
//       };
//     }

//     const donors = await bloodModel.find(filter).sort({ createdAt: -1 });

//     return res.status(200).json({
//       success: true,
//       donors,
//     });
//   } catch (error) {
//     console.error("Filter donors error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 4. GET SINGLE APPROVED DONOR BY ID
// export const getDonorById = async (req, res) => {
//   try {
//     const donor = await bloodModel.findOne({
//       _id: req.params.id,
//       status: "approved",
//     });

//     if (!donor) {
//       return res.status(404).json({
//         success: false,
//         message: "Donor not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       donor,
//     });
//   } catch (error) {
//     console.error("Get donor by ID error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 5. GET PENDING DONORS
// // Admin only
// export const getPendingDonors = async (req, res) => {
//   try {
//     const pendingDonors = await bloodModel
//       .find({ status: "pending" })
//       .sort({ createdAt: -1 });

//     return res.status(200).json({
//       success: true,
//       pendingDonors,
//     });
//   } catch (error) {
//     console.error("Get pending donors error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 6. APPROVE DONOR
// // Admin only
// // Send approval email to donor
// export const approveDonor = async (req, res) => {
//   try {
//     const donor = await bloodModel.findByIdAndUpdate(
//       req.params.id,
//       { status: "approved" },
//       { new: true, runValidators: true },
//     );

//     if (!donor) {
//       return res.status(404).json({
//         success: false,
//         message: "Donor not found",
//       });
//     }

//     // Send email to donor after approval
//     if (donor.email) {
//       await sendAdminEmail({
//         toEmail: donor.email,
//         subject: "Your Blood Donor Registration Has Been Approved!",
//         htmlContent: `
//           <div style="font-family: Arial, sans-serif; padding: 20px;">
//             <h2 style="color: #16a34a;">
//               Congratulations, ${donor.fullName}!
//             </h2>

//             <p>
//               Your registration with
//               <strong>Star Moscow Blood Donors</strong>
//               has been approved successfully.
//             </p>

//             <p><strong>Name:</strong> ${donor.fullName}</p>
//             <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
//             <p><strong>District:</strong> ${donor.district}</p>

//             <p>
//               Thank you for joining our blood donation community.
//               Your details are now visible in our donor list.
//             </p>

//             <p>
//               Regards,<br />
//               Star Moscow Blood Donors Team
//             </p>
//           </div>
//         `,
//       });
//     } else {
//       console.log("Donor email not available. Approval email skipped.");
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Donor approved successfully",
//       donor,
//     });
//   } catch (error) {
//     console.error("Approve donor error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 7. REJECT DONOR
// // Admin only
// export const rejectDonor = async (req, res) => {
//   try {
//     const donor = await bloodModel.findByIdAndUpdate(
//       req.params.id,
//       { status: "rejected" },
//       { new: true, runValidators: true },
//     );

//     if (!donor) {
//       return res.status(404).json({
//         success: false,
//         message: "Donor not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Donor rejected successfully",
//       donor,
//     });
//   } catch (error) {
//     console.error("Reject donor error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 8. DELETE DONOR
// // Admin only
// export const deleteDonor = async (req, res) => {
//   try {
//     const donor = await bloodModel.findByIdAndDelete(req.params.id);

//     if (!donor) {
//       return res.status(404).json({
//         success: false,
//         message: "Donor not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Donor deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete donor error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
