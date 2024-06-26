import {useState, useMemo, useCallback} from "react";
import Layout from "../../components/layout";
import Button from "../../components/button";
import OwnerLabel from "../../components/owner-label";

const Owner = () => {
  const [like, setLike] = useState(0);
  const [subscribe, setSubscribe] = useState(0);
  const [name, setName] = useState("M Yusril Aprial");

  // UseCallback() akan merender ulang jika ada perubahan pada name
  const changeName = useCallback(() => {
    if (name === "M Yusril Aprial") setName("Antony");
    else setName("M Yusril Aprial");
    console.log(name);
  }, [name]);

  function likeMessage() {
    console.log("like dirender ulang");
    return like < 10 ? "Like kurang dari 10" : "Mantap anda memiliki 10 like atau lebih!";
  }

  // UseMemo() akan merender ulang jika ada perubahan pada like
  const displayLikeMessage = useMemo(() => likeMessage(), [like]);

  return (
    <Layout>
      <h1>Owner</h1>
      <OwnerLabel name={name} action={changeName}/>
      <div>
        <Button bgColor="green" onClick={() => setLike(like + 1)}>
          <span>{like} Like 👍</span>
        </Button>{" "}
        {displayLikeMessage}
      </div>
      <div style={{marginTop: "10px"}}>
        <Button bgColor="red" onClick={() => setSubscribe(subscribe + 1)}>
          <span>{subscribe} Subcribe ▶️</span>
        </Button>
      </div>
      <div style={{marginTop: "10px"}}>
        <Button onClick={changeName}>
          <span>Change Owner</span>
        </Button>
      </div>
    </Layout>
  );
};

export default Owner;
