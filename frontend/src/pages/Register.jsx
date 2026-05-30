// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addDonor } from "../features/donerSlice";
// import {
//   HeartPulse,
//   Upload,
//   UserPlus,
//   MapPin,
//   HeartHandshake,
//   Globe,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { keralaDistricts } from "../data/keralaLocation";

// const Register = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.donor);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     whatsapp: "",
//     bloodGroup: "",
//     gender: "",
//     district: "",
//     taluk: "",
//     place: "",
//     dateOfBirth: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else if (name === "district") {
//       setFormData({
//         ...formData,
//         district: value,
//         taluk: "",
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       whatsapp: "",
//       bloodGroup: "",
//       gender: "",
//       district: "",
//       taluk: "",
//       place: "",
//       dateOfBirth: "",
//       image: null,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     try {
//       await dispatch(addDonor(data)).unwrap();
//       resetForm();
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       navigate("/donor");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const inputClass =
//     "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-slate-50";

//   return (
//     <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-4 py-8 sm:px-6 lg:px-8">
//       <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
//         {/* Left side */}
//         <div className="order-2 lg:order-1">
//           <div className="rounded-4xl border border-red-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:sticky lg:top-24">
//             <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
//               <HeartPulse size={18} />
//               Become a Lifesaver
//             </div>

//             <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
//               Register and become
//               <span className="block text-red-600">someone’s lifesaver</span>
//             </h1>

//             <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
//               Join the Star Moscow Blood Donors community by adding your
//               details. A quick registration can help someone find urgent support
//               at the right time.
//             </p>

//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               <div className="rounded-2xl bg-red-50 p-4 ring-1 ring-red-100">
//                 <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm">
//                   <HeartHandshake size={18} />
//                 </div>
//                 <p className="text-sm font-semibold text-slate-900">
//                   Join the Donor Community
//                 </p>
//                 <p className="mt-2 text-sm leading-6 text-slate-600">
//                  Become part of a growing network of voluntary blood donors ready to help others.
//                 </p>
//               </div>

//               <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
//                 <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600">
//                   <Globe size={18} />
//                 </div>
//                 <p className="text-sm font-semibold text-slate-900">
//                  Expanding Lifesaving Support
//                 </p>
//                 <p className="mt-2 text-sm leading-6 text-slate-600">
//                   Starting locally with a vision to connect donors and save
//                   lives everywhere.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8 rounded-3xl border border-red-100 bg-linear-to-br from-red-100 to-white p-4">
//               <img
//                 src="/images/star-mos-icon.png"
//                 alt="Blood donor registration"
//                 className="mx-auto h-52 w-full object-contain sm:h-64"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right side form */}
//         <div className="order-1 lg:order-2">
//           <div className="relative">
//             <div className="absolute -inset-3 rounded-4xl bg-red-200/40 blur-3xl"></div>

//             <form
//               onSubmit={handleSubmit}
//               className="relative rounded-4xl border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
//             >
//               <div className="mb-6 flex items-start gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
//                   <UserPlus size={22} />
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-extrabold text-slate-900">
//                     Become a Blood Donor
//                   </h2>
//                   <p className="mt-1 text-sm text-slate-500">
//                     Join our donor community and help save lives during emergencies.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="sm:col-span-2">
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Full Name
//                   </label>
//                   <input
//                     name="fullName"
//                     placeholder="Enter full name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Email Address
//                   </label>
//                   <input
//                     name="email"
//                     type="email"
//                     placeholder="Enter email address"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Phone Number
//                   </label>
//                   <input
//                     name="phone"
//                     placeholder="Enter phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     WhatsApp Number
//                   </label>
//                   <input
//                     name="whatsapp"
//                     placeholder="Enter WhatsApp number"
//                     value={formData.whatsapp}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Blood Group
//                   </label>
//                   <select
//                     name="bloodGroup"
//                     value={formData.bloodGroup}
//                     onChange={handleChange}
//                     className={inputClass}
//                   >
//                     <option value="">Select blood group</option>
//                     <option>A+</option>
//                     <option>A-</option>
//                     <option>B+</option>
//                     <option>B-</option>
//                     <option>O+</option>
//                     <option>O-</option>
//                     <option>AB+</option>
//                     <option>AB-</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Gender
//                   </label>
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className={inputClass}
//                   >
//                     <option value="">Select gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                     <option>Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     District
//                   </label>
//                   <select
//                     name="district"
//                     value={formData.district}
//                     onChange={handleChange}
//                     className={inputClass}
//                   >
//                     <option value="">Select district</option>
//                     {Object.keys(keralaDistricts).map((d) => (
//                       <option key={d} value={d}>
//                         {d}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Taluk
//                   </label>
//                   <select
//                     name="taluk"
//                     value={formData.taluk}
//                     onChange={handleChange}
//                     className={inputClass}
//                     disabled={!formData.district}
//                   >
//                     <option value="">Select taluk</option>
//                     {formData.district &&
//                       keralaDistricts[formData.district].map((t) => (
//                         <option key={t} value={t}>
//                           {t}
//                         </option>
//                       ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Place
//                   </label>
//                   <input
//                     name="place"
//                     placeholder="Enter place, village"
//                     value={formData.place}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Date of Birth
//                   </label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label className="mb-2 block text-sm font-semibold text-slate-700">
//                     Upload Profile Image
//                   </label>

