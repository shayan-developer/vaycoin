import { useCallback, useEffect, useState } from "react";
import { ActionType, useCtxValues } from "../context";
import {
  dailyCipher,
  dailyCombo,
  dailyReward,
  dollarCoin,
  mainCharacter,
  vayZanetoo,
} from "../images";

const Home = () => {
  const [state, dispatch] = useCtxValues();
  const { points } = state;

  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  const pointsToAdd = 11;

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft(0));
      setDailyCipherTimeLeft(calculateTimeLeft(19));
      setDailyComboTimeLeft(calculateTimeLeft(12));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const calculateTimeLeft = (targetHour: number) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}`;
  };

  const handleCardClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);
    dispatch({ type: ActionType.ADD_POINTS, payload: +pointsToAdd });

    setClicks([
      ...clicks,
      {
        id: Date.now(),
        x:e.clientX - rect.left,
        y:e.clientY - rect.top,
      },
    ]);
  }, []);

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  

  return (
    <div className="absolute top-[2px] left-0 right-0 bottom-0  rounded-t-[46px]">
      <div className="px-4 mt-6 flex justify-between gap-2">
        <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
          <div className="dot"></div>
          <img
            src={dailyReward}
            alt="Daily Reward"
            className="mx-auto w-12 h-12"
          />
          <p className="text-[10px] text-center text-white mt-1">
            Daily reward
          </p>
          <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
            {dailyRewardTimeLeft}
          </p>
        </div>
        <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
          <div className="dot"></div>
          <img
            src={dailyCipher}
            alt="Daily Cipher"
            className="mx-auto w-12 h-12"
          />
          <p className="text-[10px] text-center text-white mt-1">
            Daily cipher
          </p>
          <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
            {dailyCipherTimeLeft}
          </p>
        </div>
        <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
          <div className="dot"></div>
          <img
            src={dailyCombo}
            alt="Daily Combo"
            className="mx-auto w-12 h-12"
          />
          <p className="text-[10px] text-center text-white mt-1">Daily combo</p>
          <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
            {dailyComboTimeLeft}
          </p>
        </div>
      </div>

      <div className="px-4 mt-4 flex justify-center">
        <div className="px-4 py-2 flex items-center space-x-2">
          <img src={dollarCoin} alt="Dollar Coin" className="w-10 h-10" />
          <p className="text-4xl text-white">{points.toLocaleString()}</p>
        </div>
      </div>

      <div className=" px-4 mt-4 flex justify-center">
        <div
          className="w-72 h-72 p-4 relative rounded-full circle-outer"
          onClick={handleCardClick}
        >
          <div className="w-full h-full rounded-full circle-inner overflow-hidden">
            <img
              src={mainCharacter}
              alt="Main Character"
              className="w-full h-full"
            />
          </div>

          {clicks.map((click) => (
            <div
              key={click.id}
              className="absolute flex flex-col items-center text-5xl font-bold opacity-0 z-50 text-white pointer-events-none"
              style={{
                top: `${click.y-80}px`,
                left: `${click.x-80}px`,
                animation: `float 1.5s ease-out`,
              }}
              onAnimationEnd={() => handleAnimationEnd(click.id)}
            >
              <img
                style={{
                  width: "100px",
                  borderRadius: "50%",
                }}
                src={vayZanetoo}
              />

              <span>بزن</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
