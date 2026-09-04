import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-area">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;