'use client';
import ChatBox from "@/components/sections/ChatBox";


export default function ChatsPage() {
  return (
    <div className=" flex justify-center mt-16 ">
      <div className="w-full border p-8 rounded-xl max-w-lg">
        <h1 className="btn  btn-accent justify-center flex mx-auto max-w-xs text-lg font-inter text-white">
          AI Chatbot
        </h1>
        <h3 className="text-center text-sm">Ask all your queries to our new chatbot<br/> will help you in each case.</h3>
        <ChatBox />
      </div>
    </div>
  );
}
