import React, { Fragment, useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import { HeroContainer, HeroBg, VideoBg, HeroContent,Glitch,Span } from './HeroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    // <HeroContainer>
    //   <HeroBg>
    //     <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
    //   </HeroBg>
    //   <HeroContent>
    //       <Glitch>
    //         <Span aria-hidden="true">Hello World</Span>
    //         Hello World
    //         <Span aria-hidden="true">Hello World</Span>
    //       </Glitch>
    //   </HeroContent>

    // </HeroContainer>
    <Fragment>
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        ref={myRef}
      ></div>
    </Fragment>
  );
}

export default HeroSection