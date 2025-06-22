import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuantificationPanel from "./components/QuantificationPanel";
import ResultsDisplay from "./components/ResultsDisplay";
import UploadSection from "./components/UploadSection";
/* 
{
    "analysis": {
        "Etioplast": {
            "area_um2": 8.100000381469727,
            "count": 1
        },
        "PLB": {
            "area_um2": 4.0,
            "count": 1
        },
        "Prothylakoid": {
            "count": 3,
            "total_length_um": 38.369998931884766
        },
        "Plastoglobule": {
            "count": 0,
            "avg_diameter_um": 0.0
        }
    },
    "scale_used": "0.006944 µm/pixel",
    "output_image_url": "http://127.0.0.1:8000/media/outputs/output_bcd9dfd790cc4bf7ab78d802255fb2cb.png"
}



*/
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
          <QuantificationPanel />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