//                   <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-red-200 bg-red-50 px-4 py-4 transition hover:bg-red-100">
//                     <div>
//                       <p className="text-sm font-semibold text-slate-800">
//                         Choose image
//                       </p>
//                       <p className="text-xs text-slate-500">
//                        Upload donor profile photo.
//                       </p>
//                     </div>

//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm">
//                       <Upload size={18} />
//                     </div>

//                     <input
//                       type="file"
//                       name="image"
//                       accept="image/*"
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                   </label>

//                   {formData.image && (
//                     <p className="mt-2 text-xs text-slate-500">
//                       Selected: {formData.image.name}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
//               >
//                 {loading ? "Submitting..." : "Register Now"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDonor } from "../features/donerSlice";
import {
  HeartPulse,
  Upload,
  UserPlus,
  HeartHandshake,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { keralaDistricts } from "../data/keralaLocation";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.donor);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    bloodGroup: "",
    gender: "",
    district: "",
    taluk: "",
    place: "",
    dateOfBirth: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const inputClass =
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-4 disabled:cursor-not-allowed disabled:bg-slate-50";

  const getInputClasses = (fieldName) =>
    `${inputClass} ${
      errors[fieldName]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-slate-200 focus:border-red-300 focus:ring-red-100"
    }`;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "This field is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "This field is required.";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "This field is required.";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "This field is required.";
    }

    if (!formData.district.trim()) {
      newErrors.district = "This field is required.";
    }

    if (!formData.taluk.trim()) {
      newErrors.taluk = "This field is required.";
    }

    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "This field is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else if (name === "district") {
      setFormData({
        ...formData,
        district: value,
        taluk: "",
      });

      setErrors((prev) => ({
        ...prev,
        district: "",
        taluk: "",
      }));
    } else {
      setFormData({ ...formData, [name]: value });

      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      whatsapp: "",
      bloodGroup: "",
      gender: "",
      district: "",
      taluk: "",
      place: "",
      dateOfBirth: "",
      image: null,
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await dispatch(addDonor(data)).unwrap();
      resetForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/donor");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left side */}
        <div className="order-2 lg:order-1">
          <div className="rounded-4xl border border-red-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
              <HeartPulse size={18} />
              Become a Lifesaver
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Register and become
              <span className="block text-red-600">someone’s lifesaver</span>
            </h1>

            <p className="mt-4 text-xs leading-7 text-slate-600 sm:text-base">
              Join the Star Moscow Blood Donors community by adding your
              details. A quick registration can help someone find urgent support
              at the right time.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-red-50 p-4 ring-1 ring-red-100">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm">
                  <HeartHandshake size={18} />
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  Join the Donor Community
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Become part of a growing network of voluntary blood donors
                  ready to help others.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Globe size={18} />
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  Expanding Lifesaving Support
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Starting locally with a vision to connect donors and save
                  lives everywhere.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-red-100 bg-linear-to-br from-red-100 to-white p-4">
              <img
                src="/images/star-mos-icon.png"
                alt="Blood donor registration"
                className="mx-auto h-52 w-full object-contain sm:h-64"
              />
            </div>
          </div>
        </div>

        {/* Right side form */}
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
                    Become a Blood Donor
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Join our donor community and help save lives during
                    emergencies.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={getInputClasses("fullName")}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={getInputClasses("email")}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    placeholder="mobile number (eg.+00 000 000 000)"
                    value={formData.phone}
                    onChange={handleChange}
                    className={getInputClasses("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    WhatsApp Number
                  </label>
                  <input
                    name="whatsapp"
                    placeholder="WhatsApp number(eg.+00 000 000 000)"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={getInputClasses("whatsapp")}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className={getInputClasses("bloodGroup")}
                  >
                    <option value="">Select blood group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={getInputClasses("gender")}
                  >
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.gender}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    District
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className={getInputClasses("district")}
                  >
                    <option value="">Select district</option>
                    {Object.keys(keralaDistricts).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.district && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.district}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Taluk
                  </label>
                  <select
                    name="taluk"
                    value={formData.taluk}
                    onChange={handleChange}
                    className={getInputClasses("taluk")}
                    disabled={!formData.district}
                  >
                    <option value="">Select taluk</option>
                    {formData.district &&
                      keralaDistricts[formData.district].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                  </select>
                  {errors.taluk && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.taluk}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Place
                  </label>
                  <input
                    name="place"
                    placeholder="Enter place, village"
                    value={formData.place}
                    onChange={handleChange}
                    className={getInputClasses("place")}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={getInputClasses("dateOfBirth")}
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Upload Profile Image
                  </label>

                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-red-200 bg-red-50 px-4 py-4 transition hover:bg-red-100">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Choose image
                      </p>
                      <p className="text-xs text-slate-500">
                        Upload donor profile photo.
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
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
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