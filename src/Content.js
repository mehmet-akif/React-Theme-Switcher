import React from 'react';
import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <div className="content" style={{ color: theme.primaryColor, fontSize: theme.fontSize }}>
      <h2>Content Section</h2>
      <p>You can see the changes made in Theme settings here</p>
    </div>
  );
};

export default Content;

