import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const UploadFile = ({
  accept = "/*",
  description,
  fileSize,
  children,
  onChange,
  selectedFile,
  setSelectedFile,
  handleRemoveFile,
}) => {
  const maxFileSize = fileSize * 1024; // converting to KB

  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  const validateFileSizeAndSetFile = (file) => {
    if (file.size > maxFileSize) {
      setError(`File size should be less than ${maxFileSize / 1024} KB`);
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
      setError("");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      validateFileSizeAndSetFile(file);

      onChange(event);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();

    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (file) {
      validateFileSizeAndSetFile(file);

      event.dataTransfer.clearData();
    }
  };

  const handleUploadClick = () => {
    // Handle file upload logic here
    if (selectedFile) {
      console.log("Uploading:", selectedFile);
      // Add your upload logic here
    }
  };

  return (
    <div className="flex flex-col items-center">
      {selectedFile ? (
        <div className="mt-4 text-center w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg  space-x-2">
          <p className="text-gray-700">Selected file: {selectedFile.name}</p>

          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={handleRemoveFile}
          />
        </div>
      ) : (
        <>
          <input
            type="file"
            id="file-upload"
            accept={accept}
            className="hidden"
            onChange={handleFileChange}
          />

          <label
            htmlFor="file-upload" // associate the label with the input through ID
            className={`cursor-pointer w-full h-48 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg ${
              isDragging ? "bg-gray-300" : "bg-gray-200"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <span className="text-gray-600">
                {isDragging
                  ? "Drop the file here..."
                  : "Drag and drop a file, or click to select one"}
              </span>
            </div>
          </label>
        </>
      )}

      <div className="text-left w-full mt-2">
        {error ? (
          <div className=" text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <p className="text-gray-500">{description}</p>
        )}
      </div>

      {/* <button
        onClick={handleUploadClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={!selectedFile}
      >
        Upload File
      </button> */}
      {children}
    </div>
  );
};

export default UploadFile;
