import React from "react";
// import logo from "../../images/loanlogo.jpg"

function Header() {
  return (
    <nav className="bg-gray-800 py-4 shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-xl font-semibold">TECHDOME</span>
          </div>
          <div className="hidden md:block">
            <div className="flex ml-10">
              <a
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Admin
              </a>
              <a
                href="/login"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </a>
              <a
                href="/signup"
                className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
