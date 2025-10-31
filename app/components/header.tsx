import Link from 'next/link';


export default function Header() {
  return (
    <header>
            <ul className="container-header">
              <li><img src="/images/radulogo.png" alt="Logo" className="radulogo" /></li>
              <li><div className="smallrectangle"></div></li>
              <div className="radughimp">
                <p>RADU GHIMP</p>
              </div>
              <div className="navlinks">
                <li className="home-button"><Link href="#">Home</Link></li>
                <li><Link href="#">About me</Link></li>
                <li><Link href="#">My work</Link></li>
                <li><Link href="#">Start your project</Link></li>
              </div>
            </ul>
    </header>
  );
}
