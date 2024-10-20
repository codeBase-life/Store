import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidbar.jsx";
import { Button } from "react-bootstrap";

function SidbarController() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Button variant="secondary" onClick={toggleSidebar}>
        View in Cart
      </Button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default SidbarController;
