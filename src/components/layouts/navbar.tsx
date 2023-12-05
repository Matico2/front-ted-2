import React from "react";

export default function Navbar(props: any) {
  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-gradient-to-r from-yellow-400 to-purple-800 text-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 text-xl font-bold">Ateliê Sol e Lua</div>
        <div className="flex space-x-4">
          <a href="/" className="text-lg no-underline hover:text-amber-300 transition duration-300 ease-in-out">
            Home
          </a>
          <a href="/produtos" className="text-lg no-underline hover:text-amber-300 transition duration-300 ease-in-out">
            Produtos
          </a>
        </div>
        <div>
        </div>
      </nav>
    </>
  );
}
