import "./SelectCost.css";
import { useSearchParams } from "react-router-dom";

const SelectCost = () => {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <div className={"select-cost"}>
        <p className="text-info">Showing Select Cost</p>

        <button
          onClick={() => {
            setSearchParams({
              step: "2",
            });
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SelectCost;
