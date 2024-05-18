import React from "react";

// Components
import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";

const Applications = () => {
  return (
    <main className="w-full min-h-[100vh] h-fit py-5 px-10">
      <div className="flex flex-col">
        {/* Header - App Name & Username */}
        <Header />

        {/* Dashboard */}
        <Dashboard />
      </div>
    </main>
  );
};

export default Applications;
