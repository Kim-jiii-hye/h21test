import styled from "styled-components";
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from "react-share";
import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`;
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


export default function View_article_toolbox() {

    const currentUrl = "http://localhost:3000";
    console.log('ddddd');
  
    return (
        <div className="article-tools">
            <ButtonContainer>
                <FacebookShareButton url={currentUrl}>
                    <FacebookIcon size={30} round={true} borderRadius={20}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton url={currentUrl}>
                    <TwitterIcon size={30} round={true} borderRadius={20}></TwitterIcon>
                </TwitterShareButton>
                <CopyToClipboard text={currentUrl}>
                    <URLShareButton>URL</URLShareButton>
                </CopyToClipboard>
                
            </ButtonContainer>
            <p class="font">
                <a href="#increase_font_size" title="글씨크게" className="large" onclick="javascript:increaseFontsize('.article_body'); return false;">
                    <span className="blind">크게</span>
                </a>
                <a href="#decrease_font_size" title="글씨작게" className="small" onclick="javascript:decreaseFontsize('.article_body'); return false;">
                    <span className="blind">작게</span>
                </a>
            </p>
        </div>
    )
}