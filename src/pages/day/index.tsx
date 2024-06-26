import {useState, useEffect} from "react";
import Layout from "../../components/layout";
import Mood from "../../components/mood";

const Day = () => {
  const [currMood, setCurrMood] = useState("Nothing Spesial");

  const dailyMoods = [
    {day: "Moday", mood: "😒"},
    {day: "Tuesday", mood: "🙂"},
    {day: "Wednesday", mood: "😁"},
    {day: "Thursday", mood: "😔"},
    {day: "Friday", mood: "🤩"},
    {day: "Saturday", mood: "😴"},
    {day: "Sunday", mood: "🥳"},
  ];

  // Dijalankan setelah renderings mirip seperti watch di vue
  useEffect(() => {
    console.log(currMood);
  }, [currMood]);

  const changeMood = (day: string, mood: string) => {
    setCurrMood(`Your mood on ${day} is ${mood}`);
  };

  return (
    <Layout>
      <h1>My Mood</h1>
      <div>
        {dailyMoods.map((mood, index) => (
          <Mood key={index} day={mood.day} mood={mood.mood} onChangeMood={changeMood} />
        ))}
      </div>
    </Layout>
  );
};

export default Day;
