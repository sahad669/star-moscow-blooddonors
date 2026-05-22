import React from "react";
import { HeartHandshake, Users, ShieldCheck, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
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
                Blood Donor Community
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Donate Blood,
                <span className="block text-red-300">Save Lives Every Day</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-red-50 sm:text-lg">
                Your one donation can give someone a second chance at life. Join
                our growing network of donors and help patients find hope when
                they need it most.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button onClick={()=> navigate("/register")}
                 className="rounded-full bg-red-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition duration-300 hover:bg-red-600">
                  Register as Donor
                </button>

                <button onClick={()=>navigate("/donor")} className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
                  Explore Donors
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-red-100">Human-powered support</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-red-100">Urgent donor reach</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold">1 Donor</p>
                  <p className="text-sm text-red-100">
                    Can save multiple lives
                  </p>
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
                Become a donor and help save lives in your area.
              </p>
            </div>
            <span onClick={()=> navigate("/register")} className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium transition group-hover:bg-white/20">
              Join
            </span>
          </button>

          <button onClick={()=>navigate("/donor")} className="group flex items-center justify-between rounded-3xl bg-white px-6 py-5 text-left shadow-xl ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-slate-50">
            <div>
              <p className="text-lg font-bold text-slate-900">View Donors</p>
              <p className="mt-1 text-sm text-slate-500">
                Browse available blood donors quickly and easily.
              </p>
            </div>
          </button>
        </div>
      </section>
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl justify-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-4xl bg-white p-4 shadow-xl ring-1 ring-slate-200">
            <img
              src="/images/starr-mosco.png"
              alt="Star Moscow blood donors"
              className="mx-auto h-52 w-full object-contain sm:h-64 md:h-72"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            Why choose our platform
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Connecting donors with people who need hope
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built to make donor registration simple, donor discovery fast, and
            life-saving connections easier for everyone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-red-50 p-3">
              <Users className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Easy Registration
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Donors can quickly register and share blood group details with a
              smooth and friendly experience.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-rose-50 p-3">
              <Droplets className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Blood Group Search
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Find the right donors by blood type and reach the right people
              without delay.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-emerald-50 p-3">
              <ShieldCheck className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Trusted Community
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A clear and organized donor network helps patients and families
              act with confidence.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-sky-50 p-3">
              <HeartHandshake className="h-6 w-6 text-sky-600" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Real Impact
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every donor added to the platform increases the chance of saving
              lives during emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-slate-200">
              Our mission
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              A better way to connect blood donors and recipients
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              This platform is designed to make blood donor information easier
              to access, helping communities respond faster in urgent moments.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether someone wants to register as a donor or search for
              available donors, the experience should feel simple, fast, and
              trustworthy on every device.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-red-600">Fast Access</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Quickly reach donor information when time matters most.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-red-600">
                Responsive UI
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Works smoothly across mobile, tablet, and desktop screens.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-red-600">Clean Design</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A modern interface that feels friendly and easy to use.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-red-600">
                Meaningful Goal
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Helping save lives through stronger community connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-4xl bg-linear-to-r from-red-600 via-red-700 to-red-900 px-6 py-14 text-center text-white shadow-2xl sm:px-10">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Become a donor today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-red-100 sm:text-base">
            Join the mission, register as a donor, and help people find
            life-saving support when they need it most.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button onClick={()=> navigate("/register")} className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-red-700 transition hover:bg-red-50">
              Register
            </button>
            <button onClick={()=>navigate("/donor")} className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20">
              View Donors
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
