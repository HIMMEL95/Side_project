import React, { useEffect, useRef, useState } from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "./TuiCalendar.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatepicker from "../react-datepicker/ReactDatepicker";

const TuiCalender = (props) => {
  const calendarRef = useRef();
  const [date, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dateChangeHandler = (event) => {
    let calendarInstance = calendarRef.current.getInstance();
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
    let calendarInstance = calendarRef.current.getInstance();
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
    minDate : new Date('2000-01-01'), // 선택 가능 최소 날짜
    selected : selectedDate,
    className : 'datePicker',
    height: '100px',
    onChange : datePickerChangeHandler
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
          {/* <DatePicker
            dateFormat="yyyy.MM.dd" // 날짜 형태
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
            selected={selectedDate}
            className="datePicker"
            height={"100px"}
            onChange={datePickerChangeHandler}
            // onChange={(date) => setSelectedDate(date)}
          /> */}
          {/* <span id={`${props.id}Range`} className="dateRange">
            {date}
          </span> */}
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
        ref={calendarRef}
        height="100%"
        view="month"
        defaultView={props.options.defaultView}
        gridSelection={props.options.gridSelection}
        calendars={props.options.calendars}
        events={props.options.events}
        usageStatistics={false}
      />
    </>
  );
};

export default TuiCalender;
