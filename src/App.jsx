import { useState } from "react";
import LoginCard from "./Components/LoginCard";
import KiteSelectionPage from "./Components/KiteSelectionPage";
import FlyingKites from "./Components/KitesFly";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [userData, setUserData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const handleLoginSuccess = (data) => {
    setUserData(data);
    setCurrentPage("selectKite");
  };

  const handlePhotoCapture = (data) => {
    setSelectedData(data);
    setCurrentPage("flying");
  };

  return (
    <>
      {currentPage === "login" && <LoginCard onLoginSuccess={handleLoginSuccess} />}
      {currentPage === "selectKite" && (
        <KiteSelectionPage
          userData={userData}
          onBack={() => setCurrentPage("login")}
          onPhotoCapture={handlePhotoCapture}
        />
      )}
      {currentPage === "flying" && <FlyingKites selectedData={selectedData} />}
    </>
  );
}
