import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200/50 to-base-100">
      <div className="container mx-auto px-4 pt-20 max-w-4xl">
        <div className="bg-base-100 rounded-2xl shadow-xl p-8">
          <div className="space-y-2 mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Appearance Settings
            </h1>
            <p className="text-base-content/70">
              Personalize your chat experience with these theme options
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                Choose Theme
              </h2>
              <p className="text-sm text-base-content/70">
                Select a theme that matches your style
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {THEMES.map((t) => (
                <button
                  key={t}
                  className={`
                    group relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all
                    hover:scale-105 duration-200 ease-out
                    ${
                      theme === t
                        ? "bg-primary/10 ring-2 ring-primary ring-offset-2"
                        : "hover:bg-base-200 border border-base-300"
                    }
                  `}
                  onClick={() => setTheme(t)}
                >
                  <div
                    className="h-12 w-full rounded-lg overflow-hidden shadow-sm"
                    data-theme={t}
                  >
                    <div className="h-full grid grid-cols-4 gap-px p-1.5">
                      <div className="rounded-md bg-primary"></div>
                      <div className="rounded-md bg-secondary"></div>
                      <div className="rounded-md bg-accent"></div>
                      <div className="rounded-md bg-neutral"></div>
                    </div>
                  </div>

                  <span
                    className={`
                    text-sm font-medium truncate w-full text-center
                    ${theme === t ? "text-primary" : "text-base-content"}
                  `}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>

                  {theme === t && (
                    <div className="absolute -top-1 -right-1 size-4 bg-primary text-primary-content rounded-full flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
