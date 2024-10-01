import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import Page404 from './pages/Page404';
import Stats from './pages/Stats';
import { registerSW } from 'virtual:pwa-register';
import { useModal } from './contexts/ModalContext';
import Loading from './components/LoadingPage'; // Import the Loading component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const modal = useModal();

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const updateSW = registerSW({
      onNeedRefresh() {
        modal?.CreateModal('New content available', 'Please refresh to get the latest content', 'Refresh', 'Cancel').then((res) => {
          if (res) {
            updateSW(true);
          }
        });
      },
    });
  }, [modal]);

  return (
    <>
      {isLoading ? (
        <Loading /> // Show the loading screen while isLoading is true
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      )}
    </>
  );
}

export default App;
