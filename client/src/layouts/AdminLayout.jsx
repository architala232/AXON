// import Sidebar from "../components/admin/Sidebar";
// import Header from "../components/admin/Header";

// function AdminLayout({ children }) {
//   return (
//     <div className="admin-layout">
//       <Sidebar />

//       <div className="main-area">
//         <Header />
//         {children}
//       </div>
//     </div>
//   );
// }

// export default AdminLayout;


import { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-area">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
        />

        {children}
      </div>

    </div>
  );
}

export default AdminLayout;