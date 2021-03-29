import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

//fakebackend
import fakeBackend from "./helpers/fake-backend";
import Routes from "./routes";

// //Firebase helper
// import { initFirebaseBackend } from "./helpers/firebase";

// TODO
fakeBackend();

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_APIKEY,
// 	authDomain: process.env.REACT_APP_AUTHDOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASEURL,
// 	projectId: process.env.REACT_APP_PROJECTID,
// 	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_APPID,
// 	measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// // init firebase backend
// initFirebaseBackend(firebaseConfig);

import("../css/scss/theme.scss");

const App = () => {
  const context = useContext(AppContext);
  document.documentElement.classList.add(`${context.theme}`);
  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
};

export default App;
