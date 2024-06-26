import {useState, useRef, useContext, createContext, Dispatch} from "react";
import Button from "../../components/button";
import Layout from "../../components/layout";

const ProfileContext = createContext<{name?: string; setName?: Dispatch<string>; old?: number}>({});

const Child1 = () => {
  const data = useContext(ProfileContext);
  return (
    <>
      <div>Hallo {data.name} dari Child 1</div>
      <Child2 />
    </>
  );
};

const Child2 = () => {
  const data = useContext(ProfileContext);
  return (
    <>
      <div>Hallo {data.name} dari Child 2</div>
      <Child3 />
    </>
  );
};

const Child3 = () => {
  const data = useContext(ProfileContext);
  const changeName = () => {
    if (data.name !== "Yusril") data.setName!("Yusril");
    else data.setName!("Antony");
  };

  return (
    <>
      <div>
        Hallo {data.name} dengan umur {data.old} dari Child 3
      </div>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

const Contact = () => {
  const [name, setName] = useState("Yusril");

  const message: React.RefObject<HTMLInputElement> = useRef(null);
  const displayMessage: React.RefObject<HTMLDivElement> = useRef(null);

  const submit = () => {
    if (displayMessage.current && message.current) displayMessage.current!.innerHTML = message.current!.value;
  };

  return (
    <Layout>
      <h1>Contact</h1>
      <label>Message</label>
      <div>
        <input
          style={{
            padding: 10,
            border: "1px solid #ccc",
            borderRadius: 5,
            outline: "none",
          }}
          type="text"
          ref={message}
        />
      </div>
      <div style={{marginTop: 10}}>
        <Button onClick={submit}>Submit</Button>
      </div>
      <div ref={displayMessage}></div>
      <div>
        <ProfileContext.Provider value={{name, setName, old: 20}}>
          <Child1 />
        </ProfileContext.Provider>
      </div>
    </Layout>
  );
};

export default Contact;
