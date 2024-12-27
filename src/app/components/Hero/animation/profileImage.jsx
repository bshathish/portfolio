import * as motion from "motion/react-client"
import React from "react";
import myimg from "../../Assests/Img/portfolio.jpeg"
import Image from "next/image";
import { useTheme } from "@mui/material";

const ScrollTriggered = () => {
    return (
        <div style={container}>
                <Card/>
        </div>
    );
};

const Card = () => {
    const theme = useTheme();
    const background = theme?.palette?.imageBackground;

    return (
        <motion.div
            className={`card-container`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 1 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card" whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
                <Image src={myimg} alt="Image" style={{borderRadius:'20px', boxShadow: '0 0 20px #FE009D, 0 0 30px #FE009D', marginTop:'20px'}}/>
            </motion.div>
        </motion.div>
    );
};

const cardVariants = {
    offscreen: {
        y: 100,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const container = {
    maxWidth: 500,
    width: "100%",
};

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
};

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
    fontSize: 100,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "30% 50%",
};

export default ScrollTriggered;
