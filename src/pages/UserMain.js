import { Navigate } from "react-router-dom";

const UserMain = () => {
  // isLogin
  const isLogin = false;
  if (!isLogin) {
    return <Navigate to="/auth" />;
  }
  return <div>User Main</div>;
};
export default UserMain;
