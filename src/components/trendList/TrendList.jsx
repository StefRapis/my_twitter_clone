import "./index.css";
import TrendItem from "../trendItem";

const TrendList = () => {
  const fakeTrend = [
    {
      place: "Trending Worldwide",
      title: "#WhatYouNeedToKnowToday",
      tweets: "125K Tweets",
    },

    {
      place: "Trending Worldwide",
      title: "Talking Pug",
      tweets: "167K Tweets",
    },

    {
      place: "Trending in Usa",
      title: "Late Summer Heat",
      tweets: "78K Tweets",
    },

    {
      place: "Trending in France",
      title: "FridayFeeling",
      tweets: "90K Tweets",
    },

    {
      place: "Trending Worldwide",
      title: "#Hero Fightfighter",
      tweets: "500K Tweets",
    },

    {
      place: "Trending Worldwide",
      title: "#WordlNews",
      tweets: "850K Tweets",
    },

    {
      place: "Trending in Italy",
      title: "#Tg5 Allerta Meteo",
      tweets: "80K Tweets",
    },
  ];

  return (
    <div className="TrendList">
      {fakeTrend.map((trend) => (
        <TrendItem data={trend} />
      ))}
    </div>
  );
};

export default TrendList;
