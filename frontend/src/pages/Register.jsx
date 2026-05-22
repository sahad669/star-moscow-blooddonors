
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDonor } from "../features/donerSlice";
import { HeartPulse, Upload, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.donor);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    bloodGroup: "",
    place: "",
    dateOfBirth: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await dispatch(addDonor(data)).unwrap();
      resetForm();
       navigate("/donor");
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      whatsapp: "",
      bloodGroup: "",
      place: "",
      dateOfBirth: "",
      image: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Left content */}
        <div className="order-2 lg:order-1">
          <div className="sticky top-24 rounded-4xl border border-red-100 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
              <HeartPulse size={18} />
              Donor Registration
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Register and become
              <span className="block text-red-600">someone’s lifesaver</span>
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Join the Star Moscow Blood Donors community by adding your details.
              A simple registration can help someone find urgent support at the
              right time.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-red-50 p-4 ring-1 ring-red-100">
                <p className="text-sm font-semibold text-red-700">
                  Fast registration
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Submit your donor details in a clear and simple form.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-sm font-semibold text-slate-800">
                  Mobile friendly
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Designed to work smoothly on phones, tablets, and desktop.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-red-100 bg-linear-to-br from-red-100 to-white p-4">
              <img
                src="/images/star-mos-icon.png"
                alt="Blood donor registration"
                className="mx-auto h-52 w-full object-contain sm:h-64"
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl bg-red-200/40 blur-3xl"></div>

            <form
              onSubmit={handleSubmit}
              className="relative rounded-4xl border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
            >
              <div className="mb-6 flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <UserPlus size={22} />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Register as Donor
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Fill in your details carefully to join the donor list.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Include country code (e.g. +91)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="Include country code (e.g. +91) "
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Location / Place
                  </label>
                  <input
                    type="text"
                    name="place"
                    placeholder="Local Area,City/Town,District"
                    value={formData.place}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Upload Image
                  </label>

                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-red-200 bg-red-50 px-4 py-4 transition hover:bg-red-100">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Choose donor image
                      </p>
                      <p className="text-xs text-slate-500">
                        JPG, PNG or other image files
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm">
                      <Upload size={18} />
                    </div>

                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>

                  {formData.image && (
                    <p className="mt-2 text-xs text-slate-500">
                      Selected: {formData.image.name}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Register Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;