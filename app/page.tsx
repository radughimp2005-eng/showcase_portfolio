"use client";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main>
        <div className="blackcircle"></div>
        <img src={hovered ? "/images/me2.png" : "/images/me.png"} alt="me" className="me"/>
        <section className="homepage">
          <div className="homepagetext">
          <p className="frontend-title">FRONTEND DEVELOPER & DESIGNER</p>
          <h1 className="homequote">It is hard to fail but it is worse never to have tried to succeed</h1>
          <p className="homequote2">My mission is to design and develop a website that you and your audience love</p>
          <div className="gettoknowme-ig"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <a href="https://www.instagram.com/radu_gh16/" target="_blank" className="gettoknowme-text">Get to know me</a>
            <img src="/images/instagram.png" alt="Instagram" />
          </div>
        </div>
        </section>
    </main>
  );
}
