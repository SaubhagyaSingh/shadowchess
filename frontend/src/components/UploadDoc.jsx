import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const UploadDoc = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate(); // Get navigate function

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://localhost:3000/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully!");
          navigate("/mybots"); // Navigate to /success route
        } else {
          console.error("File upload failed.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }

      setSelectedFile(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange} // Attach handleFileChange function to onChange event
        className="py-2 px-4 mb-4" // Apply Tailwind CSS classes for styling
      />
      <button
        onClick={handleUpload} // Attach handleUpload function to onClick event
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload File
      </button>
    </div>
  );
};

export default UploadDoc;
