import React from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "../../vendor/tui-calendar/TuiCalendar.css";

const TuiCalender = () => {
    const calendars = [
        {
          id: "cal1",
          name: "개인",
          backgroundColor: "#9e5fff",
          borderColor: "#9e5fff",
        },
        {
          id: "cal2",
          name: "회사",
          backgroundColor: "#00a9ff",
          borderColor: "#00a9ff",
        },
      ];
    
      const events = [
        {
          id: "1",
          calendarId: "cal1",
          title: "점심 약속",
          category: "time",
          start: "2025-04-26T12:00:00",
          end: "2025-04-26T13:00:00",
        },
        {
          id: "2",
          calendarId: "cal2",
          title: "회의",
          category: "time",
          start: "2025-04-27T09:00:00",
          end: "2025-04-27T10:00:00",
        },
      ];

  <div id="calendarWrapper">
    <header className="header">
      <nav className="navbar">
        <button className="button is-rounded today">Today</button>
        <button className="button is-rounded prev">
          <img
            alt="prev"
            src="/images/ic-arrow-line-left.png"
            srcSet="/images/ic-arrow-line-left@2x.png 2x, /images/ic-arrow-line-left@3x.png 3x"
          />
        </button>
        <button className="button is-rounded next">
          <img
            alt="next"
            src="/images/ic-arrow-line-right.png"
            srcSet="/images/ic-arrow-line-right@2x.png 2x, /images/ic-arrow-line-right@3x.png 3x"
          />
        </button>
        <span className="navbar--range"></span>
      </nav>
    </header>
    <Calendar
      height="100%"
      view="month"
      calendars={calendars}
      events={events}
      usageStatistics={false}
      calendars={calendars}
    />
  </div>;
};

export default TuiCalender;
