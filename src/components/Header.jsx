import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto z-50">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="icon"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b[3px] border-b-transparent
              ${
                pathMathRoute("/") && "text-black border-b-red-500"
              }  cursor-pointer`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b[3px] border-b-transparent
              ${
                pathMathRoute("/offers") && "text-black border-b-red-500"
              } cursor-pointer
              `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b[3px] border-b-transparent
              ${
                pathMathRoute("/sign-in") && "text-black border-b-red-500"
              } cursor-pointer
              `}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;