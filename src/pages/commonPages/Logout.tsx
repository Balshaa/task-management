import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem('accessToken'); // Clear the access token from local storage
  navigate('/'); // Redirect to the home page or any other desired route
};

export default Logout;