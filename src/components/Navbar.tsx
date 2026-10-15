import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { Link as ReactScrollLink } from "react-scroll";
const Link = ReactScrollLink as any;
import { setDarkMode } from "../dark-mode/reducer";

import type { AppDispatch } from "../store";
import "../styles/Navbar.css";
import DarkMode from "./darkMode";
import Tilt from "./Tilt";

const NAV_ITEMS = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "codingProfile", label: "Coding Profile" },
  { to: "project", label: "Projects" },
];

const TILT_OPTIONS = {
  speed: 400,
  max: 20,
  gyroscope: false,
};

const Navbar: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [menu, setMenu] = useState(false);
  const useAppDispatch = useDispatch.withTypes<AppDispatch>();
  const dispatch = useAppDispatch();

  return (
    <>
      <nav
        className={`nav-shell fixed inset-x-0 top-0 z-30 flex h-[72px] items-center overflow-visible border-b backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl lg:h-[76px] ${darkMode ? "border-white/10 bg-black/35" : "border-black/5 bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"}`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between gap-2 overflow-visible px-4 sm:px-6 lg:px-8">
          <Link
            to="home"
            spy
            smooth
            offset={-100}
            className="logo-link flex shrink-0 items-center self-stretch overflow-hidden"
          >
            <div className="logo flex cursor-pointer items-center self-stretch p-1 text-[2rem] leading-none font-bold text-purple-500 md:text-[2.1rem] lg:text-[2.2rem]">
              Abhay
            </div>
          </Link>

          <ul className="hidden items-center gap-1 md:flex lg:gap-1.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                activeClass="active"
                to={item.to}
                spy
                smooth
                offset={-78}
                className="nav-link"
              >
                <li className="nav-item flex cursor-pointer items-center rounded-full px-3.5 py-2 text-[1.15rem] font-medium whitespace-nowrap text-purple-500/90 transition-colors duration-200 hover:bg-violet-600/10 hover:text-teal-500 lg:px-4 lg:text-[1.45rem]">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <Link
              to="contact"
              spy
              smooth
              offset={-78}
              className="nav-contact shrink-0"
            >
              <span className="inline-flex cursor-pointer items-center rounded-full border border-violet-500/50 bg-violet-600 px-5 py-2 text-[1.05rem] leading-none font-semibold whitespace-nowrap text-white shadow-sm transition-all duration-200 hover:bg-violet-700 hover:shadow-md hover:shadow-violet-500/25 lg:px-6 lg:py-2.5 lg:text-[1.15rem]">
                Contact Me
              </span>
            </Link>
            <button
              onClick={() => dispatch(setDarkMode(!darkMode))}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-violet-500/30 bg-white/10 text-violet-600 backdrop-blur-md transition hover:bg-violet-600 hover:text-white"
              aria-label="Toggle theme"
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              <DarkMode darkMode={darkMode} />
            </button>
          </div>

          <button
            onClick={() => setMenu(true)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-violet-500/20 bg-white/10 text-violet-600 backdrop-blur-md transition hover:bg-violet-600 hover:text-white md:hidden"
            aria-label="Open menu"
          >
            <CgMenuRight size={22} />
          </button>
        </div>
      </nav>

      {menu && (
        <>
          <div
            onClick={() => setMenu(false)}
            className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[3px] md:hidden"
          />
          <div
            className={`mNav fixed top-0 right-0 z-50 flex h-[100dvh] w-[78vw] max-w-[300px] flex-col gap-2 border-l px-6 pt-6 pb-6 backdrop-blur-2xl md:hidden ${darkMode ? "border-white/10 bg-zinc-900/80" : "border-black/5 bg-white/85"} shadow-2xl`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[1.1rem] font-semibold tracking-tight text-purple-500">
                Menu
              </span>
              <button
                onClick={() => setMenu(false)}
                className={`grid h-9 w-9 place-items-center rounded-full border ${darkMode ? "border-white/10 bg-white/10 text-white" : "border-black/10 bg-white/60 text-zinc-700"}`}
                aria-label="Close menu"
              >
                <AiOutlineClose size={18} />
              </button>
            </div>

            <ul className="mt-6 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  onClick={() => setMenu(false)}
                  activeClass="active"
                  to={item.to}
                  spy
                  smooth
                  offset={-80}
                >
                  <li
                    className={`nav-item flex cursor-pointer items-center rounded-xl px-3 py-3.5 text-[1.05rem] font-medium transition hover:bg-violet-600/10 hover:text-violet-600 ${darkMode ? "text-zinc-200" : "text-zinc-700"}`}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
              <Link
                onClick={() => setMenu(false)}
                activeClass="activeContact"
                to="contact"
                spy
                smooth
                offset={-70}
                className="nav-contact mt-3 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-[1.05rem] font-semibold text-white shadow-md transition hover:bg-violet-700"
              >
                Contact Me
              </Link>
            </ul>

            <button
              onClick={() => dispatch(setDarkMode(!darkMode))}
              className={`mt-auto flex w-full items-center justify-center gap-2 rounded-full border border-violet-500/30 bg-white/10 px-4 py-3 text-[0.95rem] font-medium backdrop-blur-md transition hover:bg-violet-600 hover:text-white ${darkMode ? "text-violet-300" : "text-violet-600"}`}
            >
              <DarkMode darkMode={darkMode} mobile />
            </button>
          </div>
        </>
      )}
      <Tilt cls="logo" options={TILT_OPTIONS} />
    </>
  );
};

export default Navbar;
