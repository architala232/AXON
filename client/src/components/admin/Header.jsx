import { Search, Bell } from "lucide-react";

function Header() {
  return (
    <header className="top-header">
      <div className="search-box">
        <Search size={17} />
        <input
          type="text"
          placeholder="Search events, volunteers, students..."
        />
      </div>

      <div className="header-right">
        <button className="notification-button">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <div className="header-admin">
          <div className="header-avatar">A</div>
          <div>
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;