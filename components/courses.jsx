import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../styles/courses.scss";
import PaymentQr from "../public/paymentqr.png";
const Courses = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getdata = () => {
    fetch("/assets/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSubjects(data.Btech);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error as well
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div>
        {Object.keys(subjects).map((id, index, array) => (
          <div
            key={id}
            className={classNames(
              "py-5 justify-center items-center flex text-white bg-white bg-opacity-40 border-b transition-transform hover:scale-110 hover:z-10",
              {
                "rounded-t-2xl": index === 0,
                "rounded-b-2xl": index === array.length - 1,
                "rounded-none": index !== 0 && index !== array.length - 1,
              },
            )}
          >
            <Link to={`/notes/${id}`} passHref>
              {subjects[id].Subject}
            </Link>
          </div>
        ))}
      </div>


      
      
      {/* <div class="parent-container">
        <div class="container">
          <div class="left-side">
            <div class="card">
              <div class="card-line"></div>
              <div class="buttons"></div>
            </div>
            <div class="post">
              <div class="post-line"></div>
              <div class="screen">
                <div class="dollar">₹</div>
              </div>
              <div class="numbers"></div>
              <div class="numbers-line2"></div>
            </div>
          </div>

          <div class="right-side">
            <div class="new">Pay Here</div>

            <svg
              viewBox="0 0 451.846 451.847"
              height="512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              class="arrow"
            >
              <path
                fill="#cfcfcf"
                data-old_color="#000000"
                class="active-path"
                data-original="#000000"
                d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
              ></path>
            </svg>
          </div>
          <img src={PaymentQr} />
        </div>
        {/* <div class = "batch">
       <h1>Batch 1</h1>
      {/* </div> */}



      
    </>
  );
};

export default Courses;
