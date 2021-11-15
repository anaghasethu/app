import * as React from "react";
import { Link } from "react-router-dom";
import "../../components/../styles/Nextbutton.css";

const Btn = (props) => {
  return (
    <div className="d-flex justify-content-end">
      <div className="ms-5 me-5 mt-4">
        <div className="d-flex justify-content-end ">
          <button className="next" type="submit">
            <Link
              to={props.information}
              style={{ color: "#FFF" }}
              className="btn mx-4 text-align-center link"
            >
              Next
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Btn;
