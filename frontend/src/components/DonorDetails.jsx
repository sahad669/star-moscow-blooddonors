import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDonorById } from "../features/donerSlice";
import {
  ArrowLeft,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  CalendarDays,
  HeartPulse,
  User,
  Map,
  Landmark,
} from "lucide-react";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";

const DonorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { donor, loading, error } = useSelector((state) => state.donor);

  useEffect(() => {
    if (id) {
      dispatch(getDonorById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (loading) {
    return (
      <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-4xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <div className="flex flex-col items-center justify-center gap-4">
            <HashLoader color="#dc2626" loading={loading} size={60} />
            <p className="text-sm font-medium text-slate-500">
              Loading donor details...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!donor) {
    return (
      <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-4xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-red-600">No Donor Found</h2>
          <Link
            to="/donor"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <ArrowLeft size={16} />
            Back to Donors
          </Link>
        </div>
      </section>
    );
  }

  const whatsappNumber = String(donor.whatsapp || donor.phone || "").replace(
    /[^\d]/g,
    ""
  );

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : null;

  const detailCardClass =
    "rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200";
  const labelClass =
    "text-xs font-semibold uppercase tracking-wide text-slate-500";
  const valueClass =
    "mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800";

  return (
    <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/donor"
          className="mb-5 inline-flex items-center gap-2 rounded-xl border border-red-100 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-red-50"
        >
          <ArrowLeft size={16} />
          Back to Donors
        </Link>

        <div className="overflow-hidden rounded-4xl border border-white/70 bg-white/90 shadow-2xl backdrop-blur-xl">
          <div className="relative h-28 bg-linear-to-r from-red-100 via-rose-50 to-red-100 sm:h-36 lg:h-40">
            <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-red-600 shadow-sm">
              {donor.bloodGroup || "N/A"}
            </div>
          </div>

          <div className="relative px-5 pb-8 sm:px-8">
            <div className="-mt-14 flex flex-col items-center sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col items-center sm:flex-row sm:items-end sm:gap-5">
                <img
                  src={donor.imageurl || "/images/defult-img.jpg"}
                  alt={donor.fullName || "Donor"}
                  className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg sm:h-32 sm:w-32"
                />

                <div className="mt-4 text-center sm:mt-0 sm:text-left">
                 <p className="mt-2 text-sm font-semibold text-slate-800">
  {donor.fullName ? donor.fullName.toUpperCase() : "N/A"}
</p>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600 ring-1 ring-red-100">
                    <HeartPulse size={16} />
                    {donor.bloodGroup || "N/A"} Donor
                  </div>
                </div>
              </div>

              <div className="mt-5 flex w-full flex-col gap-3 sm:mt-0 sm:w-auto sm:flex-row">
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                )}

                {donor.phone && (
                  <a
                    href={`tel:${donor.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-extrabold text-slate-900">
                Contact Information
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className={detailCardClass}>
                  <p className={labelClass}>Email Address</p>
                  <p className={`${valueClass} break-all`}>
                    <Mail size={16} />
                    {donor.email || "N/A"}
                  </p>
                </div>

                <div className={detailCardClass}>
                  <p className={labelClass}>Mobile Number</p>
                  <p className={valueClass}>
                    <Phone size={16} />
                    {donor.phone || "N/A"}
                  </p>
                </div>

                <div className={detailCardClass}>
                  <p className={labelClass}>WhatsApp Number</p>
                  <p className={valueClass}>
                    <MessageCircle size={16} />
                    {donor.whatsapp || donor.phone || "N/A"}
                  </p>
                </div>

                <div className={detailCardClass}>
                  <p className={labelClass}>Blood Group</p>
                  <p className={valueClass}>
                    <HeartPulse size={16} />
                    {donor.bloodGroup || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-extrabold text-slate-900">
                Personal Details
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className={detailCardClass}>
                  <p className={labelClass}>Full Name</p>
                  <p className={valueClass}>
                    <User size={16} />
                    {donor.fullName || "N/A"}
                  </p>
                </div>

                <div className={detailCardClass}>
                  <p className={labelClass}>Gender</p>
                  <p className={valueClass}>
                    <User size={16} />
                    {donor.gender || "N/A"}
                  </p>
                </div>

                <div className={`sm:col-span-2 ${detailCardClass}`}>
                  <p className={labelClass}>Date of Birth</p>
                  <p className={valueClass}>
                    <CalendarDays size={16} />
                    {donor.dateOfBirth
                      ? new Date(donor.dateOfBirth).toLocaleDateString("en-GB")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-extrabold text-slate-900">
                Location Details
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className={detailCardClass}>
                  <p className={labelClass}>District</p>
                  <p className={valueClass}>
                    <Map size={16} />
                    {donor.district || "N/A"}
                  </p>
                </div>

                <div className={detailCardClass}>
                  <p className={labelClass}>Taluk</p>
                  <p className={valueClass}>
                    <Landmark size={16} />
                    {donor.taluk || "N/A"}
                  </p>
                </div>

                <div className={`sm:col-span-2 ${detailCardClass}`}>
                  <p className={labelClass}>Place</p>
                  <p className={valueClass}>
                    <MapPin size={16} />
                    {donor.place || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorDetails;