// function Events() {
//   return (
//     <main className="dashboard">
//       <div className="page-heading">
//         <div>
//           <h2>Events Management</h2>
//           <p>View and manage all events</p>
//         </div>
//       </div>

//       <div className="panel">
//         <div className="panel-header">
//           <div>
//             <h3>Events</h3>
//             <p>Event management will be available here.</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Events;
function Events() {
  return (
    <main className="dashboard">
      <div className="page-heading">
        <div>
          <h2>Events Management</h2>
          <p>View and manage all events</p>
        </div>

        <button className="primary-button">
          + Create Event
        </button>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h3>All Events</h3>
            <p>Manage upcoming and completed events</p>
          </div>
        </div>

        <div style={{ padding: "30px", color: "#77727f", fontSize: "12px" }}>
          Events table will be built here.
        </div>
      </div>
    </main>
  );
}

export default Events;