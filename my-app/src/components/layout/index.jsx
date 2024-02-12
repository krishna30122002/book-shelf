import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState([]);

  const singleSelect = (_id) => {
    setSelected(_id === selected ? null : _id);
  };

  const handleMultipleSelect = (_id) => {
    let copy = [...multipleSelect];
    const findIdx = copy.indexOf(_id);
    if (findIdx === -1) {
      copy.push(_id);
    } else {
      copy.splice(findIdx, 1);
    }
    setMultipleSelect(copy);
  };
  return (
    <>
      <div className="wrapper">
        <h2 className="heading">BOOK-SHELF</h2>
        <button
          className="btn"
          onClick={() => setEnableMultiSelect(!enableMultiSelect)}
        >
          Enable Multi Selection
        </button>
        <div className="cards">
          {data && data.length ? (
            data.map((item) => (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    enableMultiSelect
                      ? () => handleMultipleSelect(item.id)
                      : () => singleSelect(item.id)
                  }
                >
                  <h3>{item.title}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelect
                  ? multipleSelect.indexOf(item.id) !== -1 && (
                      <div className="content">
                        {item.summary.substring(0, 90).concat("...")}
                      </div>
                    )
                  : selected === item.id && (
                      <div className="content">
                        {item.summary.substring(0, 90).concat("...")}
                      </div>
                    )}
              </div>
            ))
          ) : (
            <div>No Data Found!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
