import React from "react";
import { Stack, Box } from "@mui/material";
import "./Videos.css";

import {  Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack className="stack1" direction={direction || "row"} 
    flexWrap="wrap" justifyContent="center"
     alignItems="center" gap={2} >

      {videos.map((item, idx) => (
        <Box className="box" key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;