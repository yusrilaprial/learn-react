import {memo} from "react";

const OwnerLabel = ({name, action}: {name: string, action?: () => void}) => {
  console.log("OwnerLabel Component Redered");
  return <h2 onClick={action}>Nama : {name}</h2>;
};

// memo() digunakan untuk memastikan component hanya dirender sekali jika 
export default memo(OwnerLabel);
