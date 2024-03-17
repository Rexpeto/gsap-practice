import { Link } from "react-router-dom";
import { linkAnimations } from "../constant/link.constant";

const Home = () => {
  return (
    <main className="container rounded-lg">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-zinc-50">GSAP Animations</h1>
        <ol className="flex flex-col mt-10">
          {linkAnimations.map((animation, index) => (
            <Link
              to={animation.path}
              key={index}
              className="flex flex-row gap-2 p-5 hover:bg-gray-800/80 group rounded-lg transition duration-150"
            >
              <p>
                <span className="text-sm font-bold text-gray-400 group-hover:text-gray-300 transition duration-150">
                  {index + 1}.
                </span>
              </p>
              <div className="flex flex-col gap-2 flex-1">
                <h2 className="text-md font-semibold text-blue-600">
                  {animation.title}
                </h2>
                <p className="text-gray-400 text-xs">{animation.description}</p>
              </div>

              <svg
                className="size-6 text-gray-600 -rotate-90 group-hover:translate-x-1 transition duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
                />
              </svg>
            </Link>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Home;
