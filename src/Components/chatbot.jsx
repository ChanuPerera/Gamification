import React, { useState, useEffect ,  useRef} from "react";
import bot1 from '../Assets/Images/bot1.png';
import bot2 from '../Assets/Images/bot2.png';
import bot3 from '../Assets/Images/bot3.png';
import bot4 from '../Assets/Images/bot4.png';
import bot5 from '../Assets/Images/bot5.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { sendMessage } from "../services/service";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";


const ChatBot = () => {

    const chatMessengerRef = useRef(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messageText, setMessageText] = useState("");
    const [loadingBot,setLoadingBot] = useState(false)
    const [chatArr,setChatArr] = useState([{message:"How can I assist you?",bot:true}])
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const [botImageIndex, setBotImageIndex] = useState(0);
    const botImages = [bot1, bot2, bot3, bot4, bot5];

    const switchBotImage = () => {
        setBotImageIndex((prevIndex) => (prevIndex + 1) % botImages.length);
    };

    useEffect(() => {
        const interval = setInterval(switchBotImage, 2000);
        return () => clearInterval(interval);
    }, []);


    
    const handleDocumentTouch = (e) => {
        if (
          chatMessengerRef.current &&
          !chatMessengerRef.current.contains(e.target)
        ) {

          setIsChatOpen(false);
        }
      };


   useEffect(() => {
    if (isChatOpen) {
      document.body.addEventListener("touchstart", handleDocumentTouch);
    } else {
      document.body.removeEventListener("touchstart", handleDocumentTouch);
    }
    return () => {
      document.body.removeEventListener("touchstart", handleDocumentTouch);
    };
  }, [isChatOpen]);

  const sendMessgae=()=>{
        setChatArr([...chatArr,{message:messageText,bot:false}]);
        setLoadingBot(true);
        sendMessage(messageText).then(res => {
            if (res) {
                setLoadingBot(false);
            } 
        }).catch(err => {    
            toast.error(err.message);
            setLoadingBot(false);
        })
  }



    return (

        <div className="w-full h-screen">

            <div
                className={`chat-messenger ${isChatOpen ? "open" : "closed"
                    } sm:w-[300px] sm:h-[400px] p-3 bg-white fixed sm:bottom-[96px] sm:left-[50px]  rounded-md w-full h-[80vh] z-50 bottom-[60px] overflow-hidden flex flex-col `}
            >
                <div className="flex flex-row w-full justify-between space-x-2">
                    <div className="w-1/2 p-2 border-[#9747FF] rounded-md border-[1px] justify-center flex items-center cursor-pointer">
                        <span className="text-[12px] sm:text-[0.7rem] text-[#9747FF] font-semibold">Chat with Friends</span>
                    </div>
                    <div className="w-1/2 p-2 bg-[#9747FF] border-[#9747FF] rounded-md border-[1px] justify-center flex items-center cursor-pointer">
                        <span className="text-[12px] sm:text-[0.7rem] text-white font-semibold">Chat with Bot</span>
                    </div>
                </div>

                <div className="message-container flex flex-col relative w-full overflow-y-scroll sm:h-[340px] h-[60vh]" id="style7">
                    <div className="sernder-message p-3 bg-[#5C3BB9]  mt-3 rounded-tl-md rounded-tr-md rounded-bl-md shadow-md shadow-gray-300">
                        <p className="text-white sm:text-[0.8rem] text-[12px]">hellow</p>
                    </div>
                    {chatArr.map((chat, index) => {
                        return (
                            <div className={`sernder-message p-3 ${chat.bot?"bg-white":"bg-[#D6CBFC]"}  mt-3 rounded-tl-md rounded-tr-md rounded-br-md shadow-md shadow-gray-300 border-gray-300 border-[1px] border-opacity-30`}>
                                <p key={index} className="text-gray-900 sm:text-[0.8rem] text-[12px]">{chat.message}</p>
                            </div>
                        )
                    })}
                    {loadingBot && <div className="w-full justify-center flex items-center">
                        <CircularProgress size={20} />
                    </div>}
                    
                </div>
                <div className="w-full sm:h-[80px] bg-white  border-collapse border-gray-300 border-opacity-60 border-t-[1px] justify-center flex items-center">
                    <div className="text-[12px] sm:text-[0.8rem] bg-[#5C3BB9] w-full bg-opacity-25 h-[44px] justify-between items-center flex flex-row">
                        <input type="text" placeholder="Type here.." value={messageText} onChange={(e)=>setMessageText(e.target.value)} className="p-2 h-full w-full bg-transparent text-gray-800" />
                        <div className="w-1/3 justify-end items-center flex space-x-3 p-2">
                            <button className="p-2 bg-[#5C3BB9] text-white flex justify-center sm:w-[24px] sm:h-[24px] rounded-sm items-center">
                                <FontAwesomeIcon icon={faMicrophoneLines} />
                            </button>
                            <button className="p-2 bg-[#5C3BB9] text-white flex justify-center sm:w-[24px] sm:h-[24px] rounded-sm items-center"
                                onClick={()=>sendMessgae()}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className={`bot-icon ${isChatOpen ? "open" : "closed"
                    } fixed z-50 `}
            >
                <img
                    src={botImages[botImageIndex]}
                    alt=""
                    className=" cursor-pointer"
                    onClick={toggleChat}
                />
            </div>
        </div>

    );
}

export default ChatBot;