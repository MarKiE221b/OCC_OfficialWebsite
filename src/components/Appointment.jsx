import React from "react";

const Appointment = () => {
  return (
    <div className="rounded-xl overflow-hidden border border-base-300 shadow">
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0na9YPOalG6IDD4zBnJmp9ooaCcmk5gfbwrm5L0Wdp5ZmUy3FEKsY0Y9A87z3CzIiZUPQwViYv?gv=true"
        style={{ border: 0 }}
        width="100%"
        height="600"
        title="Appointment Scheduler"
      ></iframe>
    </div>
  );
};

export default Appointment;
