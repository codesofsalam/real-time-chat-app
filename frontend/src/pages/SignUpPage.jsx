import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-base-100 to-base-200">
      <div className="flex flex-col justify-center items-center p-8 sm:p-16">
        <div className="w-full max-w-md space-y-8 backdrop-blur-xl bg-white/80 p-8 rounded-3xl shadow-xl">
          <div className="text-center">
            <div className="flex flex-col items-center gap-3">
              <div
                className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center 
                           hover:bg-primary/20 transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="size-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Create Account
              </h1>
              <p className="text-base-content/60 text-lg">
                Get started with your free account
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">
                    Full Name
                  </span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="size-5 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full pl-12 h-12 bg-white/50 
                             focus:bg-white transition-all duration-300 hover:shadow-md"
                    placeholder="Enter Your Full Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">
                    Email
                  </span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="size-5 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <input
                    type="email"
                    className="input input-bordered w-full pl-12 h-12 bg-white/50 
                             focus:bg-white transition-all duration-300 hover:shadow-md"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">
                    Password
                  </span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="size-5 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pl-12 h-12 bg-white/50 
                             focus:bg-white transition-all duration-300 hover:shadow-md"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5 text-base-content/40 hover:text-primary transition-colors" />
                    ) : (
                      <Eye className="size-5 text-base-content/40 hover:text-primary transition-colors" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full h-12 text-lg font-semibold 
                       hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60 text-base">
              Already have an account?{" "}
              <Link
                to="/login"
                className="link link-primary font-semibold 
                                         hover:text-secondary transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;
