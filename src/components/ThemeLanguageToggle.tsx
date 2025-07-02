
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeLanguageToggle = () => {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="glass-button p-2 rounded-xl hover:scale-110 transition-all duration-300 group"
        title={language === 'it' ? 'Switch to English' : 'Cambia in Italiano'}
      >
        <Globe size={16} className="text-white group-hover:text-blue-400 transition-colors" />
        <span className="ml-1 text-xs font-medium text-white/80">
          {language.toUpperCase()}
        </span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="glass-button p-2 rounded-xl hover:scale-110 transition-all duration-300 group"
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <Sun size={16} className="text-white group-hover:text-yellow-400 transition-colors" />
        ) : (
          <Moon size={16} className="text-gray-800 group-hover:text-blue-600 transition-colors" />
        )}
      </button>
    </div>
  );
};

export default ThemeLanguageToggle;
