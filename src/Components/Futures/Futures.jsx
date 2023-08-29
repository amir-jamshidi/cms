import { ArrowUpwardRounded } from "@mui/icons-material";
import Chart from "../Chart/Chart";
import { data } from "../../Helpers/chartData";
import "./Futures.css";

const Futures = () => {
  return (
    <div className="col-4 ">
      <div className="card-futures">
        <h3>فروش روزانه</h3>
        <p className="futures-price">196,000,000 تومان</p>
        <p>
          <ArrowUpwardRounded />
        </p>
        <p>13%</p>
        <Chart data={data} />
      </div>
    </div>
  );
};

export default Futures;
