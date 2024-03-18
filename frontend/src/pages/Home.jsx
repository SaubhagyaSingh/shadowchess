import React, { useState } from "react";

const Home = () => {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    // Get the selected file from the input element
    const file = event.target.files[0];
    // Update the selectedFile state with the selected file
    setSelectedFile(file);
  };

  // Function to handle file upload
  const handleUpload = () => {
    // You can perform any file upload logic here
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // Reset the selectedFile state after upload
      setSelectedFile(null);
    }
  };

  return (
    <div className="bg-[#000a15] h-screen w-full flex flex-col items-center justify-center text-white">
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

export default Home;
