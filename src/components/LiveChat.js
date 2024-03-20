import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utills/ChatSlice";
import { generateRandomName, makeRandomMessage } from "../utills/Helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[400px] ml-2 p-2 border overflow-y-scroll border-black bg-slate-100 rounded-lg  flex flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form className="w-full p-2  ml-2 border border-black" 
      onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
              name:"Deepak Roy",
              message:LiveMessage,
            }));
            setLiveMessage("");
      }}
      >
        <input
          className="w-80 px-2"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100"> Send </button>
      </form>
    </>
  );
};

export default LiveChat;
