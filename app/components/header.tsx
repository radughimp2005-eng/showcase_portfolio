"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Header() {

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <ul className="container-header">
        <li><img src="/images/radulogo.png" alt="Logo" className="radulogo" /></li>
        <li><div className="smallrectangle"></div></li>
        <div className="radughimp">
          <p>RADU GHIMP</p>
        </div>

        {/* Desktop nav */}
        <nav className="navlinks max-[768px]:hidden">
          <li className="home-button"><Link href="/">Home</Link></li>
          {pathname === "/" ? (
            <>
              <li><a href="#about-me">About me</a></li>
              <li><a href="#projects">My work</a></li>
              <li><a href="#start-project">Start your project</a></li>
            </>
          ) : (
            <>
              <li><Link href="/#about-me">About me</Link></li>
              <li><Link href="/#projects">My work</Link></li>
              <li><Link href="/#start-project">Start your project</Link></li>
            </>
          )}
        </nav>

        {/* Mobile burger button */}
        <button
          type="button"
          className="ml-auto text-white text-3xl min-[769px]:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </ul>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="max-[768px]:block min-[769px]:hidden bg-[#2FCA50]/85 text-[#043017] rounded-b-2xl mx-5 mt-[20px] px-4 py-3 shadow-lg">
          <ul className="flex flex-col items-center gap-2 font-bold text-[25px]">
            <li className="rounded-xl overflow-hidden hover:bg-[#33dd70] transition-colors duration-200">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2"
              >
                Home
              </Link>
            </li>
            {pathname === "/" ? (
              <>
                <li className="rounded-xl overflow-hidden hover:bg-[#33dd70] transition-colors duration-200">
                  <a
                    href="#about-me"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2"
                  >
                    About me
                  </a>
                </li>
                <li className="rounded-xl overflow-hidden hover:bg-[#33dd70] transition-colors duration-200">
                  <a
                    href="#projects"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2"
                  >
                    My work
                  </a>
                </li>
                <li className="rounded-xl overflow-hidden hover:bg-[#33dd70] transition-colors duration-200">
                  <a
                    href="#start-project"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2"
                  >
                    Start your project
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="rounded-xl overflow-hidden hover:bg-[#33dd70] transition-colors duration-200">
                  <Link
                    href="/#about-me"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2"
                  >
                    About me
                  </Link>
                </li>
                <li className="rounded-xl overflow-hidden hover:bg-[#33dd70] transition-colors duration-200">
                  <Link
                    href="/#projects"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2"
                  >
                    My work
                  </Link>
                </li>
                <li className="rounded-xl overflow-hidden hover:bg-[#33dd70] transition-colors duration-200">
                  <Link
                    href="/#start-project"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2"
                  >
                    Start your project
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
