
import React, { useEffect, useState } from "react";
import { getAllDonors, filterDonors } from "../features/donerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Search,
  Droplets,
  RotateCcw,
  MapPin,
  Users,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { FaWhatsapp, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import { keralaDistricts } from "../data/keralaLocation";

const Doners = () => {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState("");
  const [filterBlood, setFilterBlood] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterDistrict, setFilterDistrict] = useState("");
  const [filterTaluk, setFilterTaluk] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const { donors, loading } = useSelector((state) => state.donor);

  const isFilteringActive =
    searchName ||
    filterBlood ||
    filterGender ||
    filterDistrict ||
    filterTaluk;

  useEffect(() => {
    dispatch(getAllDonors());
  }, [dispatch]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (
        !searchName &&
        !filterBlood &&
        !filterGender &&
        !filterDistrict &&
        !filterTaluk
      ) {
        dispatch(getAllDonors());
      } else {
        dispatch(
          filterDonors({
            name: searchName,
            bloodGroup: filterBlood,
            gender: filterGender,
            district: filterDistrict,
            taluk: filterTaluk,
          })
        );
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [
    searchName,
    filterBlood,
    filterGender,
    filterDistrict,
    filterTaluk,
    dispatch,
  ]);

  const handleClear = () => {
    setSearchName("");
    setFilterBlood("");
    setFilterGender("");
    setFilterDistrict("");
    setFilterTaluk("");
    setShowMobileFilters(false);
  };

  const handleDistrictChange = (value) => {
    setFilterDistrict(value);
    setFilterTaluk("");
  };

  const getWhatsappNumber = (donor) => {
    const rawNumber = donor.phone1 || donor.whatsapp || donor.phone || "";
    return String(rawNumber).replace(/[^\d]/g, "");
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-3 pb-15 pt-10 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 rounded-4xl border border-red-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                <Droplets size={16} />
                Blood Donor Directory
              </div>

              <h1 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Find donors quickly and clearly
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Search by donor name, blood group, gender, district, and taluk
                to connect faster through WhatsApp or view full donor details.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-100">
                <Users size={16} />
                Total Donors: {donors.length}
              </div>
            </div>

            {isFilteringActive && (
              <button
                onClick={handleClear}
                className="hidden items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 sm:inline-flex"
              >
                <RotateCcw size={16} />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Desktop filters */}
        <div className="mb-6 hidden rounded-4xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl md:block sm:p-5">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <div className="relative md:col-span-2 xl:col-span-1">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search donor name..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"
              />
            </div>

            <select
              value={filterBlood}
              onChange={(e) => setFilterBlood(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
            >
              <option value="">All Blood Groups</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <select
              value={filterDistrict}
              onChange={(e) => handleDistrictChange(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
            >
              <option value="">All Districts</option>
              {Object.keys(keralaDistricts).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              value={filterTaluk}
              onChange={(e) => setFilterTaluk(e.target.value)}
              disabled={!filterDistrict}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-slate-50"
            >
              <option value="">All Taluks</option>
              {filterDistrict &&
                keralaDistricts[filterDistrict]?.map((taluk) => (
                  <option key={taluk} value={taluk}>
                    {taluk}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Mobile top bar */}
        <div className="mb-6 md:hidden">
          <div className="rounded-3xl border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search donor name..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-300 focus:ring-4 focus:ring-red-100"
                />
              </div>

              <button
                onClick={() => setShowMobileFilters(true)}
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100"
                aria-label="Open filters"
              >
                <SlidersHorizontal size={20} />
                {isFilteringActive && (
                  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-600"></span>
                )}
              </button>
            </div>

            {isFilteringActive && (
              <button
                onClick={handleClear}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-red-600"
              >
                <RotateCcw size={15} />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Mobile filter modal */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 md:hidden">
            <div className="max-h-[88vh] w-full overflow-y-auto rounded-t-4xl bg-white p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-extrabold text-slate-900">
                  Filter Donors
                </h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700"
                  aria-label="Close filters"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Blood Group
                  </label>
                  <select
                    value={filterBlood}
                    onChange={(e) => setFilterBlood(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  >
                    <option value="">All Blood Groups</option>
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
                    Gender
                  </label>
                  <select
                    value={filterGender}
                    onChange={(e) => setFilterGender(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  >
                    <option value="">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    District
                  </label>
                  <select
                    value={filterDistrict}
                    onChange={(e) => handleDistrictChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  >
                    <option value="">All Districts</option>
                    {Object.keys(keralaDistricts).map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Taluk
                  </label>
                  <select
                    value={filterTaluk}
                    onChange={(e) => setFilterTaluk(e.target.value)}
                    disabled={!filterDistrict}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-300 focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  >
                    <option value="">All Taluks</option>
                    {filterDistrict &&
                      keralaDistricts[filterDistrict]?.map((taluk) => (
                        <option key={taluk} value={taluk}>
                          {taluk}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button
                    onClick={handleClear}
                    className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600"
                  >
                    Reset
                  </button>

                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex min-h-65 flex-col items-center justify-center rounded-4xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <HashLoader color="#dc2626" loading={loading} size={60} />
            <p className="mt-5 text-sm font-medium text-slate-500">
              Loading donors...
            </p>
          </div>
        )}

        {/* No results */}
        {!loading && donors.length === 0 && isFilteringActive && (
          <div className="mx-auto max-w-2xl rounded-4xl border border-red-100 bg-white p-8 text-center shadow-md">
            <h3 className="text-2xl font-bold text-red-500">No Results Found</h3>

            <p className="mt-3 text-slate-700">
              No donor matched your current search or selected filters.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Try another name, blood group, gender, district, or taluk.
            </p>

            <button
              onClick={handleClear}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <RotateCcw size={16} />
              Reset Filters
            </button>
          </div>
        )}

        {/* Donor list */}
        {!loading && donors.length > 0 && (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-600">
                Showing {donors.length} donor{donors.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {donors.map((donor) => {
                const whatsappNumber = getWhatsappNumber(donor);
                const whatsappLink = `https://wa.me/${whatsappNumber}`;

                return (
                  <div
                    key={donor._id}
                    className="group overflow-hidden rounded-[1.6rem] border border-red-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-16 bg-linear-to-r from-red-100 via-rose-50 to-red-100 sm:h-20">
                      <span className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-red-600 shadow-sm">
                        {donor.bloodGroup}
                      </span>
                    </div>

                    <div className="relative px-3">
                      <div className="-mt-10 flex justify-center sm:-mt-12">
                        <img
                          src={donor.imageurl || "/images/defult-img.jpg"}
                          alt={donor.fullName}
                          className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md sm:h-24 sm:w-24"
                        />
                      </div>
                    </div>

                    <div className="px-3 pb-4 pt-3 text-center">
                      <h3 className="line-clamp-2 min-h-[2.8rem] text-[15px] font-extrabold leading-5 text-slate-900 sm:text-lg">
                        {donor.fullName ? donor.fullName.toUpperCase() : "N/A"}
                      </h3>

                      <div className="mt-3 flex justify-center">
                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 ring-1 ring-red-100 sm:text-sm">
                          {donor.bloodGroup}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center justify-center gap-1 text-sm text-blue-700">
                        <MapPin size={13} />
                        <span className="truncate">
                          {donor.place || donor.taluk || donor.district || "N/A"}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Chat on WhatsApp"
                          className="flex aspect-square items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100 transition hover:bg-green-100 lg:h-18 lg:w-18"
                        >
                          <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                        </a>

                        <a
                          href={`tel:${donor.phone}`}
                          aria-label="Call donor"
                          className="flex aspect-square items-center justify-center rounded-xl bg-red-600 text-white transition hover:bg-red-700 lg:h-18 lg:w-18"
                        >
                          <FaPhoneAlt className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                        </a>

                        <Link
                          to={`/singledonor/${donor._id}`}
                          aria-label="View donor details"
                          className="flex aspect-square items-center justify-center rounded-xl bg-red-50 text-red-700 ring-1 ring-red-100 transition hover:bg-red-100 lg:h-18 lg:w-18"
                        >
                          <FaInfoCircle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* No donors */}
        {!loading && donors.length === 0 && !isFilteringActive && (
          <div className="rounded-4xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              No donors available
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doners;
