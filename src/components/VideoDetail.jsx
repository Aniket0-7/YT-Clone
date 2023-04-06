import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { Button } from "@mui/material";
import './VideoDetail.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const VideoDetail = () => {

  //Notification Part

  // const sub = () => toast(" Subscribtion Added ");


  const [show, setshow] = useState(false);
  const [color, setcolor] = useState(false);
  const [color1, setcolor1] = useState(false);

  const [buttonText, setbuttonText] = useState(false);


  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack className="stack1" direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack  >
              <span className="reaction" >
                <button
                  className={show ? "button1" : "button"}
                  onClick={() => {
                    setshow(!show)
                    setbuttonText(!buttonText)
                    if(show){
                      toast.error("Subscribtion Removed ")
                    }else{
                      toast.success("Subscribtion Added")
                    }
                
                  }}
                >
                  {buttonText ? "Subscribed" : "Subscribe"}
                </button>
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                <div>
                  <button>
                    <ThumbUpIcon onClick={() => {
                      setcolor1(!color1)
                      setcolor(false)
                      if(color1){
                      toast.error("Removed From Liked Videos ")
                    }else{
                      toast.success("Added To Liked Videos")
                    }
                      

                    }} sx={{
                      width: "auto",
                      height: "35px",
                      color: color1 ? "blue" : "white",
                      marginRight: "20px",
                    }} />
                  </button>
                  <button onClick={() => {
                    setcolor(!color)
                    setcolor1(false)
                    if(color){
                      toast.success("Dislike Removed")
                    }else{
                      toast.error("You Disliked This Video")
                    }


                  }} >
                    <ThumbDownIcon sx={{
                      width: "auto",
                      height: "35px",
                      color: color ? "blue" : "white",
                      marginRight: "5px",
                    }} />
                  </button>
                </div>
              </span>

            </Stack>


          </Box>
        </Box>
        <Box px={1} py={{ md: 1, xs: 5 }}
          mr='7px'
          justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;