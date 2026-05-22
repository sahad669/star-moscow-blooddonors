
import React, { useEffect, useState } from "react";
import { getAllDonors, filterDonors } from "../features/donerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Search,
  Droplets,
  RotateCcw,
  MessageCircle,
  UserRound,
  MapPin,
  Phone,
} from "lucide-react";

const Doners = () => {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState("");
  const [filterBlood, setFilterBlood] = useState("");

  const { donors, loading } = useSelector((state) => state.donor);

  const isFilteringActive = searchName || filterBlood;

  useEffect(() => {
    dispatch(getAllDonors());
  }, [dispatch]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!searchName && !filterBlood) {
        dispatch(getAllDonors());
      } else {
        dispatch(
          filterDonors({
            name: searchName,
            bloodGroup: filterBlood,
          })
        );
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [searchName, filterBlood, dispatch]);

  const handleClear = () => {
    setSearchName("");
    setFilterBlood("");
  };

  const getWhatsappNumber = (donor) => {
    const rawNumber = donor.phone1 || donor.whatsapp || donor.phone || "";
    return String(rawNumber).replace(/[^\d]/g, "");
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-3 py-5 sm:px-5 lg:px-8">
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
                Search by donor name or blood group and connect faster through
                WhatsApp or view full profile details.
              </p>
            </div>

            {isFilteringActive && (
              <button
                onClick={handleClear}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                <RotateCcw size={16} />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Search and filter */}
        <div className="mb-6 rounded-4xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr]">
            <div className="relative">
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
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-4xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Loading donors...
            </p>
          </div>
        )}

        {/* No results */}
        {!loading && donors.length === 0 && isFilteringActive && (
          <div className="mx-auto max-w-2xl rounded-4xl border border-red-100 bg-white p-8 text-center shadow-md">
            <h3 className="text-2xl font-bold text-red-500">No Results Found</h3>

            {searchName && !filterBlood && (
              <p className="mt-3 text-slate-700">
                No donor found with name
                <span className="font-semibold text-red-500"> {searchName}</span>
              </p>
            )}

            {!searchName && filterBlood && (
              <p className="mt-3 text-slate-700">
                No donor found with blood group
                <span className="font-semibold text-red-500">
                  {" "}
                  {filterBlood}
                </span>
              </p>
            )}

            {searchName && filterBlood && (
              <p className="mt-3 text-slate-700">
                No donor found with name
                <span className="font-semibold text-red-500"> {searchName}</span>
                {" "}and blood group
                <span className="font-semibold text-red-500">
                  {" "}
                  {filterBlood}
                </span>
              </p>
            )}

            <p className="mt-3 text-sm text-slate-500">
              Try checking spelling or use another blood group.
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
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {donors.map((donor) => {
              const whatsappNumber = getWhatsappNumber(donor);
              const whatsappLink = `https://wa.me/${whatsappNumber}`;

              return (
                <div
                  key={donor._id}
                  className="group overflow-hidden rounded-[1.6rem] border border-red-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* top cover */}
                  <div className="relative h-16 bg-linear-to-r from-red-100 via-rose-50 to-red-100 sm:h-20">
                    <span className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-red-600 shadow-sm">
                      {donor.bloodGroup}
                    </span>
                  </div>

                  {/* image */}
                  <div className="relative px-3">
                    <div className="-mt-10 flex justify-center sm:-mt-12">
                      <img
                        src={donor.imageurl ||"/images/defult-img.jpg"}
                        alt={donor.fullName}
                        className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md sm:h-24 sm:w-24"
                      />
                    </div>
                  </div>

                  {/* content */}
                  <div className="px-3 pb-4 pt-3 text-center">
                    <h3 className="line-clamp-2 min-h-[2.8rem] text-[15px] font-extrabold leading-5 text-slate-900 sm:text-lg">
                      {donor.fullName}
                    </h3>

                    <div className="mt-2 flex items-center justify-center gap-1 text-sm text-blue-700 sm:text-sm">
                      <Phone size={13} />
                      <span className="truncate">{donor.phone}</span>
                    </div>

                    <div className="mt-1 flex items-center justify-center gap-1 text-sm text-blue-700 sm:text-sm">
                      <MapPin size={13} />
                      <span className="truncate">{donor.place}</span>
                    </div>

                    <div className="mt-3 flex justify-center">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 ring-1 ring-red-100 sm:text-sm">
                        {donor.bloodGroup}
                      </span>
                    </div>

                    {/* action icons */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-50 px-3 py-2.5 text-xs font-semibold text-green-700 ring-1 ring-green-100 transition hover:bg-green-100 sm:text-sm"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </a>

                      <Link
                        to={`/singledonor/${donor._id}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-50 px-3 py-2.5 text-xs font-semibold text-red-700 ring-1 ring-red-100 transition hover:bg-red-100 sm:text-sm"
                      >
                        <UserRound size={16} />
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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