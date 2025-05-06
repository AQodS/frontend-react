import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { useRegister } from "../../hooks/auth/useRegister";

interface ValidationErrors {
  [key: string]: string;
}

const Register: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRegister();

  //define state
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //define state for errors
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Handle submit form
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    // Call the register mutation
    mutate(
      {
        name,
        username,
        email,
        password,
      },
      {
        onSuccess: () => {
          // Redirect to login page
          navigate("/login");
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
          //set errors to state "errors"
          setErrors(error.response.data.errors);
        },
      }
    );
  };

  return (
    <div className="row justify-content-center">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold text-center">Register Page</h4>
              <hr />
              <form onSubmit={handleRegister}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label className="mb-1 fw-bold">Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Full Name"
                      />
                      {errors.Name && (
                        <div className="text-danger p-2">{errors.Name}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label className="mb-1 fw-bold">Username</label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        placeholder="Username"
                      />
                      {errors.Username && (
                        <div className="text-danger p-2">{errors.Username}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label className="mb-1 fw-bold">Email address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Email Address"
                      />
                      {errors.Email && (
                        <div className="text-danger p-2">{errors.Email}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label className="mb-1 fw-bold">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Password"
                      />
                      {errors.Password && (
                        <div className="text-danger p-2">{errors.Password}</div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-4"
                  disabled={isPending}
                >
                  {isPending ? "Loading..." : "Register"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
