import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  HeartPulse,
  Building2,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-red-50 via-white to-rose-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 rounded-4xl border border-red-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            <HeartPulse size={18} />
            Contact Us
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Star Moscow Blood Donors
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Reach our team for donor support, inquiries, and community updates.
            We are committed to making blood donor connections simple, clear,
            and accessible.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left content */}
          <div className="space-y-6">
            <div className="rounded-4xl border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur-xl sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                An initiative by
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Star Moscow Arts & Sports Club
              </h2>

              <div className="mt-6 rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-xl bg-white p-2 text-red-600 shadow-sm">
                    <Building2 size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Registration & Address
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Reg No: PLD/CA/309/97
                      <br />
                      Moscow Pottachira, Nellaya P.O
                      <br />
                      Palakkad, Kerala, 679335
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Main Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Blood donor support and community service
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Availability
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Contact through phone, WhatsApp, and social media
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl bg-red-200/40 blur-3xl"></div>

            <div className="relative rounded-4xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Get in touch
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                You can contact us directly using the details below.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:9747110010"
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 transition hover:bg-red-50 hover:ring-red-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      9747110010
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:starmoscowclub@gmail.com"
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 transition hover:bg-red-50 hover:ring-red-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </p>
                    <p className="break-all text-sm font-semibold text-slate-800">
                      starmoscowclub@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/9747110010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 transition hover:bg-green-50 hover:ring-green-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      WhatsApp
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      9747110010
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Address
                    </p>
                    <p className="text-sm font-semibold leading-6 text-slate-800">
                      Nellaya P.O, Palakkad,
                      <br />
                      Kerala, 679335
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-red-100 pt-6">
                <p className="text-sm font-semibold text-slate-800">
                  Follow us on social media
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/g/1CntiYEPu6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-100 transition hover:bg-red-100"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  <a
                   href="https://www.instagram.com/starmoscow_pottachira?igsh=MWNrNm4ycXlmM29kcw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-100 transition hover:bg-red-100"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;