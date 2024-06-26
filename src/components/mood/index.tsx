import {useState} from "react";
import Button from "../button";

interface MoodProps {
  day: string;
  mood: string;
  onChangeMood?: (day: string, mood: string) => void;
}

const Mood = ({day, mood, onChangeMood}: MoodProps) => {
  const [isHappy, setIsHappy] = useState(false);
  const [count, setCount] = useState(0);

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "5px 0",
  };

  const changeMood = () => {
    setIsHappy(!isHappy);
    setCount(count + 1);
    onChangeMood && onChangeMood(day, isHappy ? "normal" : "happy");
  };

  return (
    <div style={itemStyle}>
      <span>
        {day} - {isHappy ? "😎" : mood} - {count}
      </span>
      <Button onClick={changeMood}>{isHappy ? "Be Normal" : "Be Happy"}</Button>
    </div>
  );
};

export default Mood;
