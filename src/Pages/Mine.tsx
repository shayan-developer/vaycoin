import MineItem from "../components/MineItem";
import { MineItemType } from "../utils/types";

const listOfCards: MineItemType[] = [
  {
    id: 1,
    title: "dr.stop",
    profit: 100000,
    lvl: 1,
    cost: 1,
  },
];

const Mine = () => {
  return (
    <div>
      {listOfCards?.map((mineItem) => {
        return <MineItem {...mineItem} key={mineItem.id} />;
      })}
    </div>
  );
};

export default Mine;
