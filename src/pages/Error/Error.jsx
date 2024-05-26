import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  navigate("/");
};
return (
  <div style={{ height: "100vh", display: "grid", placeContent: "center" }}>
    error
  </div>
);

export default Error;
