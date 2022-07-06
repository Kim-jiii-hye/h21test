export default function Header() {
	return (
		<header id="viewHeader">
			<div className="header0">
				<div className="header1">
					<div className="header2">
						<div id="fb-root"></div>
						<ul className="sns">
							<li className="facebook"><div className="fb-like" data-href="https://www.facebook.com/hankyoreh21" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div></li>
						</ul>
						<div className="freind_site">
							<ul>
								<li><a href="//www.hani.co.kr" target="_blank"  rel="noopener noreferal" title="한겨레"><img src="//img.hani.co.kr/section-image/15/h21/image/link_hani.png" alt="한겨레21" /></a> <img src="//img.hani.co.kr/section-image/15/h21/image/link_split.png" alt="·" className="split" /></li>
								<li><a href="http://www.cine21.com/" target="_blank"  rel="noopener noreferal" title="씨네21"><img src="//img.hani.co.kr/section-image/15/h21/image/link_cine21.png" alt="씨네21" /></a> <img src="//img.hani.co.kr/section-image/15/h21/image/link_split.png" alt="·" className="split" /></li>
								<li><a href="http://www.economyinsight.co.kr/" target="_blank"  rel="noopener noreferal" title="이코노미인사이트"><img src="//img.hani.co.kr/section-image/15/h21/image/link_economyinsight.png" alt="이코노미인사이트" /></a> <img src="//img.hani.co.kr/section-image/15/h21/image/link_split.png" alt="·" className="split" /></li>
								<li><a href="https://nuri.hani.co.kr" target="_blank"  rel="noopener noreferal" title="하니누리"><img src="//img.hani.co.kr/section-image/15/h21/image/link_haninuri.png" alt="하니누리" /></a></li>
							</ul>
						</div>
						{/* <div className="login_on	hidden">
							<ul>
								<li><a className="link1" href="https://member.hani.co.kr/logout.php?url=<?=urlencode($this->url)?>" title="로그아웃"><img src="//img.hani.co.kr/section-image/15/h21/image/button_logout.png" alt="로그아웃" /></a></li>
								<li><a className="link2" href="https://member.hani.co.kr/help/user/info_edit.php" title="정보수정"><img src="//img.hani.co.kr/section-image/15/h21/image/button_modify.png" alt="정보수정" /></a></li>
							</ul>
						</div> */}
						<div className="login_off">
							<ul>
								<li><a className="link3" href="https://member.hani.co.kr/login.php" title="로그인"	><img src="//img.hani.co.kr/section-image/15/h21/image/button_login.png" alt="로그인" /></a></li>
								<li><a className="link4" href="https://member.hani.co.kr/join/join.php" title="회원가입"><img src="//img.hani.co.kr/section-image/15/h21/image/button_join.png" alt="회원가입" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}