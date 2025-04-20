import React from "react";
import Calendar from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "./MainContent.css";

const MainContent = () => {
//   var Calendar = window.tui.Calendar;

  var cal = new Calendar("#calendarWrapper", {
    defaultView: "month",
  });

  return (
    <div className="MainContentWrapper">
      <div className="MainContentLayout">
        <div id="calendarWrapper"></div>
        <div id="gridWrapper"></div>
      </div>
    </div>
  );
};

export default MainContent;
