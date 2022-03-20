import PortfolioData from "../../Portfolio.json";
import "./Portfolio.css";
import Header from "../header/Header";
import { useState } from "react";

function Portfolio() {
  const MatchedOrder = PortfolioData.matched;
  const PendingOrder = PortfolioData.pending;

  return (
    <div>
      <Header />
      <div
        className="Container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 16 }}> Rs. </p>
        <p style={{ fontSize: 26, fontWeight: "bold" }}> {" 250 "} </p>
      </div>
      <br />
      <p style={{ fontWeight: "bold", textAlign: "center" }}>Pending Order</p>

      {PendingOrder.map((data) => {
        return (
          <div
            className="Container"
            style={{
              borderLeft: "10px Solid yellow",
            }}
            key={data._id}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 18, fontWeight: 500 }}>
                {data.questionName}
              </p>
              <p
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: data.customerResponse === "yes" ? "blue" : "red",
                }}
              >
                {data.customerResponse}
              </p>
            </div>
            <br />
            <hr />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Qty {data.orderQuantity}
              </p>
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Price {data.orderPrice}
              </p>
            </div>
          </div>
        );
      })}
      <p style={{ fontWeight: "bold", textAlign: "center" }}>Matched Order</p>

      {MatchedOrder.map((data) => {
        return (
          <div
            className="Container"
            style={{
              borderLeft: "10px Solid Green",
            }}
            key={data._id}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 18, fontWeight: 500 }}>
                {data.questionName}
              </p>
              <p
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: data.orderResponse === "yes" ? "blue" : "red",
                }}
              >
                {data.orderResponse}
              </p>
            </div>
            <br />
            <hr />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Qty {data.orderQuantity}
              </p>
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Price {data.orderPrice}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
