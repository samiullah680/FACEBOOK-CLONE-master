import React, { createContext, useState } from "react";
import data from "../DATA/Userdata";
import post_datas from '../DATA/PostData'
export const usercontext = createContext();

const Context = (props) => {
  const [current_user, setCurrent_user] = useState('Shasank');
  const [signup_data, setSignup_data] = useState(data);
  const [post_data,setPost_data] = useState(post_datas)
  const [mypost,setMypost] = useState([]);
  const [commentshow, setCommentShow] = useState(false);
  const [likeflag,setLikeflag] = useState(true);
  return (
    <>
      <usercontext.Provider
        value={{
          current_user,
          setCurrent_user,
          signup_data,
          setSignup_data,
          mypost,setMypost,
          post_data,
          setPost_data,
          commentshow,
          setCommentShow,
          likeflag,
          setLikeflag
        }}
      >
        {props.children}
      </usercontext.Provider>
    </>
  );
};

export default Context;
