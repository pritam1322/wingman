'use client';
import ChatBox from "@/components/sections/ChatBox";


export default function ChatsPage() {
  return (
    <div className=" flex justify-center mt-16 ">
      <div className="w-full border p-8 rounded-xl max-w-lg">
        <h1 className="btn  btn-accent justify-center flex mx-auto max-w-xs">
          AI Chatbot
        </h1>
        <ChatBox />
      </div>
    </div>
  );
}
