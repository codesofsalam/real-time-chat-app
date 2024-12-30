// LoginPage.jsx
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 p-12">
        <div className="w-full max-w-lg mx-auto flex flex-col justify-center">
          <div className="relative">
            <div className="absolute -left-6 -top-6 size-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute right-8 bottom-8 size-32 bg-secondary/10 rounded-full blur-2xl" />
            <div className="relative bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
              <AuthImagePattern subtitle="Sign in to continue your conversations and catch up with your messages." />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-4">
                <MessageSquare className="size-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-primary">Welcome Back</h1>
              <p className="text-base-content/60 mt-2">
                Sign in to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                    <input
                      type="email"
                      className="input input-bordered w-full pl-10 bg-white/50 focus:bg-white"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input input-bordered w-full pl-10 bg-white/50 focus:bg-white"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-5 text-base-content/40" />
                      ) : (
                        <Eye className="size-5 text-base-content/40" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full hover:scale-[1.02] transition-transform"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-base-content/60">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
