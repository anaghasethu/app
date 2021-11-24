import { DefaultHandler } from "htmlparser2";
import * as React from "react";

import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Flex from "./../Common/Flex";
import Btn from "./../Common/Btn";

//import '../components/css/View.css';

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
  // main array of objects state || books state || books array of objects
  const [details, setdetails] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setMail] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let details = {
      name,
      gender,
      dob,
      //   email,
      //   phone,
    };
    setdetails([details]);
    setName(details.name);
    setGender("");
    setDob("");
    // setMail("");
    // setPhone("");
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  });

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

                {/* <input type="email" placeholder="email" className='form-control' required onChange={(e)=>setMail(e.target.value)} value={email}></input>
            <br></br>
            
            <input type="tel" placeholder="phone" className='form-control' required onChange={(e)=>setPhone(e.target.value)} value={phone}></input>
            <br></br>
           <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>  */}
                <div className="d-flex justify-content-end">
                  <Btn information="/genderpage" />
                  {/* <button className="btn btn-dark mx-5 px-5 my-3" type="submit">
                  <label>Next</label>
                </button> */}
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
