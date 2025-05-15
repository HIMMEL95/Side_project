import React, { useEffect, useState } from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "./TuiCalendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import ReactDatepicker from "../react-datepicker/ReactDatepicker";
import { forwardRef } from "react";

const TuiCalender = forwardRef((props, ref) => {
  console.log(props.options);
  const [date, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dateChangeHandler = (event) => {
    let calendarInstance = ref.current.getInstance();
    let target = event.currentTarget.id;
    let newDate;
    let currentDate = date;

    switch (target) {
      case "todayBtn":
        newDate = new Date(); // 복사본 생성
        calendarInstance.today();
        break;
      case "prevBtn":
        newDate = new Date(currentDate); // 복사본 생성
        newDate.setMonth(newDate.getMonth() - 1); // +1달
        calendarInstance.prev();
        break;
      case "nextBtn":
        newDate = new Date(currentDate); // 복사본 생성
        newDate.setMonth(newDate.getMonth() + 1); // +1달
        calendarInstance.next();
        break;
      default:
        break;
    }

    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toLocaleString().padStart(2, "0");

    setDate(`${year}-${month}`);
  };

  const todayHandler = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toLocaleString().padStart(2, "0");

    const date = `${year}-${month}`;
    setDate(date);
  };

  const datePickerChangeHandler = (date) => {
    let calendarInstance = ref.current.getInstance();
    calendarInstance.setDate(date);
    console.log(date);
    setSelectedDate(date);
  };

  // 컴포넌트가 처음 렌더링 될 때 자동 실행 시키는 방법
  useEffect(() => {
    todayHandler();
  }, []); // 빈 배열은 최초 1회만 실행됨

  const options = {
    dateFormat: "yyyy-MM-dd", // 날짜 형태
    minDate: new Date("2000-01-01"), // 선택 가능 최소 날짜
    selected: selectedDate,
    className: "datePicker",
    height: "100px",
    onChange: datePickerChangeHandler,
  };

  return (
    <>
      <div id={`${props.id}header`} className="calendarHeader">
        <div id={`${props.id}navbar`} className="calendarNavbar">
          <div
            id="todayBtn"
            className="calBtn is-rounded today btn btn-light"
            onClick={dateChangeHandler}
          >
            Today
          </div>
          <div
            id="prevBtn"
            className="calBtn is-rounded prev btn btn-light"
            onClick={dateChangeHandler}
          >
            <i
              className="bi bi-arrow-left-short"
              style={{ fontSize: "20px" }}
            ></i>
          </div>
          <ReactDatepicker options={options} />
          <div
            id="nextBtn"
            className="calBtn is-rounded next btn btn-light"
            onClick={dateChangeHandler}
          >
            <i
              className="bi bi-arrow-right-short"
              style={{ fontSize: "20px" }}
            ></i>
          </div>
        </div>
      </div>
      <Calendar
        ref={ref}
        height="100%"
        view="month"
        options={props.options.options}
        theme={props.options.theme}
        useCreationPopup={true}
        useFormPopup={props.options.useFormPopup}
        useDetailPopup={props.options.useDetailPopup}
        defaultView={props.options.defaultView}
        gridSelection={props.options.gridSelection}
        calendars={props.options.calendars}
        events={props.options.events}
        usageStatistics={false}
      />
    </>
  );
});

export default TuiCalender;
