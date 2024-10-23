
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard!</h1>
      <p>Private Route</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
