import { Search, Menu } from 'lucide-react';
import { useState } from 'react';
import Styles from './header.module.css'

function Header() {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleToggle = () => {
    setToggle(!toggle)
    console.log(toggle)
  }
  return (
    <header>
      <div className="logo">
        <img src="/images/slack-logo.png" alt="Slack Logo" />
      </div>
      <nav className={toggle ? 'open' : 'close'}>
        <ul>
          <li><a href="/product">Product</a></li>
          <li><a href="/Solutions">Solutions</a></li>
          <li><a href="/enterprise">Enterprice</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
      </nav>
      <div className="nav-right">
        <button onClick={handleToggle}>
          <Search />
        </button>
        <Menu />
      </div>
    </header>
  )
}

export default Header 
