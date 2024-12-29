import React,{useState} from 'react'

import image from "../../assets/images.jpeg";

const TogalButton = () => {
    const [togal, setTogal] = useState(false);

    const HandelFixtures = () => {
        setTogal(true);
      };
    
      const HandelResults = () => {
        setTogal(false);
      };
    
      const FixturesData = [
        {
          date: "28/12/2025",
          time: "13:20: 40",
          conductedBy: "Big Bash by me ",
          faver: "Mumbai Indians",
          picherFaver: image,
          appos: "Bangladesh national",
          picherAppos: image,
          title: "Match yet to begin",
          Oval: "Manuka Oval",
        },
    
        {
          date: "28/12/2025",
          time: "13:20: 40",
          conductedBy: "Big Bash by me ",
          faver: "Mumbai Indians",
          picherFaver: image,
          appos: "Bangladesh national",
          picherAppos: image,
          title: "Match yet to begin",
          Oval: "Manuka Oval",
        },
        {
          date: "28/12/2025",
          time: "13:20: 40",
          conductedBy: "Big Bash by me ",
          faver: "Mumbai Indians",
          picherFaver: image,
          appos: "Bangladesh national",
          picherAppos: image,
          title: "Match yet to begin",
          Oval: "Manuka Oval",
        },
      ];
    
      const ResultsData = [
        {
          conductedBy: "Big Bash by me",
          faver: "Mumbai Indians",
          picherFaver: image,
          faverRun: "150/9",
          appos: "Bangladesh national",
          picherAppos: image,
          apposRun: "146/4",
          win: "Mumbai Indians Scorchers won by 6 wickets (with 17 balls remaining)",
        },
    
        {
          conductedBy: "Big Bash by me",
          faver: "Mumbai Indians",
          picherFaver: image,
          faverRun: "150/9",
          appos: "Bangladesh national",
          picherAppos: image,
          apposRun: "146/4",
          win: "Mumbai Indians Scorchers won by 6 wickets (with 17 balls remaining)",
        },
        {
          conductedBy: "Big Bash by me",
          faver: "Mumbai Indians",
          picherFaver: image,
          faverRun: "150/9",
          appos: "Bangladesh national",
          picherAppos: image,
          apposRun: "146/4",
          win: "Mumbai Indians Scorchers won by 6 wickets (with 17 balls remaining)",
        },
      ];
    
      const HandelStyle = {
        backgroundColor: "rgb(90, 90, 192",
        transition: ".2s ease-in-out",
      };
  return (
    <div>
          <div className=" h-full w-full bg-blue-500  py-10 ">
          <strong className=" flex justify-center my-2">Play</strong>
          <p className=" flex justify-center my-2">
            Follow Glenn at the BBL and score awesome prizes!
          </p>
          {/* Buttan */}
          <div className="flex justify-center  my-5">
            <button
              className=" rounded-3xl px-10 py-2  text-white mx-5 font-bold"
              onClick={HandelFixtures}
              style={togal != false ? HandelStyle : null}
            >
              Fixtures
            </button>
            <button
              className="rounded-3xl px-10 py-2 text-white mx-5 font-bold"
              onClick={HandelResults}
              style={togal == false ? HandelStyle : null}
            >
              Results
            </button>
          </div>
          {/* Buttan data  */}
           <div className=" flex p-5  my-1   justify-center ">
            <div className="">
              {togal == true
                ? FixturesData.map((item) => (
                  // bg-neutral-900 
                    <div className=" flex  bg-red-700  text-center items-center  flex-col">
                      <div className="w-full   my-3  py-4  px-20 rounded-2xl   items-center text-center">
                        <strong className="flex   justify-center " key={item.appos}>
                          {item.date} , {item.time}
                        </strong>
                        <p className="flex   justify-center ">
                          {item.conductedBy}
                        </p>
                        <div className="flex justify-center font-bold">
                          {item.faver}{" "}
                          <img
                            src={item.picherFaver}
                            className="w-5 h-5 text-center mx-2 rounded-3xl"
                            alt=""
                          />{" "}
                          <strong className="text-yellow-400 mx-5">Vs</strong>{" "}
                          <img
                            src={item.picherAppos}
                            className="w-5 h-5 text-center mx-2 rounded-3xl"
                            alt=""
                          />{" "}
                          {item.appos}
                        </div>
                        <strong className="flex justify-center">
                          {item.title}
                        </strong>
                        <p className="flex justify-center">{item.Oval}</p>
                      </div>
                    </div>
                  ))
                : ResultsData.map((item) => (
                    <div
                      className="  text-center bg-red-400 p-10 w-full  items-center  "
                      style={{ width: "600px" }}
                    >
                      <div className="bg-neutral-900 w-full   my-3  py-4   rounded-2xl   items-center text-center">
                        <p className=" flex my-2 px-5 w-full ">
                          {item.conductedBy}
                        </p>
                        <div className=" font-bold">
                          <div
                            className="flex justify-between  px-5 my-2  w-full "
                            key={item.apposRun}
                          >
                            <div className="flex">
                              {" "}
                              <img
                                src={item.picherFaver}
                                className="w-5 h-5 text-center mx-2 rounded-3xl"
                                alt=""
                              />{" "}
                              {item.faver}{" "}
                            </div>{" "}
                            <strong>{item.faverRun}</strong>
                          </div>
                          <div className="flex justify-between px-5 my-2 w-full">
                            <div className="flex">
                              <img
                                src={item.picherAppos}
                                className="w-5 h-5 text-center mx-2 rounded-3xl"
                                alt=""
                              />{" "}
                              {item.appos}
                            </div>{" "}
                            <strong>{item.apposRun}</strong>
                          </div>
                        </div>

                        <p className="flex my-2  px-4">{item.win}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div> 
        </div>

      
    </div>
  )
}

export default TogalButton
