import "./card.css";
import "reactjs-popup/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import { ToggleModal, ModalData } from "../../Redux/ReducerSlice";
import { useNavigate, Link } from "react-router-dom";

function Card(props) {
  // console.log("Props =>", props);
  const { description, yesValue, noValue, expiryDate, name, expiryTime } =
    props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ToDetail = () => {
    navigate("./detail", {
      state: {
        description,
        yesValue,
        noValue,
        expiryDate,
        name,
        expiryTime,
      },
    });
  };

  return (
    <div
      className="Container"
      onClick={() => {
        // dispatch(ModalData(props));
        // dispatch(ToggleModal(true));
        // console.log("Props => ", props);
        ToDetail();
      }}
    >
      {/* <div className="hashtagContainer">
        <p className="hashtag">#Startup</p>
        <p className="hashtag">#Startup</p>
        <p className="hashtag">#Startup</p>
        <p className="hashtag">#Startup</p>
      </div> */}
      <div className="QueContainer">
        <p className="Ques">{name}</p>
      </div>
      <div>
        <p className="YesText"> Rs. {yesValue} </p>
        <div
          className="YesFullDiv"
          onClick={() => {
            // dispatch(ModalData(props));
            // dispatch(ToggleModal(true));
          }}
        >
          <div className="YesActualWidth" style={{ width: yesValue + "%" }}>
            <p className="YesText">Yes</p>
          </div>
        </div>
        <p className="NoText"> Rs. {noValue} </p>
        <div
          className="NoFullDiv"
          onClick={() => {
            // dispatch(ToggleModal(true));
          }}
        >
          <div className="NoActualWidth" style={{ width: noValue + "%" }}>
            <p className="NoText">No</p>
          </div>
        </div>
      </div>

      <hr />
      <p style={{ fontSize: 14, marginTop: 5 }}>{description}</p>
    </div>
  );
}
export default Card;
