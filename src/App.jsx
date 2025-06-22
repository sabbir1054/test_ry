import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuantificationPanel from "./components/QuantificationPanel";
import ResultsDisplay from "./components/ResultsDisplay";
import UploadSection from "./components/UploadSection";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState({});
  const handleDetection = async () => {
    if (!selectedFile) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/detect-analyze/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      // console.log("Detection result:", data);
      setResult(data);
      // TODO: set state with result or display on UI
    } catch (error) {
      console.error("Detection failed:", error);
      alert("Detection failed. See console for details.");
    }
  };
  return (
    <>
      <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <UploadSection
            handleDetection={handleDetection}
            setSelectedFile={setSelectedFile}
          />
          <ResultsDisplay result={result} />
          <QuantificationPanel result={result} />
        </main>
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
