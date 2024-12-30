import { MessageSquare } from "lucide-react";

const AuthImagePattern = ({ subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-base-100 to-base-200 p-12">
      <div className="max-w-md text-center space-y-8">
        <div className="flex flex-col items-center gap-3">
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 transform hover:scale-105">
            <MessageSquare className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            SalamChat!
          </h2>
          <p className="text-base-content/60 text-lg">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
