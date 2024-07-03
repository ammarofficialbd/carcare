import { useEffect, useState } from 'react'
import './App.css'
import Header from "./Components/Header/Header";
import Sidebar from './Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, []);

  return (
    <>
     <Header toggleSidebar={toggleSidebar}/> 
     {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
     <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
