
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  HeartPulse,
  UserRound,
} from "lucide-react";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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

  // FRONTEND VALIDATION
  const validateForm = () => {
    const newErrors = {};

    // NAME VALIDATION
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    // EMAIL VALIDATION
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // PASSWORD VALIDATION
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // CLEAR ERROR FOR THE CHANGED FIELD
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // HANDLE FORM SUBMISSION
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  try {
    await dispatch(
      register({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      })
    ).unwrap();

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setErrors({});

    navigate("/signin");

  } catch (error) {
    console.error("Registration failed:", error);
  }
};

  return (
    <div className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        <div className="bg-white/90 backdrop-blur rounded-4xl shadow-2xl border border-red-100 p-7 sm:p-10">

          {/* LOGO */}
          <div className="flex justify-center mb-5">
            <img
              src="/images/star-mosco-icon.png"
              alt="Star Moscow Logo"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* HEADING */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <HeartPulse size={17} />
              Star Moscow Blood Donors
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900">
              Create Account
            </h1>

            <p className="text-slate-500 mt-2 text-sm">
              Register your account to continue.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>

            {/* NAME */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={getInputClasses("name")}
                  style={{ paddingLeft: "44px" }}
                  disabled={loading}
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-xs font-medium text-red-500"
                  >
                    {errors.name}
                  </p>
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={getInputClasses("email")}
                  style={{ paddingLeft: "44px" }}
                  disabled={loading}
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-xs font-medium text-red-500"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password ? "password-error" : "password-hint"
                  }
                  className={getInputClasses("password")}
                  style={{ paddingLeft: "44px", paddingRight: "48px" }}
                  disabled={loading}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>

                {errors.password && (
                  <p
                    id="password-error"
                    className="mt-1 text-xs font-medium text-red-500"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              <p id="password-hint" className="text-xs text-slate-400 mt-2">
                Password must contain at least 6 characters.
              </p>
            </div>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <LockKeyhole size={19} />
              {loading ? "Registering..." : "Create Account"}
            </button>

          </form>

          {/* LOGIN NAVIGATION */}
          <div className="mt-7 text-center border-t border-slate-100 pt-6">
            <p className="text-sm text-slate-500">
              Already have an account?

              <Link
                to="/signin"
                className="ml-1 text-red-600 font-bold hover:text-red-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </div>

        <p className="text-center text-xs text-slate-400 mt-5">
          © Star Moscow Blood Donors
        </p>

      </div>
    </div>
  );
};

export default Signup;
