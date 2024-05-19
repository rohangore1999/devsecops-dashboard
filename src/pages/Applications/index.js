import React, { useContext, useEffect, useState } from "react";

// Components
import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";
import Loader from "../../components/Loader";

// Services
import { getAllApplications } from "../../services/applications";

// Context
import { Context } from "../../context/Context";

// Constants
import { ACTION_TYPES } from "../../reducers/constants";

const Applications = () => {
  const [applications, setApplications] = useState(null);
  const [loader, setLoader] = useState(true);

  const { dispatch } = useContext(Context);

  useEffect(() => {
    (async () => {
      const data = await getAllApplications();

      setApplications(data);
      setLoader(false);

      dispatch({ type: ACTION_TYPES.APPLICATIONS, payload: data[0] });
    })();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <main className="w-full min-h-[100vh] h-fit py-5 px-10">
      <div className="flex flex-col">
        {/* Header - App Name & Username */}
        <Header applications={applications} />

        {/* Dashboard */}
        <Dashboard />
      </div>
    </main>
  );
};

export default Applications;
