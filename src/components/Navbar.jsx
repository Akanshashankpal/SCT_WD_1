import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'Studio' },
  { to: '/contact', label: 'Contact' },
];

const SCROLL_OFFSET = 40;

export default function Navbar() {
  const location = useLocation();
  const listRef = useRef(null);
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > SCROLL_OFFSET,
  );
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_OFFSET);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
    setIndicator((current) => ({ ...current, visible: false }));
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function moveIndicator(event) {
    if (window.matchMedia('(max-width: 800px)').matches) return;
    const list = listRef.current;
    if (!list) return;
    const listBox = list.getBoundingClientRect();
    const itemBox = event.currentTarget.getBoundingClientRect();
    setIndicator({
      left: itemBox.left - listBox.left,
      width: itemBox.width,
      visible: true,
    });
  }

  function hideIndicator(event) {
    if (event?.relatedTarget && event.currentTarget.contains(event.relatedTarget)) {
      return;
    }
    setIndicator((current) => ({ ...current, visible: false }));
  }

  const className = [
    'site-nav',
    scrolled ? 'is-scrolled' : '',
    open ? 'is-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={className}>
      <div className="site-nav__bar">
        <NavLink to="/" className="site-nav__logo" end>
          <span className="site-nav__mark" aria-hidden="true" />
          Meridian
        </NavLink>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="site-nav__bars" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className="site-nav__menu"
          aria-label="Primary"
        >
          <div
            className="site-nav__list-wrap"
            ref={listRef}
            onMouseLeave={hideIndicator}
            onBlur={hideIndicator}
          >
            <span
              className={`site-nav__indicator${indicator.visible ? ' is-visible' : ''}`}
              style={{
                width: indicator.width,
                transform: `translateX(${indicator.left}px)`,
              }}
            />
            <ul className="site-nav__list">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `site-nav__link${isActive ? ' is-active' : ''}`
                    }
                    onMouseEnter={moveIndicator}
                    onFocus={moveIndicator}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
