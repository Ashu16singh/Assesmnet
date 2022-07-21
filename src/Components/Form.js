
import "./Form.css";
import React, { useState } from "react";
import axios from "axios";

const Form = () => {
    
    const [user, setUser] = useState({
      fname: "",
      lname: "",
      email: "",
      contact: ""
    });
    const { fname ,lname,email,contact  } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    } 

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        window.alert("Success");
          setUser({});
         
    }
  return (
    <>
      <div className="container">
            <div className="card">
              <div className="card-head">
                <h3 className="p-3" style={{backgroundColor:"#CEE5D0"}}>Form</h3>
              </div>
              <hr className="border"/>
              <div className="card-body">
                <form type="submit" onSubmit={(e) => onSubmit(e)}>
                  <div>
                    <label className="form-label">FIRST NAME</label>
                    <input
                      className="form-control"
                      name="fname"
                      type="text"
                      value={fname}
                      onChange={(e) => onInputChange(e)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label className="form-label">LAST NAME</label>
                    <input
                      className="form-control"
                      name="lname"
                      type="text"
                      value={lname}
                      onChange={(e) => onInputChange(e)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label className="form-label">EMAIL</label>
                    <input
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="my-input">CONTACT</label>
                    <input className="form-control" type="text"  name="contact" value={contact}
                      onChange={(e) => onInputChange(e)} >
              
                  </input>
            
                  </div>
                
                  <hr />
                  <div className="d-flex justify-content-end">
                    <button className="cnf-btn btn-light" onClick={e => onSubmit(e)} type="submit">
                      CONFIRM
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

    </>
  
)};

export default Form