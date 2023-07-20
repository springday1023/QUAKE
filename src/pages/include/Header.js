import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
const Header = (props) => {  
    const [isHamToggle, setHamToggle] = useState(false);
    const hambugerMenuSwitchHandler = () => {
        setHamToggle(!isHamToggle);
    };
    return (
        <>
            <p className="a11y_link"><a href="#body_container">본문 바로가기</a></p>
            <header className={'header_container  active' + props.subPageCheck}>{/* 오픈 상태일때는 active */}
                <div className="inner">
                    <h1 className="logo"><Link to="/" className="parents">지오빅데이터 오픈플랫폼</Link><Link to="/" className="index">지진연구정보</Link></h1>
                    <nav className={isHamToggle ? "close" : ""}> {/* 오픈 상태일때는 close */}
                        <ul>
                            <li className="">{/* 오픈 상태일때는 on */}
                                <Link  className="link menu1" to="/intro/about">소개</Link>
                                <div className="sub_menu">
                                    <ul>
                                        <li><Link to="/intro/About">서비스 소개</Link></li>
                                        <li><Link to="/intro/terms">이용약관</Link></li>
                                        <li><Link to="/intro/notices">공지사항</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a className="link menu2" href="/observatory">지진관측소</a>
                                <div className="sub_menu">
                                    <ul>
                                        <li><a href="/observatory/stations">관측소 정보</a></li>
                                        <li><a href="/observatory/metadata">메타데이터</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a className="link menu3" href="/data">지진관측자료</a>
                                <div className="sub_menu">
                                    <ul>
                                        <li><a href="/data/event-data">이벤트파형자료</a></li>
                                        <li><a href="/data/continuous-data">연속파형자료</a></li>
                                        <li><a href="/data/web-services">Web Services</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a className="link menu4" href="/analysis">지진분석정보</a>
                                <div className="sub_menu">
                                    <ul>
                                        <li><a href="/analysis/major-earthquakes">한반도 주요지진</a></li>
                                        <li><a href="/analysis/annual-report">지진학술연보</a></li>
                                        <li><a href="/analysis/kesmdb">K-ESM DB</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="login_menu">
                                <button type="button" className="btn_login">로그인</button>
                                <div className="sub_menu">
                                    <p><strong>홍길동</strong>님</p>
                                    <Link to="#" className="btn_member">회원정보변경</Link>
                                </div>
                            </li>
                            <li>
                                <button type="button" className="btn_language">English</button>
                            </li>
                        </ul>
                    </nav>
                    <button type="button" className="btn_ham" onClick={hambugerMenuSwitchHandler}><span>{isHamToggle  ? '메뉴 닫기' : '메뉴 열기'}</span></button>
                </div>
            </header>
        </>
    );
};

export default Header;