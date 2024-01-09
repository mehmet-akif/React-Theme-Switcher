import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSettingsPanel = () => {
  const { theme, updateTheme } = useTheme();

  const handleColorChange = (e) => {
    updateTheme({ ...theme, primaryColor: e.target.value });
  };

  const handleFontSizeChange = (e) => {
    updateTheme({ ...theme, fontSize: e.target.value });
  };

  return (
    <div className="settings-panel">
      <h3>Theme Settings</h3>
      <label>
        Primary Color:
        <input type="color" value={theme.primaryColor} onChange={handleColorChange} />
      </label>
      <label>
        Font Size:
        <input type="text" value={theme.fontSize} onChange={handleFontSizeChange} />
      </label>
      <button>Apply Changes</button>
    </div>
  );
};

export default ThemeSettingsPanel;
