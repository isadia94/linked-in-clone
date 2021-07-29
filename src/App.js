import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
// import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  });
  return (
    <div className="app">
      {!user ? (
        <SignUp />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}

      {/* App Body */}

      {/* widgets */}
    </div>
  );
}

export default App;
