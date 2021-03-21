export function WelcomePage() {
  return (
    <div>
      <div className="mb-3">
        <label forName="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Email Address"
        />
      </div>
      <div className="mb-3">
        <label forName="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Password"
        />
      </div>
    </div>
  );
}
