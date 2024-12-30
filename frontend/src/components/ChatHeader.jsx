import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="px-6 py-4 border-b bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="size-12 rounded-full ring-2 ring-blue-600 overflow-hidden">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
                className="object-cover w-full h-full"
              />
            </div>
            {isOnline && (
              <div className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 ring-2 ring-white" />
            )}
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">{selectedUser.fullName}</h3>
            <p className={`text-sm ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>

        <button 
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="size-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;