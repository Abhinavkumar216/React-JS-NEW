import { useEffect, useState } from "react";
import "./Detail.css";
import { useLocation } from "react-router-dom";
import Modal from "../popup/Modal";
import { useDispatch } from "react-redux";
import { YesModel, NoModel } from "../../Redux/ReducerSlice";
import Header from "../header/Header";

function Detail() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { description, yesValue, noValue, expiryDate, name, expiryTime } =
    location.state;

  return (
    <div style={{ margin: 0 }}>
      <Header />
      <div className="Container">
        <div style={{ marginBottom: 20, marginTop: 10 }}>
          <p style={{ fontSize: 21, fontWeight: 600 }}>{description}</p>
        </div>

        <div>
          <p className="YesText">Rs. {yesValue} </p>
          <div
            className="YesFullDiv"
            onClick={() => console.log("You Clicked Yes Button")}
          >
            <div className="YesActualWidth" style={{ width: yesValue + "%" }}>
              <p className="YesText">Yes</p>
            </div>
          </div>
          <p
            className="NoText"
            onClick={() => console.log("You Clicked No Button")}
          >
            Rs. {noValue}
          </p>
          <div className="NoFullDiv">
            <div className="NoActualWidth" style={{ width: noValue + "%" }}>
              <p className="NoText">No</p>
            </div>
          </div>
        </div>
        <div className="ProgressbarWrap">
          <div
            className="yesBar"
            onClick={() => {
              dispatch(YesModel(yesValue));
            }}
          >
            Yes
          </div>
          <div
            className="noBar"
            onClick={() => {
              dispatch(NoModel(noValue));
            }}
          >
            No
          </div>
        </div>
      </div>
      <div
        className="Container"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <p style={{ fontSize: 16, fontWeight: "bold" }}>
          Price : {yesValue} / {noValue}
        </p>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>Volume : Null </p>
      </div>
      <div className="Container">
        <p style={{ fontSize: 14, fontWeight: "bold" }}>Validation</p>
        <p style={{ paddingTop: 5 }}>
          If the weekly unemployment rate in india remains 7.40% or more by 13
          March 2022 the market resolves to yes else the market resolve to no
        </p>
      </div>
      <div className="Container">
        <p style={{ fontSize: 14, fontWeight: "bold" }}>Start Date & Time</p>
        <p style={{ paddingTop: 5 }}>{"Start Date"}</p>
      </div>
      <div className="Container">
        <p style={{ fontSize: 14, fontWeight: "bold" }}>End Date & Time</p>
        <p style={{ paddingTop: 5 }}>{`${expiryDate}  ${expiryTime}`}</p>
      </div>
      <div className="Container">
        <p style={{ fontSize: 14, fontWeight: "bold" }}>Settelment Date</p>
        <p style={{ paddingTop: 5 }}>{`${expiryDate}  ${expiryTime}`} </p>
      </div>
      <div className="Container">
        <p style={{ fontSize: 14, fontWeight: "bold" }}>Source of truth</p>
        <p style={{ paddingTop: 5 }}>{"Source of Truth"}</p>
      </div>
      <Modal />
    </div>
  );
}
export default Detail;
