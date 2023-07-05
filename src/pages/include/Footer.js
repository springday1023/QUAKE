import React from 'react'; 
const Footer = () => {
    return (
        <footer className="footer_container">
            <div className="quck_link">
                <a href="https://www.kigam.re.kr/menu.es?mid=a10906020000" target="_blank" rel="noreferrer">개인정보취급방침</a>
                <span className="bar">|</span>
                <a href="https://data.kigam.re.kr/about/email" target="_blank" rel="noreferrer">이메일집단수집거부</a>
                <span className="bar">|</span>
                <a href="https://data.kigam.re.kr/quake/intro/terms" target="_blank" rel="noreferrer">이용약관</a>
                <span className="bar">|</span>
                <a href="mailto:kquake@kigam.re.kr">이메일 문의 및 오류 신고</a>
            </div>
            <address>
                34132 대전광역시 유성구 과학로 124 한국지질자원연구원 TEL.042-868-3297, 3294 
                <span>Copyright 2021 KIGAM. All Right Reserved.</span>
            </address>
        </footer>
    );
};

export default Footer;