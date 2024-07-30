import React, { useState } from "react";

const UploadDoc = () => {
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
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://localhost:3000/upload", {
          // For FastAPI
          // const response = await fetch("http://localhost:3000/upload", { // For Express
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully!");
          // Optionally, handle the response data here
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
