import { MessageSquareText } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center p-16 bg-gray-50">
      <div className="max-w-md text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="size-20 rounded-2xl bg-blue-100 flex items-center justify-center animate-bounce shadow-lg">
              <MessageSquareText className="size-10 text-blue-500" />
            </div>
            <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-blue-500 animate-pulse" />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Welcome to SalamChat!
          </h2>
          <p className="text-gray-600 text-lg">
            Select a conversation from the sidebar to start chatting
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
