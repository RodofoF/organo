import styled from 'styled-components'
import banner from '../imagens/banner.png'

const BannerContainer = styled.header`
    background-color: #6278F7;
    text-align: center;
`
const BannerImg = styled.img`
    max-width: 100%;
`

function Banner (){
    return(
        <BannerContainer>
            <BannerImg src={banner} alt="Banner"/>
        </BannerContainer>
    )
}

export default Banner