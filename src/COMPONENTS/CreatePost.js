import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usercontext } from "../CONTEXT/Context";
import "../CSS/CreatePost.css";
import post_data from "../DATA/PostData";
import Navbar from "./Navbar";

const CreatePost = () => {
  let navigate = useNavigate();
  let context5 = useContext(usercontext);

  const create_post = () => {
    let post_content = document.getElementById("text-area").value;
    let image = document.getElementById("post-img");
    let url = URL.createObjectURL(image.files[0]);
    console.log(url);
    console.log(post_content);
    let obj = {
      name: context5.current_user,
      id: "",
      image: url,
      post_content: post_content,
      likes: "",
      comments: [],
    };
    post_data.unshift(obj);
    context5.setMypost([...context5.mypost, obj]);
    // console.log(post_data);
    navigate("/Home");
  };
  const close = () => {
    navigate("/Home");
  };
  return (
    <>
      <Navbar />
      <div className="create-post">
        <div id="div-1">
          <span>CREATE YOUR POST</span>
          <button onClick={close}>X</button>
        </div>

        <div id="div-2">
          <Link to="/MyProfile">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              alt="alsdjfl"
              id="pic-img"
            />
          </Link>
          <span>{context5.current_user.toUpperCase()}</span>
        </div>

        <div id="div-3">
          <textarea
            placeholder="what's on Your  Mind ??"
            id="text-area"
          ></textarea>{" "}
          <br></br>
          <span>Upload Image:</span> <input type="file" id="post-img" />
        </div>

        <div id="div-4">
          <button id="post" onClick={create_post}>
            POST
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
