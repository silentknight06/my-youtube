import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utills/appSlice";
import { YOUTUBE_SEARCH_API } from "../utills/constants";
import { cacheResults } from "../utills/searchSlice";

const Head = () => {
  const [searchQuey, setSearchQuery] = useState("");
  const [Suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  // console.log(searchQuey);
 const searchCache = useSelector((store) =>store.search);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    //api calls
    const timer = setTimeout(() =>{
    
      /*
   searchCache = {
    "iphone" : ["iphone 11", "iphone 14"];
   }

      */
    if(searchCache[searchQuey]){
      setSuggestions(searchCache[searchQuey]);
    }else{
      getSearchSuggestion();
    }
    
  },200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuey]);

  //make a n api call after every press
  // if the diff bw two qpis si less then 2sec then skip
  // #About Debouncing
  // key stroke - i
  // - render the Component
  // - useEffect()
  // - start timer -> make api call after 200ms

  // key stroke - ip
  // - destroy the component (useEffect return method) effective if and only if p key is pressed before the 200ms timer expired or else it will try to destroy the timer which is already expired with an api call made
  // - re-render the component
  // - useEffect
  // - start timer -> make api call after 200ms

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuey);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update the action 
    dispatch(cacheResults({
      [searchQuey]:json[1],
    }));
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-16 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="hamberger"
        />
        <a href="/">
          <img
            className="h-16  mx-2"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="youtube"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuey}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e)=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
          />
          <button className="border border-gray-500 p-2 px-5 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className=" absolute bg-white py-2 px-5 w-[29rem] rounded-lg shadow-lg border border-gray-100">
            <ul>
              {Suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 cursor-pointer shadow-sm hover:bg-gray-100"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="usericon"
        />
      </div>
    </div>
  );
};

export default Head;
