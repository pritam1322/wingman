'use client';
import { useState } from "react";

interface Message {
  text: string;
  isAI: boolean;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages([...messages, { text: input, isAI: false }]);
    setLoading(true);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      const aiResponse = data.content;

      // Add AI message to chat
      setMessages([
        ...messages,
        { text: input, isAI: false },
        { text: aiResponse, isAI: true },
      ]);
    } catch (error) {
      setMessages([
        ...messages,
        { text: "Error: Unable to get AI response", isAI: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white">
      <div className="overflow-y-auto max-h-80">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 my-2 rounded-lg ${
              msg.isAI ? "bg-gray-100 text-gray-800" : "btn text-white"
            }`}
          >
            <p className="">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-md bg-white"
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-[#115E56] text-white rounded-md disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
