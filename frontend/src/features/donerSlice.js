import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstants from "../axiosInstants";
import toast from "react-hot-toast";

// ADD DONOR
export const addDonor = createAsyncThunk(
  "donate/addDonor",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstants.post("BloodDoners/adddonor", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message);

      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || "Failed to add donor";

      toast.error(message);

      return rejectWithValue(message);
    }
  },
);

// GET ALL DONORS
export const getAllDonors = createAsyncThunk(
  "donate/getAllDonors",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstants.get("BloodDoners/donors");

      return res.data.donors;
    } catch (error) {
      const message = error.response?.data?.message || "Failed to fetch donors";

      toast.error(message);

      return rejectWithValue(message);
    }
  },
);

// FILTER DONORS
export const filterDonors = createAsyncThunk(
  "donate/filterDonors",
  async (
    { name, bloodGroup, taluk, district, gender },
    { rejectWithValue },
  ) => {
    try {
      const query = new URLSearchParams();

      if (name) {
        query.append("name", name);
      }

      if (bloodGroup) {
        query.append("bloodGroup", bloodGroup);
      }

      if (taluk) {
        query.append("taluk", taluk);
      }

      if (district) {
        query.append("district", district);
      }

      if (gender) {
        query.append("gender", gender);
      }

      const res = await axiosInstants.get(
        `BloodDoners/filter?${query.toString()}`,
      );

      return res.data.donors;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to filter donors";

      toast.error(message);

      return rejectWithValue(message);
    }
  },
);
//getDonorById
export const getDonorById = createAsyncThunk(
  "donate/getDonorById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstants.get(`/BloodDoners/donorid/${id}`);

      return res.data.donor;
    } catch (error) {
      const message = error.response?.data?.message || "Failed to fetch donor";

      // toast.error(message);
      return rejectWithValue(message);
    }
  },
);

// GET PENDING DONORS - ADMIN
export const getPendingDonors = createAsyncThunk(
  "donate/getPendingDonors",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axiosInstants.get(
        "BloodDoners/admin/pending",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.donors || [];
    } catch (error) {
      console.error(
        "Get pending donors error:",
        error.response?.data || error.message
      );

      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch pending donors"
      );
    }
  }
);

// APPROVE DONOR - ADMIN
export const approveDonor = createAsyncThunk(
  "donate/approveDonor",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axiosInstants.patch(
        `BloodDoners/admin/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);
      return id;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to approve donor";

      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// REJECT DONOR - ADMIN
export const rejectDonor = createAsyncThunk(
  "donate/rejectDonor",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axiosInstants.patch(
        `BloodDoners/admin/reject/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);
      return id;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to reject donor";

      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// DELETE DONOR - ADMIN
export const deleteDonor = createAsyncThunk(
  "donate/deleteDonor",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axiosInstants.delete(
        `BloodDoners/admin/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);
      return id;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to delete donor";

      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const donorSlice = createSlice({
  name: "donor",

  initialState: {
    donors: [],
    donor: null,
    pendingDonors: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ADD DONOR
      .addCase(addDonor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addDonor.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(addDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET ALL DONORS
      .addCase(getAllDonors.pending, (state) => {
        state.loading = true;
      })

      .addCase(getAllDonors.fulfilled, (state, action) => {
        state.loading = false;
        state.donors = action.payload;
      })

      .addCase(getAllDonors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // FILTER DONORS
      .addCase(filterDonors.pending, (state) => {
        state.loading = true;
      })

      .addCase(filterDonors.fulfilled, (state, action) => {
        state.loading = false;
        state.donors = action.payload;
      })

      .addCase(filterDonors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // GET DONOR BY ID
      .addCase(getDonorById.pending, (state) => {
        state.loading = true;
      })

      .addCase(getDonorById.fulfilled, (state, action) => {
        state.loading = false;
        state.donor = action.payload;
      })

      .addCase(getDonorById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // GET PENDING DONORS
      .addCase(getPendingDonors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPendingDonors.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingDonors = action.payload;
      })
      .addCase(getPendingDonors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // APPROVE DONOR
      .addCase(approveDonor.fulfilled, (state, action) => {
        state.pendingDonors = state.pendingDonors.filter(
          (donor) => donor._id !== action.payload,
        );
      })

      // REJECT DONOR
      .addCase(rejectDonor.fulfilled, (state, action) => {
        state.pendingDonors = state.pendingDonors.filter(
          (donor) => donor._id !== action.payload,
        );
      })

      // DELETE DONOR
      .addCase(deleteDonor.fulfilled, (state, action) => {
        state.pendingDonors = state.pendingDonors.filter(
          (donor) => donor._id !== action.payload,
        );
        state.donors = state.donors.filter(
          (donor) => donor._id !== action.payload,
        );
      });
  },
});

export default donorSlice.reducer;
