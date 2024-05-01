import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../styles/courses.scss";
import PaymentQr from "../public/paymentqr.png";

const Courses = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getdata = () => {
    fetch("../public/data.json", {
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

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other placeholder content
  }

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
              }
            )}
          >
            <Link to={`/notes/${id}`} passHref>
              {subjects[id].Subject}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
