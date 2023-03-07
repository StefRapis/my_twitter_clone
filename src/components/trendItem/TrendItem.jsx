import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div className="TrendItem">
      <div className="trend_info">
        <p className="trend_where">{data.place}</p>
        <h3 className="trend_title">{data.title}</h3>
        <p>{data.tweets}</p>
      </div>
    </div>
  );
};

export default TrendItem;
