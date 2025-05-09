import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./ReactTabs.css";

const ReactTabs = (props) => {
  return (
    <>
      <Tabs
        defaultActiveKey={props.options.defaultActiveKey}
        id={props.options.id}
        className={props.options.className}
      >
        {props.options.tabList.map((x) => (
          <Tab
            key={x.eventKey}
            eventKey={x.eventKey}
            title={x.title}
            disabled={x.disabled}
          >
            {x.children}
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default ReactTabs;
