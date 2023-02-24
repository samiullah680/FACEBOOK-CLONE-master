import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import "../CSS/Home.css";
import { Link } from "react-router-dom";
import { usercontext } from "../CONTEXT/Context";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const Home = () => {
  let context4 = useContext(usercontext);
  const [count, setCount] = useState(0);
  const [flag1, setFlag1] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [muteflag, setMuteflag] = useState(true);

  // <=================== COMMENT SECTION SHOW-HIDE ============>
  const comment_fun = () => {
    context4.setCommentShow(!context4.commentshow);
  };

  // <===============  LIKE-UNLIKE FUNCTIONALITY ===============>
  const Like_fun = (index, val) => {
    val.islikes = !val.islikes;
    if (val.islikes) {
      context4.post_data[index].likes++;
      context4.setLikeflag(!context4.likeflag);
    } else {
      context4.post_data[index].likes--;
      context4.setLikeflag(!context4.likeflag);
    }
  };

  // <======================= COMMENT FUNTIONALITY =============>
  const commentValue = (event, index) => {
    if (event.key === "Enter") {
      let obj = {
        cmmnt_id: context4.post_data[index].comments.length + 1,
        user: context4.current_user,
        comment: event.target.value,
      };

      context4.post_data[index].comments.push(obj);

      context4.setPost_data(context4.post_data);
    } else {
    }
    setCount(count + 1);
  };

  // <============= MUTE SECTION HIDE - SHOW ===================>
  const showfriend = () => {
    setFlag3(!flag3);
  };

  // <==================  MUTE - UNMUTE FUNCTIONALITY ===========>
  const frnd = (name) => {
    context4.post_data.forEach((val, index) => {
      if (val.name === name) {
        // context4.post_data.splice(index, 1);
        val.ismuted = !val.ismuted;
      }
    });
    context4.signup_data.forEach((val) => {
      if (val.name === name) {
        val.ismuted = !val.ismuted;
      }
    });
    setMuteflag(!muteflag);
  };

  // <==============  EDIT COMMENT ===============================>
  const edit_comment = (event, index, i, val) => {
    event.target.parentNode.parentNode.parentNode.nextElementSibling.firstChild.value =
      val.comments[index].comment;
    val.comments.splice(index, 1);
  };
  // <======================== DELETE COMMENT ====================>
  const delete_comment = (index, val) => {
    val.comments.splice(index, 1);
    setFlag1(!flag1);
  };

  return (
    <>
      <Navbar />

      <div className="home">
        <div className="mute-unmute">
          <p style={{ fontSize: "22px" }}>
            Do You want to mute Friends post ??? click on the icon{" "}
          </p>
          <p>
            <ArrowDropDownCircleIcon
              onClick={showfriend}
              sx={{ color: "green" }}
            />
          </p>

          {flag3 ? (
            <>
              {context4.signup_data.map((val, index) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        frnd(val.name);
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {!val.ismuted ? (
                        <>
                          <div style={{ margin: "10px 15px" }}>
                            {" "}
                            <VisibilityIcon sx={{ color: "blue" }} />
                          </div>
                          <div> Mute( {val.name})</div>
                        </>
                      ) : (
                        <>
                          <div style={{ margin: "10px 15px" }}>
                            {" "}
                            <VisibilityOffIcon sx={{ color: "red" }} />
                          </div>
                          <div> Unmute( {val.name})</div>
                        </>
                      )}
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
        {context4.post_data.map((val, index) => {
          return (
            <>
              {!val.ismuted ? (
                <>
                  <div className="card-1">
                    <div className="post-heading">
                      <div>
                        {val.name === context4.current_user ? (
                          <>
                            <div>
                              <Link to="/Friends">
                                <img
                                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                  id="card-img"
                                  alt="asdfa"
                                />
                              </Link>
                              <FiberManualRecordIcon sx={{ color: "green" }} />
                              <span color="green">Online</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <Link to="/Friends">
                                <img
                                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                  id="card-img"
                                  alt="asdfa"
                                />
                              </Link>
                            </div>
                          </>
                        )}

                        <div>
                          <span
                            style={{ fontSize: "30px", fontWeight: "bold" }}
                          >
                            {val.name}
                          </span>
                          &emsp;
                          <span style={{ marginTop: "10px", fontSize: "20px" }}>
                            is With sonu and 17 others..
                          </span>
                        </div>
                      </div>
                      <div>
                        <MoreVertIcon />
                      </div>
                    </div>

                    <div className="content">
                      <pre className="cont">{val.post_content}</pre>
                    </div>

                    <div className="image-div">
                      <img src={val.image} alt="lsfa" id="img-1" />
                    </div>

                    <div className="like-comment">
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          Like_fun(index, val);
                        }}
                      >
                        {!val.islikes ? (
                          <>
                            <FavoriteBorderIcon />
                            <span>{val.likes} &emsp;Likes</span>
                          </>
                        ) : (
                          <>
                            <FavoriteIcon sx={{ color: "red" }} />
                            <span>{val.likes} &emsp;Likes</span>
                          </>
                        )}
                      </div>

                      <div style={{ cursor: "pointer" }} onClick={comment_fun}>
                        <span>
                          <CommentIcon />
                        </span>

                        <span>{val.comments.length} &emsp;comments..</span>
                      </div>

                      <div style={{ cursor: "pointer" }}>
                        <span>
                          <ShareIcon />
                        </span>
                        <span>Share </span>
                      </div>
                    </div>
                    {context4.commentshow ? (
                      <>
                        <div className="show-comment">
                          <div id="a">
                            {val.comments.map((i, index) => {
                              return (
                                <>
                                  <div
                                    style={{
                                      backgroundColor: "rgb(199, 226, 226)",
                                      padding: "15px",
                                      color: "black",
                                      margin: "10px",
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <div>
                                      {i.user}::&emsp;{i.comment}
                                    </div>
                                    {i.user === context4.current_user ? (
                                      <>
                                        <div >
                                          {" "}
                                          <DeleteIcon
                                            sx={{ color: "red" ,fontSize:"42px"}}
                                            onClick={() => {
                                              delete_comment(index, val);
                                            }}
                                            
                                          />
                                          &emsp;
                                          <EditIcon
                                            sx={{ color: "green",fontSize:"42px" }}
                                            onClick={(event) => {
                                              edit_comment(
                                                event,
                                                index,
                                                i,
                                                val
                                              );
                                            }}
                                          />
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </>
                              );
                            })}
                          </div>
                          <div id="abcd">
                            <input
                              type="text"
                              id="comment-inp"
                              placeholder="Write a Comment !!"
                              onKeyPress={(event) => {
                                commentValue(event, index);
                              }}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      " "
                    )}
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          );
        })}

        {/* ................... */}
      </div>
    </>
  );
};

export default Home;
