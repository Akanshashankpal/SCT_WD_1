import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap site-footer__inner">
          <p>Meridian Studio</p>
          <p>SCT_WD_1 · Fixed navigation on every page</p>
        </div>
      </footer>
    </>
  );
}
