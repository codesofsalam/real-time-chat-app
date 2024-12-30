import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-indigo-100 flex flex-col bg-gradient-to-b from-white to-indigo-50/30 transition-all duration-200">
      <div className="border-b border-indigo-100 w-full p-5 backdrop-blur-sm bg-white/50">
        <div className="flex items-center gap-2">
          <Users className="size-6 text-indigo-600" />
          <span className="hidden lg:block font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Contacts
          </span>
        </div>
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2 hover:bg-indigo-100/50 p-2 rounded-lg transition-colors">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm text-indigo-700">Show online only</span>
          </label>
          <span className="text-xs text-indigo-500">
            ({onlineUsers.length - 1} online)
          </span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3 space-y-2 px-2">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3 rounded-xl
              hover:bg-white/80 hover:shadow-lg hover:shadow-indigo-100 transition-all
              ${
                selectedUser?._id === user._id
                  ? "bg-white shadow-lg shadow-indigo-100 ring-1 ring-indigo-100"
                  : "bg-white/50"
              }
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full ring-2 ring-indigo-100 shadow-md"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-emerald-500 
                  rounded-full ring-2 ring-white shadow-sm"
                />
              )}
            </div>

            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate text-indigo-950">
                {user.fullName}
              </div>
              <div className="text-sm text-indigo-600">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-indigo-500 py-4 bg-white/50 rounded-xl">
            No online users
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
