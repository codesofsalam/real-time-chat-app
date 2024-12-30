import { MessageSquareText } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center p-16 bg-gray-50">
      <div className="max-w-md text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="size-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 bg-primary-100 flex items-center justify-center animate-bounce ">
              <MessageSquareText className="size-10 text-primary" />
            </div>

            <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-blue-500 animate-pulse" />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-primary">
            Welcome to SalamChat!
          </h2>
          <p className="text-gray-700 text-lg">
            Select a conversation from the sidebar to start chatting
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
