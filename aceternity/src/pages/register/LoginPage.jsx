import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black flex font-monstera flex-col w-full items-center justify-center p-4">
      <NavBar />
      <div className="w-full max-w-[550px] space-y-5 h-screen ">
        <div className="flex items-center justify-center gap-2 mt-44 space-y-2">
          <div className="bg-white rounded-full p-1">
            <svg
              width="25"
              height="25"
              viewBox="0 2 30 30"
              xmlns="http://www.w3.org/2000/svg"
              className="m-0.5 text-xl"
            >
              <path
                d="M11.0389 19.8912L11.0392 28.5579C12.6769 28.5579 14.0028 27.2273 13.9972 25.5897L13.9712 18.071L13.9899 13.8938C13.9996 11.7406 15.753 10.003 17.9061 10.0126C20.0593 10.0223 21.797 11.7756 21.7873 13.9288L21.7686 18.106L21.7686 18.7764C21.7686 19.3921 22.2677 19.8912 22.8833 19.8911C23.499 19.8911 23.998 19.392 23.998 18.7764L23.998 13.5232C23.998 9.95254 21.1035 7.05796 17.5328 7.05796C13.9735 7.05796 11.0836 9.93487 11.0677 13.4942L11.0389 19.8912Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="text-white text-lg  font-semibold">Proactiv</span>
        </div>
        <h2 className="text-center text-[35px] sm:text-[45px] font-bold text-white">
          Welcome to Proactiv
        </h2>
        <div className="space-y-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full bg-white text-black font-medium py-3 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition duration-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Login with GitHub</span>
            </button>
            <button className="w-full bg-white text-black font-medium py-3 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition duration-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
              <span>Login with Google</span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-500">Or</span>
            </div>
          </div>
          <button className="w-full bg-zinc-800 text-white font-medium py-3 px-4 rounded-md hover:bg-zinc-700 transition duration-300">
            Continue with Email
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
