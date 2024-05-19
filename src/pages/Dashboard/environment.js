import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";

// Components
import Paper from "../../components/Paper";
import Drawer from "../../components/Drawer";
import UploadFile from "../../components/UploadFile";

const Environment = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showParsedFile, setShowParsedFile] = useState(false);
  const [envVariables, setEnvVariables] = useState([]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    readEnvFile(file);
  };

  const handleClick = () => {
    if (!showParsedFile) {
      setShowParsedFile(true);
    } else {
      toggleDrawer();
    }
  };

  const parseEnvFile = (content) => {
    const lines = content.split("\n");
    const envVars = lines
      .filter((line) => line.trim() && !line.trim().startsWith("#"))
      .map((line) => {
        const [key, value] = line.split("=");

        return { key: key.trim(), value: value.trim().replace(/"/g, "") };
      });

    return envVars;
  };

  const readEnvFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const parsedEnv = parseEnvFile(text);

      setEnvVariables(parsedEnv);
    };

    reader.readAsText(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setEnvVariables([]);
  };

  const handleDelete = (idx) => {
    const updatedEnvVariables = envVariables.filter(
      (_, index) => index !== idx
    );

    setEnvVariables(updatedEnvVariables);
  };

  return (
    <>
      <Paper>
        <div className="flex justify-between items-center">
          <p>Environment variables</p>

          <div className="flex gap-2">
            <FiPlus onClick={toggleDrawer} />

            <GoDownload />
          </div>
        </div>

        {!isDrawerOpen && envVariables.length ? (
          <div className=" flex flex-col gap-4">
            {envVariables.map((variable, idx) => (
              <div className="flex border justify-between space-x-4 p-3 rounded-md w-1/3">
                <span>{variable.key}</span> <span>{variable.value}</span>
                <span onClick={() => handleDelete(idx)}>
                  <MdOutlineDelete className="cursor-pointer text-2xl" />
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No environment variable created.</p>
        )}
      </Paper>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <div className="border border-gray-200 rounded-lg p-5 mt-10">
          {showParsedFile ? (
            <div className="space-y-6">
              {envVariables.map((variable) => (
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <label>Name</label>

                    <input
                      className="p-2 border rounded-md"
                      value={variable.key}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <label>Value</label>

                    <input
                      className="p-2 border rounded-md"
                      value={variable.value}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <UploadFile
              accept=".env"
              fileSize="5" // KB
              description="Upload a .env file. It should not be greater than 5KB."
              onChange={handleFileChange}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              handleRemoveFile={handleRemoveFile}
            />
          )}

          <div className="flex space-x-4 mt-5 justify-end">
            <button className="border border-gray-500 py-2 px-8 rounded-lg">
              Cancel
            </button>

            <button
              onClick={handleClick}
              disabled={!selectedFile}
              className={`border-2    py-2 px-8 rounded-lg ${
                !selectedFile
                  ? "bg-gray-100 border-0 text-gray-500"
                  : "bg-purple-700 border-purple-700 text-white"
              }`}
            >
              Add
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Environment;
