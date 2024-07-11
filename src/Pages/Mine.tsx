import Button from "../components/Button";
import MineItem from "../components/MineItem";
import {
  aloo,
  bas,
  behnam,
  behrooz,
  dollarCoin,
  pishroo,
  sepi,
  stop,
  yek,
} from "../images";
import { MineItemType } from "../utils/types";

const listOfCards: MineItemType[] = [
  {
    id: 1,
    title: "dr.stop",
    profit: 100000,
    lvl: 1,
    cost: 100,
    img: stop,
  },
  {
    id: 2,
    title: "behnam",
    profit: 100000,
    lvl: 1,
    cost: 100,
    img: behnam,
  },
  {
    id: 3,
    title: "aloo pedar sag",
    profit: 100000,
    lvl: 1,
    cost: 100,
    img: aloo,
  },
  {
    id: 4,
    title: "business man",
    profit: 100000,
    lvl: 1,
    cost: 100,
    img: bas,
  },
  {
    id: 5,
    title: "behrooz",
    profit: 100000,
    lvl: 1,
    cost: 100,
    img: behrooz,
  },
  {
    id: 6,
    title: "sepi",
    profit: 100000,
    lvl: 1,
    cost: 100,
    img: sepi,
  },
  {
    id: 7,
    title: "yek yekishon",
    profit: 100000,
    lvl: 1,
    cost: 100,
    img: yek,
  },
  {
    id: 8,
    title: "pishroo",
    profit: 100000,
    lvl: 1,
    cost: 100,
    img: pishroo,
  },
];

const Mine = () => {
  return (
    <section className="px-4 mt-6">
      <div className="mb-6">
        <div className="bg-[#272a2f] rounded-lg p-4 flex  items-center justify-between">
          <span>Daily combo</span>
          <div className="flex gap-1 ">
            <span className="w-2 h-2 rounded-full block   bg-green-600" />
            <span className="w-2 h-2 rounded-full block  bg-green-600" />
            <span className="w-2 h-2 rounded-full block  bg-green-600" />
          </div>
          <div>
            <Button className="flex gap-1 items-center">
              <img
                src={dollarCoin}
                alt="Dollar Coin"
                className="w-[18px] h-[18px]"
              />
              <span>+5,000,000</span>
            </Button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        {listOfCards?.map((mineItem) => {
          return <MineItem {...mineItem} key={mineItem.id} />;
        })}
      </div>
    </section>
  );
};

export default Mine;
