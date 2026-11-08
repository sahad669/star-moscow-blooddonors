
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingDonors,
  approveDonor,
  rejectDonor,
  deleteDonor,
} from "../features/donerSlice";

import {
  CheckCircle,
  XCircle,
  Trash2,
  RefreshCw,
  Users,
  Clock,
  Droplets,
  MapPin,
  Phone,
  MessageCircle,
  UserRound,
} from "lucide-react";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { pendingDonors = [], loading, error } = useSelector(
    (state) => state.donor
  );

  useEffect(() => {
    dispatch(getPendingDonors());
  }, [dispatch]);

  const handleApprove = async (id) => {
    try {
      await dispatch(approveDonor(id)).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id) => {
    try {
      await dispatch(rejectDonor(id)).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete this donor?"
    );

    if (!confirmDelete) return;

    try {
      await dispatch(deleteDonor(id)).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600">
              <Droplets size={14} />
              Star Moscow Blood Donors
            </span>

            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Admin Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage and review new donor registrations.
            </p>
          </div>

          <button
            onClick={() => dispatch(getPendingDonors())}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50 sm:self-center"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* STATISTICS */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-50 p-3 text-orange-600 transition group-hover:bg-orange-100">
                <Clock size={23} />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Pending Registrations
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                  {pendingDonors.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-red-50 p-3 text-red-600 transition group-hover:bg-red-100">
                <Users size={23} />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Awaiting Review
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                  {pendingDonors.length}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION HEADING */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              New Donor Registrations
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Review donor details and take appropriate action.
            </p>
          </div>

          <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
            {pendingDonors.length} Pending
          </span>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-14 text-center shadow-sm">
            <RefreshCw className="mx-auto mb-3 animate-spin text-red-500" size={28} />
            <p className="text-sm font-medium text-slate-500">
              Loading donor registrations...
            </p>
          </div>
        ) : error ? (
          /* ERROR */
          <div className="rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <XCircle className="mx-auto mb-3 text-red-500" size={35} />
            <h3 className="font-bold text-slate-800">
              Unable to load registrations
            </h3>
            <p className="mt-2 text-sm text-red-600">{error}</p>
            <button
              onClick={() => dispatch(getPendingDonors())}
              className="mt-5 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        ) : pendingDonors.length === 0 ? (
          /* EMPTY STATE */
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-14 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
              <CheckCircle size={30} />
            </div>

            <h3 className="text-lg font-bold text-slate-800">
              All caught up!
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              There are no pending donor registrations.
            </p>
          </div>
        ) : (
          /* DONOR GRID */
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pendingDonors.map((donor) => (
              <div
                key={donor._id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                {/* CARD HEADER */}
                <div className="flex items-center justify-between border-b border-red-100 bg-red-50/70 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                      <Droplets size={17} />
                    </div>

                    <span className="text-base font-extrabold text-red-700">
                      {donor.bloodGroup || "N/A"}
                    </span>
                  </div>

                  <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-bold tracking-wide text-orange-700">
                    PENDING
                  </span>
                </div>

                {/* DONOR INFORMATION */}
                <div className="p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={donor.imageurl || "/images/defult-img.jpg"}
                      alt={donor.fullName || "Donor"}
                      onError={(e) => {
                        e.currentTarget.src = "/images/defult-img.jpg";
                      }}
                      className="h-12 w-12 shrink-0 rounded-full border-2 border-red-100 object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-slate-900">
                        {donor.fullName?.toUpperCase() || "UNKNOWN DONOR"}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {donor.gender || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 border-t border-slate-100 pt-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone size={14} className="shrink-0 text-red-500" />
                      <span className="truncate">
                        {donor.phone || "N/A"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <MessageCircle size={14} className="shrink-0 text-green-600" />
                      <span className="truncate">
                        {donor.whatsapp || "N/A"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={14} className="shrink-0 text-red-500" />
                      <span className="truncate">
                        {[donor.place, donor.village].filter(Boolean).join(", ") || "N/A"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <UserRound size={14} className="shrink-0 text-slate-400" />
                      <span className="truncate">
                        {[donor.taluk, donor.district].filter(Boolean).join(", ") || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3">
                    <button
                      onClick={() => handleApprove(donor._id)}
                      className="flex items-center justify-center gap-1 rounded-lg bg-green-600 px-2 py-2.5 text-[11px] font-bold text-white transition hover:bg-green-700 active:scale-95"
                      title="Approve donor"
                    >
                      <CheckCircle size={14} />
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(donor._id)}
                      className="flex items-center justify-center gap-1 rounded-lg bg-orange-500 px-2 py-2.5 text-[11px] font-bold text-white transition hover:bg-orange-600 active:scale-95"
                      title="Reject donor"
                    >
                      <XCircle size={14} />
                      Reject
                    </button>

                    <button
                      onClick={() => handleDelete(donor._id)}
                      className="flex items-center justify-center gap-1 rounded-lg bg-red-600 px-2 py-2.5 text-[11px] font-bold text-white transition hover:bg-red-700 active:scale-95"
                      title="Delete donor"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;
