import { ThemeProvider } from "@/components/theme-provider";
import { ToukoumWebsite } from '@/components/ToukoumWebsite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
          <ThemeProvider 
        attribute="class" 
        defaultTheme="light" 
        enableSystem
        disableTransitionOnChange
        storageKey="toukoum-theme"
      >
      <Router basename="/skpai">
        <Routes>
          <Route path="/*" element={<ToukoumWebsite />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
