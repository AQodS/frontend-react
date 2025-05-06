import { FC } from "react";
import SidebarMenu from "../../../components/SidebarMenu";
import { useAuthUser } from "../../../hooks/auth/useAuthUser";

const Dashboard: FC = () => {
  // get user from useAuthUser
  const user = useAuthUser();
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded-4 shadow-sm">
            <div className="card-header">Dashboard</div>
            <div className="card-body">
              {user ? (
                <p>
                  Welcome, <strong className="text-primary">{user.name}</strong>
                </p>
              ) : (
                <p className="text-danger">Please login first!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
