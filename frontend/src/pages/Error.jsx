
import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-white to-red-100 px-4 py-12">

      <div className="w-full max-w-xl rounded-3xl border border-red-100 bg-white px-8 py-12 text-center shadow-xl sm:px-12">

        {/* Maintenance Icon */}
        <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
          <span className="text-5xl">🛠️</span>
        </div>

        {/* Status Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
          Scheduled Maintenance
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          We'll Be Back Soon!
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-gray-600">
          We're currently upgrading our website to serve you better.
          Our team is working hard to bring you an improved experience.
        </p>

        {/* Information Box */}
        <div className="mt-8 rounded-2xl border border-red-100 bg-red-50/70 p-5">
          <div className="flex items-center justify-center gap-2 text-lg font-bold text-red-700">
            <span>❤️</span>
            <span>Saving Lives Together</span>
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Our blood donation services will be available again shortly.
            Thank you for your patience and for being part of our
            life-saving community.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <p className="text-sm font-medium text-gray-700">
            Thank you for your understanding! 🙏
          </p>

          <p className="mt-2 text-xs text-gray-400">
            © {new Date().getFullYear()} Blood Donation Community. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Error;
