import { dollarCoin } from "../images";
import { formatProfitPerHour } from "../utils/helper";
import { MineItemType } from "../utils/types";

const MineItem = (props: MineItemType) => {
  const { cost, img, lvl, profit, title } = props;
  return (
    <div className="bg-[#272a2f] rounded-lg ">
      <div className="flex gap-3  px-4 py-2">
        <img src={img} className="w-16 h-16 object-cover" />
        <div className="flex flex-col justify-between">
          <strong className="text-sm">{title}</strong>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-400">Profit per hour</span>
            <span className="text-xs flex gap-1 items-center">
              <img
                src={dollarCoin}
                alt="Dollar Coin"
                className="w-[18px] h-[18px]"
              />
              {formatProfitPerHour(profit)}
            </span>
          </div>
        </div>
      </div>

      <div className=" px-4 py-2 border-t border-gray-500 flex gap-4">
        <div className="border-r border-gray-500 pr-2">lvl {lvl}</div>

        <div className="flex items-center gap-2">
          <img
            src={dollarCoin}
            alt="Dollar Coin"
            className="w-[18px] h-[18px]"
          />
          {cost}
        </div>
      </div>
    </div>
  );
};

export default MineItem;
