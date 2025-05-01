import React from "react";
import DatePicker from "react-datepicker";

const ReactDatepicker = (props) => {
  return (
    <>
      <DatePicker
        dateFormat={props.options.dateFormat} // 날짜 형태
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        minDate={props.options.minDate} // minDate 이전 날짜 선택 불가
        selected={props.options.selected} 
        className={props.options.className} 
        height={props.options.height} 
        onChange={props.options.onChange} 
      />
    </>
  );
};

export default ReactDatepicker;
