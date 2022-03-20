import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/card/card";
import Detail from "./components/CardDetail/Detail";
import Modal from "./components/popup/Modal";
import Slider from "./components/Slider/Slider";
import Portfolio from "./components/Portfolio/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/Header";

function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [fetchData, setFetcData] = useState([]);

  const FetchQues = async () => {
    const GetQues = await axios.get("http://localhost:5000/admin/qsn");
    if (GetQues.status === 200) {
      console.log("GetQues", GetQues.data);
      setFetcData(GetQues.data);
    }
  };

  useEffect(() => {
    FetchQues();
    return () => {
      FetchQues();
    };
  }, []);

  console.log("FetchData =>", fetchData);

  return (
    <div className="App">
      <Header />
      {/* <Detail /> */}

      <Slider />
      {fetchData.map((res, i) => {
        return (
          <div key={i}>
            <Card
              description={res.description}
              yesValue={res.yesValue * 10}
              noValue={res.noValue * 10}
              expiryDate={res.expiryDate}
              expiryTime={res.expiryTime}
              name={res.name}
            />
          </div>
        );
      })}
      <Modal />
      {/* <Portfolio /> */}
    </div>
  );
}

export default Home;
