import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed w-full top-0 z-40 backdrop-blur-lg bg-white/80 border-b border-gray-200 ">
      <div className="container mx-auto px-6 ">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-colors"
          >
            <div className="size-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <MessageSquare className="size-5 text-blue-600" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              SalamChat
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/settings"
              className="p-2 rounded-lg hover:bg-blue-50 transition-all inline-flex items-center gap-2"
            >
              <Settings className="size-5 text-blue-600" />
              <span className="hidden sm:inline font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Settings
              </span>
            </Link>

            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="p-2 rounded-lg hover:bg-blue-50 transition-all inline-flex items-center gap-2"
                >
                  <User className="size-5 text-blue-600" />
                  <span className="hidden sm:inline font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Profile
                  </span>
                </Link>

                <button
                  onClick={logout}
                  className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors inline-flex items-center gap-2"
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
