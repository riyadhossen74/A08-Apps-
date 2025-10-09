import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="container mx-auto py-30">
      <div className="flex items-center justify-center">
        <img src="/error.png" alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-5">OPPS!! APP NOT FOUND</h1>
        <p className="text-gray-700">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 px-4 rounded-md mt-5 text-white">
          {" "}
          <Link to="/">Go Back!</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
