import { HiArrowLeft } from "react-icons/hi";

function Header() {
  return (
    <div
      style={{
        margin: "20px 0px",
        display: "flex",
        // border: "1px solid black",
        justifyContent: "center",
      }}
    >
      {/* <HiArrowLeft size={30} style={{ marginLeft: 10 }} /> */}
      <p style={{ fontSize: 24, fontWeight: "700" }}>Quess</p>
    </div>
  );
}
export default Header;
