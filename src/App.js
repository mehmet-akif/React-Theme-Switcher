// App.js
import React from 'react';
//import Header from './Header';
import Content from './Content';
import ThemeSettingsPanel from './ThemeSettingsPanel';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        
        <Content />
        <ThemeSettingsPanel /> {/* Include the ThemeSettingsPanel */}
      </div>
    </ThemeProvider>
  );
}

export default App;

