import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    height:800px;
    position:relative;
    z-index:1;
`

export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    width:100%;
    height: 100%;
    overflow:hidden;
`
export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`

export const HeroContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Heading = keyframes`
 0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
`;
export const Glitch = styled.p`
  font-size: 5rem;
  text-align:center;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;

  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: ${Heading} 500ms infinite;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Span = styled.span`
position: absolute;
  top: 0;
  left: 0;
  &:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}
&:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}
`