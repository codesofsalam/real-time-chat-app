import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Calendar, Shield } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 pt-12 pb-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-xl p-8 space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Your Profile
            </h1>
            <p className="text-base-content/60 text-lg">Manage your personal information</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-40 rounded-full object-cover border-4 border-primary/20 shadow-xl"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0
                  bg-primary hover:bg-primary/90 
                  size-12 rounded-full cursor-pointer
                  flex items-center justify-center
                  shadow-lg transform hover:scale-110
                  transition-all duration-300
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="size-6 text-primary-content" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-base text-base-content/60">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <div className="text-base font-medium text-base-content/70 flex items-center gap-2">
                <User className="size-5" />
                Full Name
              </div>
              <div className="px-6 py-4 bg-base-200/50 rounded-xl border border-base-300 font-medium">
                {authUser?.fullName}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-base font-medium text-base-content/70 flex items-center gap-2">
                <Mail className="size-5" />
                Email Address
              </div>
              <div className="px-6 py-4 bg-base-200/50 rounded-xl border border-base-300 font-medium">
                {authUser?.email}
              </div>
            </div>
          </div>

          <div className="bg-base-200/50 rounded-2xl p-6 border border-base-300">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Shield className="size-5 text-primary" />
              Account Information
            </h2>
            <div className="space-y-4 text-base">
              <div className="flex items-center justify-between py-3 border-b border-base-300">
                <div className="flex items-center gap-2 text-base-content/70">
                  <Calendar className="size-4" />
                  Member Since
                </div>
                <span className="font-medium">{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-base-content/70">Account Status</span>
                <span className="px-4 py-1 bg-success/20 text-success rounded-full font-medium">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;