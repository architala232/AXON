import {
  CalendarDays,
  Users,
  GraduationCap,
  ClipboardCheck,
  ArrowUpRight,
  UserRoundPlus,
} from "lucide-react";

import StatCard from "../../components/admin/StatCard";
import UpcomingEvents from "../../components/admin/UpcomingEvents";

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>Overview of your event management system</p>
        </div>

        <button className="primary-button">
          <UserRoundPlus size={17} />
          Add Volunteer
        </button>
      </div>

      <section className="stats-grid">
        <StatCard
          title="Total Events"
          value="24"
          subtitle="8 upcoming events"
          icon={CalendarDays}
        />

        <StatCard
          title="Total Volunteers"
          value="128"
          subtitle="12 added this month"
          icon={Users}
        />

        <StatCard
          title="Total Participants"
          value="640"
          subtitle="Across all events"
          icon={GraduationCap}
        />

        <StatCard
          title="Average Attendance"
          value="82%"
          subtitle="↑ 6.4% from last month"
          icon={ClipboardCheck}
        />
      </section>

      <section className="content-grid">
        <UpcomingEvents />

        <div className="panel activity-panel">
          <div className="panel-header">
            <div>
              <h3>Quick Access</h3>
              <p>Frequently used management sections</p>
            </div>
          </div>

          <div className="quick-access">
            <button>
              <div className="quick-icon">
                <CalendarDays size={18} />
              </div>
              <div>
                <strong>Manage Events</strong>
                <span>View and manage all events</span>
              </div>
              <ArrowUpRight size={16} />
            </button>

            <button>
              <div className="quick-icon">
                <Users size={18} />
              </div>
              <div>
                <strong>Volunteers</strong>
                <span>View volunteer information</span>
              </div>
              <ArrowUpRight size={16} />
            </button>

            <button>
              <div className="quick-icon">
                <GraduationCap size={18} />
              </div>
              <div>
                <strong>Participants</strong>
                <span>Check registered students</span>
              </div>
              <ArrowUpRight size={16} />
            </button>

            <button>
              <div className="quick-icon">
                <ClipboardCheck size={18} />
              </div>
              <div>
                <strong>Attendance</strong>
                <span>Track event attendance</span>
              </div>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;