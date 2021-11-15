import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "./../Common/Flex";
import { useNavigate } from "react-router-dom";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("details");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const PersonalDetails = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();

    let details = {
      ...getDatafromLS(),
      gender: gender,
    };

    localStorage.setItem("details", JSON.stringify(details));

    navigate("/");
  };

  const title = "Gender and Date of Birth";
  const steps = " 2 ";

  return (
    <div className="row">
      <div className="col-md-9">
        <div className="ms-5 me-5 mt-3">
          <div className="mt-3">
            <ProgressBar
              completed="40"
              bgColor="black"
              height="14px"
              labelColor="black"
            />
          </div>

          <br />
          <Flex title={title} steps={steps} />

          <div className="one p-3 mb-5 bg-white">
            <div className="d-flex justify-content-center py-5">
              <form
                autoComplete="off"
                className="form-group"
                onSubmit={handleAddBookSubmit}
              >
                <input
                  type="text"
                  placeholder="gender"
                  className="form-control"
                  required
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                ></input>
                <br></br>
                <div className="d-flex justify-content-end">
                  <div className="d-flex justify-content-end">
                    <div className="ms-5 me-5 mt-4">
                      <div className="d-flex justify-content-end ">
                        <button className="next" type="submit">
                          <span
                            style={{ color: "#FFF" }}
                            className="btn mx-4 text-align-center link"
                          >
                            Next
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
