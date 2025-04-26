import React from "react";
import "./MainContent.css";
import TuiCalender from "../../vendor/tuiCalendar/TuiCalendar";

const MainContent = () => {
  const options = {
    defaultView: "month",
    gridSelection: false,
    timeZone: {
      zones: [
        {
          timezoneName: "Asia/Seoul", // 한국 표준시
          displayLabel: "Seoul", // (선택) 라벨
          tooltip: "Seoul Time", // (선택) 툴팁
        },
      ],
    },
    calendars: [
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
    ],
    events: [
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
    ],
  };

  return (
    <div className="MainContentWrapper">
      <div className="MainContentLayout">
        <div id="calendarWrapper">
          <TuiCalender id="financialCalendar" options={options} />
        </div>
        <div id="gridWrapper"></div>
      </div>
    </div>
  );
};

export default MainContent;
