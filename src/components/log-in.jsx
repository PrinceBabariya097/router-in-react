import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Login() {
  const handelSubmit = () => {
    alert("your data is submited");
  };
  return (
    <div
      className="h-screen w-full flex"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="text-orange-500 h-fit">
        <NavLink to={"/"}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="ml-16 mt-16 size-7 border-solid border-2  rounded-full border-orange-500 "
          />
        </NavLink>
      </div>
      <div className="flex  justify-center  w-full items-center h-auto">
        <form onSubmit={handelSubmit}>
          <div className="bg-black/30 text-orange-500 rounded-xl h-44 w-96 flex flex-col justify-center items-center backdrop-blur-sm">
            <div>
              <label htmlFor="id">Enter your id : </label>
              <input type="text" className="h-8 w-auto rounded-lg" id="id" />
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="password">Enter your password : </label>
              <input
                type="text"
                className="h-8 w-auto rounded-lg"
                id="password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-slate-600 p-2 mt-5 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
