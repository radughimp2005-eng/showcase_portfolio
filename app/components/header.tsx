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
        <nav className="max-[768px]:block min-[769px]:hidden bg-[#2FCA50] text-[#343434] rounded-b-2xl mx-5 mt-[-10px] px-4 py-3 shadow-lg">
          <ul className="flex flex-col gap-3 font-bold">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            {pathname === "/" ? (
              <>
                <li>
                  <a href="#about-me" onClick={() => setIsOpen(false)}>About me</a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setIsOpen(false)}>My work</a>
                </li>
                <li>
                  <a href="#start-project" onClick={() => setIsOpen(false)}>Start your project</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/#about-me" onClick={() => setIsOpen(false)}>About me</Link>
                </li>
                <li>
                  <Link href="/#projects" onClick={() => setIsOpen(false)}>My work</Link>
                </li>
                <li>
                  <Link href="/#start-project" onClick={() => setIsOpen(false)}>Start your project</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
