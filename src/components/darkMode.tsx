import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode: React.FC<{ darkMode: boolean; mobile?: true }> = ({
  darkMode,
  mobile,
}) => {
  if (mobile) {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-[0.95rem]">
          {darkMode ? <FaSun /> : <FaMoon />}
        </span>
        <span>{darkMode ? "Light mode" : "Dark mode"}</span>
      </span>
    );
  }
  return (
    <span
      className="grid place-items-center text-[1.05rem]"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </span>
  );
};

export default DarkMode;
