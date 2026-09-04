import {
  LayoutDashboard,
  CalendarDays,
  Users,
  UserRoundCheck,
  ClipboardCheck,
  BarChart3,
  MessageSquareText,
  Image,
  ListTodo,
  FileText,
  UserPlus,
  UserCircle,
  LogOut,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Events", icon: CalendarDays },
  { label: "Volunteers", icon: Users },
  { label: "Participants", icon: UserRoundCheck },
  { label: "Attendance", icon: ClipboardCheck },
  { label: "Analysis", icon: BarChart3 },
  { label: "Feedback", icon: MessageSquareText },
  { label: "Gallery", icon: Image },
  { label: "Task Progress", icon: ListTodo },
  { label: "Reports", icon: FileText },
  { label: "Add Volunteer", icon: UserPlus },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">A</div>
        <div>
          <h1>AXON</h1>
          <p>Admin Portal</p>
        </div>
      </div>

      <div className="admin-profile">
        <div className="profile-avatar">A</div>
        <div>
          <strong>Admin</strong>
          <span>Administrator</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-title">MAIN MENU</div>

        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`nav-item ${index === 0 ? "active" : ""}`}
            >
              <Icon size={17} strokeWidth={1.8} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-item">
          <UserCircle size={17} strokeWidth={1.8} />
          <span>Profile</span>
        </button>

        <button className="nav-item logout">
          <LogOut size={17} strokeWidth={1.8} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;