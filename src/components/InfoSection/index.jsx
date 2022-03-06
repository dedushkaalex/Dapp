import React from 'react'
import { Button } from '../ButtonElements'
import {
    InfoContainer,
    InfoWrapper,
    BtnWrap,
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    Subtitle,
    TextWrapper,
    TopLine,
    InfoRow

} from './InfoElements'

const InfoSection = ({ lightBg, id, imgStart,  topLine_1, topLine_2, topLine_3, topLine_4,lightText,violetText, headline,
    darkText, description, buttonLabel, img, alt, dark,dark2,primary}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine violetText={violetText}>{ topLine_1}</TopLine>
                                <TopLine>{ topLine_2}</TopLine>
                                <TopLine violetText={violetText}>{ topLine_3}</TopLine>
                                <TopLine violetText={violetText}>{ topLine_4}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection