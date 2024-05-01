import React, { useEffect, useState } from "react";
import "../styles/notes.scss";
import { Link, useParams } from "react-router-dom";
const Notes = () => {
  const params = useParams();
  const { id } = params;
  const [subjectData, setSubjectData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/assets/data.json`);
        const data = await response.json();
        setSubjectData(data.Btech[id]);
        console.log(data.Btech[id]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (subjectData === null) {
    // Check if subjectData is null
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="p-10 mt-20 text-white" class="main_div">
        <div className="font-semibold" id="Heading_Notes">Notes</div>
        
        {/* <span className="font-bold content-center" id = "Heading_Notes">Bachelor OF Technology</span> */}
        
        <div className="flex flex-row justify-between">
          <div className="text-xl font-semibold bg-opacity-10 w-4/5 md:w-1/3 m-6 rounded-3xl">
            <div className="p-1 mb-3 mt-28 md:mt-20 py-10">
              <h1 id="notes_subject_name">
                {subjectData.Subject}
              </h1>
              <div className="flex justify-between flex-col  md:flex-row ">
                <div className="flex flex-col md:flex-row md:w-2/4 my-11 py-6">
                  <div className="m-2 md:w-3/4 ">
                    <div className="w-full">



                      
                        <div class="Notes_unit">
                          {Object.keys(subjectData.Notes).map((unit, index) => (
                            <div key={index} className="flex flex-col md:w-2/3 ">
                              
                              <div>
                                <p className="text-2xl my-3 font-bold" id="notes_unit_heading" >{`${
                                  Object.keys(subjectData.Notes).length === 1
                                    ? "All Units"
                                    : `Unit ${index + 1}`
                                }`}</p>
                              </div>
                            
                              <div className="flex  items-center justify-center ">
                                {Object.keys(subjectData.Notes[unit]).map(
                                  (noteKey, noteIndex) => (
                                    <Link
                                      to={subjectData.Notes[unit][noteKey]}
                                      key={noteIndex}
                                    >
                                      <div>
                                        <div className="notes-link">
                                          <p className="text-4xl  font-semibold" id = "notes_unit_link">{`Notes ${
                                            index + 1
                                          }`}</p>{" "}
                                        </div>
                                      </div>
                                    </Link>
                                  ),
                                )}
                              </div>
                              <hr className="border-b border-white h-[2vh]" /><div className="h-[2vh]"></div>
                            </div>
          
                          ))}
                        </div>


                      
                         <div class="Notes_unit">
                      
                          {subjectData["Must do"] && (
                            <div id="must-do">
                              <div className="flex flex-col  ">
                                <div>
                                  <p className="text-2xl my-3 font-bold" id="must_do_heading">Must Do</p>
                                </div>
                                <div className="flex content-center items-center justify-center ">
                                  <Link to={subjectData["Must do"].pdf}>
                                    <div className="notes-link">
                                      <p className="text-xl font-semibold " id="must_do_link">
                                        Must Do
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}



                      <div class="Notes_unit">  
                        
                          {subjectData["Mid-Sem"] && (
                            <div id="must-do">
                              <div className="flex flex-col  ">
                                <div>
                                  <p className="text-2xl my-3 font-bold" id="Notes_MidSem_heading">Mid-Sem</p>
                                </div>
                                <div className="flex content-center items-center justify-center ">
                                  <Link to={subjectData["Mid-Sem"].pdf}>
                                    <div className="notes-link">
                                      <p className="text-6xl font-semibold" id="Notes_MidSem_linking">
                                        Mid-Sem
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                    
                              {subjectData["Viva"] && (
                                <div id="must-do">
                                  <div className="flex flex-col  ">
                                    <div>
                                      <p className="text-2xl my-3 font-bold" id="Notes_MidSem_heading">Viva</p>
                                    </div>
                                    <div className="flex content-center items-center justify-center ">
                                      <Link to={subjectData["Viva"].notes1}>
                                        <div className="notes-link">
                                          <p className="text-xl font-semibold" id="Notes_MidSem_linking">Viva</p>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div id="pyq">
                                <div className="flex flex-col md:w-2/3 ">
                                  <div>
                                    <p className="text-2xl my-3 font-bold" id="Notes_MidSem_heading">PYQ</p>
                                  </div>
                                  <div className="flex content-center items-center justify-center ">
                                    <Link to={subjectData.Aakash}>
                                      <div>
                                        <div className="notes-link">
                                          <p className="text-xl font-semibold" id="Notes_MidSem_linking">
                                            Last Year Previous
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="style-1"
                          className="md:w-2/6 overflow-auto slabh p-5 mx-4 rounded-2xl bg-yellow-400  text-white font-semibold bg-opacity-25"
                        >
                      </div>
      
                  
                  <h2 className="justify-center flex text-3xl" id="syllabus">Syllabus</h2>
                  {Object.keys(subjectData.syllabus).map((unit, index) => (
                    <div key={index}>
                      <p className="text-2xl my-3 font-bold" id="notes_subject_name">{`Units ${
                        index + 1
                      }`}</p>
                      <p id="notes_unit_syllabus">{subjectData.syllabus[unit]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="White_Creative_Doodle_Brainstormin.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
