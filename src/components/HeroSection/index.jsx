import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import { HeroContainer, HeroBg, HeroContent,HeroH1 } from './HeroElements'

const HeroSection = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          baseColor: 0x2626b9,
          backgroundColor: 0x0,
          xOffset: 0,
          size: 1.5
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <HeroContainer>
      <HeroBg ref={myRef}></HeroBg>
      <HeroContent>
        <HeroH1>NFT Collection</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection