import React, { useContext } from "react";
import Navbar from "./Navbar";
import "../CSS/MyProfile.css";
import { usercontext } from "../CONTEXT/Context";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const MyProfile = () => {
  let context6 = useContext(usercontext);
  const comment_fun = () => {
    context6.setCommentShow(!context6.commentshow);
  };
  return (
    <>
      <Navbar />
      <div className="profile-div">
        <div>
          <img
            src="https://scontent.fdel1-2.fna.fbcdn.net/v/t1.6435-9/196963740_935685450497289_9108356468843470609_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=jYt8dnDww6QAX-ChUdb&_nc_ht=scontent.fdel1-2.fna&oh=00_AT_KQ8_REAxpQ-_CbYxcDNcnkYdV3bYyxHeNRKTgDcBOmQ&oe=63396F97"
            id="profile-cover"
            alt="adf"
          />
        </div>

        <div className="section-1">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              id="justin"
              alt="adsf"
            />
          </div>
          <div>
            <div>
              <h1>{context6.current_user}</h1>
            </div>
            <div>
              <h2>3K Friends..</h2>
            </div>
          </div>

          <div>
            <Link to="/">
              <Button variant="outlined" sx={{color:"rgb(16, 175, 0 )",fontSize:"22px",fontWeight:"bold"}} endIcon={<LogoutIcon />}>
                Logout
              </Button>
            </Link>
          </div>
        </div>
        <div style={{ border: "2px solid gray" }}>
          <h1 style={{ textAlign: "center" }}>MY POSTS</h1>
        </div>
        {/* ......my post.......  */}
        {context6.mypost.map((val) => {
          return (
            <>
   
                {val.name === context6.current_user ? (
                  <>
                  <div className="card-1">
                    <div className="post-heading">
                      <div>
                        {val.name === context6.current_user ? (
                          <>
                            <div>
                              <Link to="/Friends">
                                <img
                                  src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
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
                                  src={val.image}
                                  id="card-img"
                                  alt="asdfa"
                                />
                              </Link>
                            </div>
                          </>
                        )}
                   
                    
                    <div>
                      <span style={{ fontSize: "30px", fontWeight: "bold" }}>
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
                      <div>
                        <FavoriteBorderIcon />
                        <span>{val.likes} &emsp;Likes</span>
                      </div>
                      <div>
                        <span>
                          <CommentIcon onClick={comment_fun} />
                        </span>

                        <span>{val.comments} &emsp;comments..</span>
                      </div>
                      <div>
                        <span>
                          <ShareIcon />
                        </span>
                        <span>Share </span>
                      </div>
                    </div>
                    {context6.commentshow ? (
                      <>
                        <div className="show-comment">
                          <input type="text" id="comment-inp" />
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
             
              ;
            </>
          );
        })}
        {/* ................ */}
      </div>
    </>
  );
};

export default MyProfile;
