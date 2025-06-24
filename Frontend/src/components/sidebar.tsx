import "./Sidebar.css";
import {
  FaHome,
  FaPodcast,
  FaUsers,
  FaStore,
  FaMoneyBill,
  FaRocket,
  FaQuestionCircle,
  FaSun,
  FaMoon
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo-container">
          <img src="/logo.png" alt="BookMart Logo" className="sidebar-logo" />
          <h1 className="sidebar-title">BookMart</h1>
        </div>

        <ul className="menu-list">
          <li><FaHome /> <span>Home</span></li>
          <li><FaPodcast /> <span>Podcasts</span></li>
          <li><FaUsers /> <span>Customers</span></li>
          <li><FaStore /> <span>Shop</span></li>
          <li><FaMoneyBill /> <span>Income</span></li>
          <li><FaRocket /> <span>Promote</span></li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <div className="help-section">
          <FaQuestionCircle /> <span>Help & Getting Started</span>
        </div>
        <div className="theme-toggle">
          <button><FaSun /> Light</button>
          <button><FaMoon /> Dark</button>
        </div>
      </div>
    </aside>
  );
}
