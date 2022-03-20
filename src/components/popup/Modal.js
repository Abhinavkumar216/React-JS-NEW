import React, { useState } from "react";
import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
import { ToggleModal } from "../../Redux/ReducerSlice";
import { useLocation } from "react-router-dom";

export default function Modal() {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.counter.ShowModal);
  const price = useSelector((state) => state.counter.ModalData.Price);
  const trade = useSelector((state) => state.counter.ModalData.Trade);

  const ToggleModalFn = () => {
    dispatch(ToggleModal(false));
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={ToggleModalFn} className="overlay"></div>
          <div className="modal-content">
            <div
              className="topDiv"
              style={{
                backgroundColor: trade === "YES" ? "#4184f3" : "#ff5722",
              }}
            >
              <p
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: "500",
                  marginBottom: 10,
                }}
              >
                Will 3 or more startup gain unicornWill 3 or more startup gain
                unicornWill 3 or more startup gain unicorn status today ?
              </p>
              {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <input
                    type="radio"
                    value="Yes"
                    name="Yes"
                    checked={trade === "YES"}
                    onClick={() => setTrade("YES")}
                    onChange={() => {}}
                  />
                  Yes
                </div>
                <div>
                  <input
                    type="radio"
                    value="No"
                    name="No"
                    checked={trade === "NO"}
                    onClick={() => setTrade("NO")}
                    onChange={() => {}}
                  />
                  No
                </div>
              </div> */}
            </div>
            <br></br>
            <div className="BottomDiv">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // border: "1px solid black",
                }}
              >
                <input
                  type="text"
                  name="Quantity"
                  className="QuantityInput"
                  placeholder="Quantity"
                  onChange={(e) => e.target.value}
                />
                <br></br>
                <input
                  type="text"
                  name="Price"
                  value={price}
                  className="PriceInput"
                  placeholder="Price"
                  onChange={(e) => e.target.value}
                />
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  className="SubmitBtn"
                  style={{
                    backgroundColor: trade === "Yes" ? "#4184f3" : "#ff5722",
                  }}
                  onClick={() => {
                    alert("Thank You");
                    dispatch(ToggleModal(false));
                  }}
                >
                  <p style={{ fontSize: 16, color: "#fff" }}>Submit</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
