import { SpinnerDotted } from "spinners-react";

export function Spinner() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <SpinnerDotted size={120} thickness={100} speed={100} color="#82866F" />
    </div>
  );
}
