import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signInPopup} = UserAuth();
  console.log(currentUser)
  const handleLogin = async () => {
    try {
      await signInPopup();
      const user = auth.currentUser;
    } catch(error) {
      console.error(error)
      
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello guys</h1>
          <p className="py-6">
          Join the conversation, meet new people, and make connections in one shared room.
          </p>
          <button onClick={handleLogin}  className="btn">Login With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;