import { useState } from "react";
import data from "./data";
import { GiAchievement } from "react-icons/gi";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
function App() {
  const [canGoNext, setCanGoNext] = useState(true);
  const [index, setIndex] = useState(0);
  // const [arrow, setArrow] = useState(true);
  const user = data[index];

  const plusIndex = () => {
    setIndex((prev) => {
      if (prev + 1 >= data.length - 1) {
        setCanGoNext(false);
        return data.length - 1;
      }
      return prev + 1;
    });
  };

  const minusIndex = () => {
    setIndex((prev) => {
      if (prev - 1 <= 0) {
        setCanGoNext(true);
        return 0;
      }
      return prev - 1;
    });
  };

  const { id, name, job, image, text } = user;
  return (
    <main className="h-screen grid place-items-center">
      <article className="w-[500px] p-4 space-y-2 box-shadow-custom relative select-none">
        <div className="flex gap-5">
          <img
            width={280}
            className="aspect-square object-cover"
            src={image}
            alt={name}
          />
          <div className="space-y-3 flex flex-col justify-center items-center w-full">
            <GiAchievement size={80} />
            <div>
              <p className="font-poppins text-center text-2xl font-bold uppercase">
                {name}
              </p>
              <p className="text-lg text-center capitalize font-poppins font-normal">
                {job}
              </p>
            </div>
          </div>
        </div>
        <p className="font-poppins text-[#222] text-base ">
          <span className="text-lg underline underline-offset-1">About : </span>
          {text}
        </p>
        <div className="absolute top-4 right-4">
          {!canGoNext ? (
            <RiArrowLeftLine
              size={25}
              color={"#333"}
              cursor="pointer"
              onClick={minusIndex}
            />
          ) : (
            <RiArrowRightLine
              size={25}
              color={"#333"}
              cursor="pointer"
              onClick={plusIndex}
            />
          )}
        </div>
      </article>
    </main>
  );
}

export default App;
