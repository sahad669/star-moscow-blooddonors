import React from "react";
import {
  HeartPulse,
  ShieldAlert,
  Users,
  HeartHandshake,
  Droplets,
  Phone,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-white text-slate-800">
      {/* Hero Section */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `url("/images/donate-2.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-red-950/85 via-red-900/75 to-black/55"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_25%)]"></div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl text-white">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
                <Droplets className="mr-2 h-4 w-4 text-red-300" />
                Lifesavers Network
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                One Club,
                <span className="mt-2 block text-2xl text-red-300 sm:text-3xl lg:text-4xl">
                  <span className="block pl-6 sm:pl-10">Thousands</span>
                  <span className="block pl-14 sm:pl-25">of</span>
                  <span className="block pl-12 sm:pl-22">Life</span>
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-red-50 sm:text-lg">
                Every blood donation is a gift of life. Join Star Moscow Blood
                Donors and become the reason someone gets another tomorrow.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => navigate("/register")}
                  className="rounded-full bg-red-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition duration-300 hover:bg-red-600"
                >
                  Register
                </button>

                <button
                  onClick={() => navigate("/donor")}
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
                >
                  Find Donors
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold">361</p>
                  <p className="text-sm text-red-100">Donors</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-red-100">Emergency Support</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-red-100">Blood Groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <button className="group flex items-center justify-between rounded-3xl bg-red-600 px-6 py-5 text-left text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-red-700">
            <div>
              <p className="text-lg font-bold">Register Now</p>
              <p className="mt-1 text-sm text-red-100">
                Join our mission to help save lives.
              </p>
            </div>
            <span
              onClick={() => navigate("/register")}
              className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium transition group-hover:bg-white/20"
            >
              Join
            </span>
          </button>

          <button
            // onClick={() => navigate("/dono")}
            className="group flex items-center justify-between rounded-3xl bg-white px-6 py-5 text-left shadow-xl ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-slate-50"
          >
            <div>
              <p className="text-lg font-bold text-slate-900">Explore Donors</p>
              <p className="mt-1 text-sm text-slate-500">
                Quick access to Blood Donors.
              </p>
            </div>
            <span
              onClick={() => navigate("/donor")}
              className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium transition "
            >
              View
            </span>
          </button>
        </div>
      </section>
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl justify-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-4xl">
            <img
              src="/images/starr-mosco.png"
              alt="Star Moscow blood donors"
              className="mx-auto h-52 w-full object-contain sm:h-64 md:h-72"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-  sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            Why Star Moscow Blood Donors?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            United by Humanity, Driven to Save Lives
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Star Moscow Blood Donors is a trusted community connecting caring
            hearts with patients in need through fast and reliable donor
            support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4  xl:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-red-50 p-3">
              <HeartPulse className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Save Lives
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              One donation can give someone another chance at life.{" "}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-rose-50 p-3">
              <ShieldAlert className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Emergency Support
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Quick donor response during urgent situations.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-emerald-50 p-3">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Community Service
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Serving society through humanity and kindness.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-sky-50 p-3">
              <HeartHandshake className="h-6 w-6 text-sky-600" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Local Donor Network
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Network connecting nearby donors with patients in need.
            </p>
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-12 px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-slate-200">
              Our mission
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              Connecting Lives Beyond Borders
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Our mission is to build a reliable blood donor community that
              helps people quickly find the right donor during emergencies.
              Starting from our local community, we aim to expand this
              lifesaving network across the country and one day connect donors
              and patients around the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-4xl bg-linear-to-r from-red-600 via-red-700 to-red-900 px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-12">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Emergency Support Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-red-100 sm:text-base">
              Need urgent blood support? Our emergency team is available to help
              you connect with donors quickly when every second matters.
            </p>
          </div>

          {/* Content */}
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-3">
            {/* Contact list */}
            <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2">
              {/* Main Contact */}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/15 p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-red-100">Emergency Contact</p>
                    <p className="mt-1 text-lg font-semibold">
                      +91 97471 10010
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919747110010"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/15 p-3">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-red-100">WhatsApp Support</p>
                    <p className="mt-1 text-lg font-semibold">
                      +91 97471 10010
                    </p>
                  </div>
                </div>
              </a>

              {/* Backup Contact 1 */}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/15 p-3">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-red-100">Backup Contact 1</p>
                    <p className="mt-1 text-lg font-semibold">
                      +91 81118 51866
                    </p>
                  </div>
                </div>
              </div>

              {/* Backup Contact 2 */}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/15 p-3">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-red-100">Backup Contact 2</p>
                    <p className="mt-1 text-lg font-semibold">
                      +91 96564 21454
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/hours.png"
                alt="24/7 Emergency Support"
                className="w-full max-w-xs sm:max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
