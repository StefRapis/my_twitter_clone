import "./index.css";
import Input from "../input";
import TrendList from "../trendList";

const SideTrends = () => {
  return (
    <div className="SideTrends">
      <Input />
      <div className="trend_links">
        <ul>
          <li>For you</li>
          <li>Trending</li>
          <li>News</li>
          <li>Sports</li>
          <li>Fun</li>
        </ul>
      </div>
      <TrendList />
    </div>
  );
};

export default SideTrends;
