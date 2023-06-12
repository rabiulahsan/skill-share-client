import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(status);
  console.log(error);
  return (
    <div className="flex justify-center items-center my-[10%] text-center">
      <div className="w-2/12 h-2/12">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </p>
        <p className=" text-4xl font-bold">404</p>
        <p className="text-2xl ">Route Not Found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
