import useSWR from 'swr';
import styled from "styled-components";
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from 'react';

const buttonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`
const URLShareButton = styled.button`
	width: 30px;
	height: 30px;
	color: white;
	border-radius: 20px;
	border: 0px;
	font-weight: 100;
	font-size: 10px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;

export default function View_article() {

    const kisadata = useSWR('/api/kisa');
    const kisa = kisadata.data;
    const kisabody = kisa.body;
    const img = kisa.img.data;

    const currentUrl = "http://localhost:3000";

    let bodydataRes;
    function stringToImg(i, num) {
        bodydataRes = i.replace(`[%%IMAGE${num}%%]`, `<div class="image0"><div class="image1" style={maxWidth:"659px;"}><div class="image2"><img src=${img[num - 1].url} /></div><div class="desc">${img[num - 1].desc}</div></div>`);
        if (img.length == num) {
            return bodydataRes;
        }
        num++;
        return stringToImg(bodydataRes, num);
    }
    stringToImg(kisabody, 1);
    
    const [controlfont, setControlfont] = useState(16);

    const increaseFont = () => {
        setControlfont(controlfont+=2);
    }
    const decreaseFont = () => {
        setControlfont(controlfont-=2);
    }

    return (
        <article>
            <div className="article-tools">
                <buttonContainer>
                    <FacebookShareButton url={currentUrl}>
                        <FacebookIcon size={30} round={true} borderRadius={30}></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton url={currentUrl}>
                        <TwitterIcon size={30} round={true} borderRadius={30}></TwitterIcon>
                    </TwitterShareButton>
                    <CopyToClipboard text={currentUrl}>
                        <URLShareButton>URL</URLShareButton>
                    </CopyToClipboard>
                </buttonContainer>
                <p className="font">
                    <a title="글씨크게" className="large" onClick={() => {increaseFont()}}>
                        <span className="blind">크게</span>
                    </a>
                    <a title="글씨작게" className="small" onClick={() => {decreaseFont()}}>
                        <span className="blind">작게</span>
                    </a>
                </p>
            </div>
            
            <div className="article_body" style={{fontSize: `${controlfont}px`}}>
                <div className="text" dangerouslySetInnerHTML={{ __html: bodydataRes }}></div>
                {/* <Huwon_event /> */}
            </div>
        </article>
    )
}