import useSWR from 'swr';
import styled from "styled-components";
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";
import { useEffect, useState } from 'react';

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 8px;
    justify-content: center;
    align-items: center;

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

    useEffect(() => {
        if( typeof window !== 'undefined'){
            createKakaoButton();
        }
    }, [])

    const createKakaoButton = () => {
        if (window.Kakao) {
          const kakao = window.Kakao;
    
          if (!kakao.isInitialized()) {
            // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
            kakao.init(`e4535029ec4a0922a5042a26645178fc`);
          }
    
          kakao.Link.createDefaultButton({
            // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
              title: '타이틀',
              description: '#리액트 #카카오 #공유버튼',
              imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
              link: {
                mobileWebUrl: window.location.href,
                webUrl: window.location.href,
              },
            },
            social: {
              likeCount: 77,
              commentCount: 55,
              sharedCount: 333,
            },
            buttons: [
              {
                title: '웹으로 보기',
                link: {
                  mobileWebUrl: window.location.href,
                  webUrl: window.location.href,
                },
              },
              {
                title: '앱으로 보기',
                link: {
                  mobileWebUrl: window.location.href,
                  webUrl: window.location.href,
                },
              },
            ],
          })
        }
    }
    return (
        <article>
            <div className="article-tools">
                <ButtonContainer>
                    <FacebookShareButton url={currentUrl}>
                        <FacebookIcon size={30} round={true} borderRadius={30}></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton url={currentUrl}>
                        <TwitterIcon size={30} round={true} borderRadius={30}></TwitterIcon>
                    </TwitterShareButton>
                    <CopyToClipboard text={currentUrl}>
                        <URLShareButton>URL</URLShareButton>
                    </CopyToClipboard>
                    {/* Kakao share button */}
                    <div className="kakao-share-button">
                    {/* Kakao share button */}
                    <button id="kakao-link-btn">
                        <img src="/icons/kakao.png" alt="kakao-share-icon" />
                    </button>
                    </div>
                </ButtonContainer>
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