const OngoingEventCard = ({
  event,
  registration,
  attendance,
  onViewDetails,
  onOpenQR,
}) => {
  const isRegistered =
    registration && registration.status === "registered";

  const canOpenQR =
    isRegistered &&
    attendance &&
    attendance.status === "pending";

  return (
    <div className="ongoing-event-card">
      <div className="ongoing-event-image">
        <img
          src={event.poster}
          alt={event.name}
        />

        <span className="ongoing-badge">
          ● LIVE NOW
        </span>
      </div>

      <div className="ongoing-event-content">
        <span className="event-category">
          {event.category}
        </span>

        <h3>{event.name}</h3>

        <p className="event-description">
          {event.description}
        </p>

        <div className="event-info">
          <p>
            📅 {event.eventDate}
          </p>

          <p>
            🕐 {event.startTime} - {event.endTime}
          </p>

          <p>
            📍 {event.venue}
          </p>
        </div>

        <div className="event-card-actions">
          <button
            type="button"
            onClick={() =>
              onViewDetails && onViewDetails(event.id)
            }
          >
            View Details
          </button>

          {canOpenQR && (
            <button
              type="button"
              onClick={() =>
                onOpenQR && onOpenQR(event.id)
              }
            >
              Open QR
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OngoingEventCard; 