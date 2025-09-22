import React, { useState, useRef } from "react";
import kite1 from "../assets/kite1-removebg-preview.png";
import kite2 from "../assets/kite3-removebg-preview.png";
import kite3 from "../assets/kite4-removebg-preview.png";

function KiteSelectionPage({ userData = { name: "Demo User" }, onBack, onPhotoCapture }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const videoRef = useRef(null);

  const cards = [
    { id: 1, image: kite1, name: "Kite1" },
    { id: 2, image: kite2, name: "Kite2" },
    { id: 3, image: kite3, name: "Kite3" },
  ];

  const handleCardClick = (cardId) => setSelectedCard(cardId);

  const handleButtonClick = async () => {
    if (!selectedCard) {
      alert("Please select a card first!");
      return;
    }

    try {
      setShowCamera(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      setStream(mediaStream);
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
    } catch (error) {
      console.error("Camera error:", error);
      alert("Camera access denied or not available");
      setShowCamera(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    ctx.drawImage(videoRef.current, 0, 0);

    const dataUrl = canvas.toDataURL("image/png");
    setProcessedImage(dataUrl);
    setShowResult(true);
    stopCamera();
  };

  const handleUseImage = () => {
    if (processedImage && onPhotoCapture) {
      onPhotoCapture({
        kite: cards.find((c) => c.id === selectedCard),
        photo: processedImage,
      });
    }
  };

  const handleRetake = () => {
    setProcessedImage(null);
    setShowResult(false);
    setShowCamera(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back + Greeting */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 px-3 py-1 rounded-md hover:bg-blue-50"
          >
            ← Back
          </button>
          <div className="text-right text-sm text-gray-600">
            Welcome, {userData?.name || "Guest"}!
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Select Your Favorite Kite
        </h1>

        {/* Kite Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group bg-white ${
                selectedCard === card.id ? "ring-4 ring-blue-500 scale-105" : ""
              }`}
            >
              <div className="relative h-48 bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-center">
                  {card.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Camera Modal */}
        {showCamera && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                📷 Camera - {cards.find((c) => c.id === selectedCard)?.name}
              </h3>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-64 object-cover bg-gray-200 mb-4"
              />
              <div className="flex gap-3">
                <button
                  onClick={capturePhoto}
                  className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  📸 Capture
                </button>
                <button
                  onClick={stopCamera}
                  className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                  ✕ Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Result Modal */}
        {showResult && processedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                📷 Your Photo
              </h3>
              <div className="mb-4 bg-gray-100 p-4">
                <img
                  src={processedImage}
                  alt="Captured"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleUseImage}
                  className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  🎯 Use This Image
                </button>
                <button
                  onClick={handleRetake}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  🔄 Retake Photo
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Button */}
        <div className="text-center">
          <button
            onClick={handleButtonClick}
            disabled={!selectedCard}
            className={`px-8 py-3 rounded-lg font-medium shadow-md transition-all ${
              selectedCard
                ? "bg-emerald-500 text-white hover:bg-emerald-600 transform hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {selectedCard ? "📷 Open Camera" : "Select a Kite First"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default KiteSelectionPage;
