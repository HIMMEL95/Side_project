import React from "react";
import "./MainContent.css";
import TuiCalender from "../../vendor/tuiCalendar/TuiCalendar";
import ReactTabs from "../../vendor/react-tabs/ReactTabs";
import { useRef } from "react";

const MainContent = () => {
  const vendorRef = useRef();
  console.log(vendorRef);

  const calendarOptions = {
    defaultView: "month",
    gridSelection: true,
    // calendars: MOCK_CALENDARS,
    useFormPopup: true,
    useDetailPopup: true,
    options: {
      month: {
        visibleEventCount: 4,
      },
    },
    theme: {
      common: {
        backgroundColor: "#FFFFFA",
      },
    },
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

  const tabOptions = {
    id: "calendarTabs",
    className: "calendarTabs",
    defaultActiveKey: "calendar",
    tabList: [
      {
        id: "1",
        eventKey: "calendar",
        title: "calendar",
        disabled: false,
        children: (
          <div className="MainContentLayout">
            <div id="calendarWrapper">
              <TuiCalender
                ref={vendorRef}
                id="financialCalendar"
                options={calendarOptions}
              />
            </div>
            <div id="gridWrapper"></div>
          </div>
        ),
      },
      { id: "2", eventKey: "chart", title: "chart", disabled: false },
      { id: "3", eventKey: "list", title: "list", disabled: true },
    ],
  };

  return (
    <div className="MainContentWrapper">
      <ReactTabs options={tabOptions} />
    </div>
  );
};

export default MainContent;
