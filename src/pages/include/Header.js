import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
const Header = (props) => {  
    const menuData = [
        {
          id: 1,
          title: '소개',
          link:'',
          className : 'link menu1',
          subMenu: [
            { id: 11, title: '서비스 소개', link:'/intro/About' },
            { id: 12, title: '이용약관', link:'/intro/terms' },
            { id: 13, title: '공지사항', link:'/intro/notices' },
          ],
        },
        {
          id: 2,
          title: '지진관측소',
          link:'',
          className : 'link menu2',
          subMenu: [
            { id: 21, title: '관측소 정보', link:'/observatory/stations' },
            { id: 22, title: '메타데이터', link:'/observatory/metadata' },
          ],
        },
        {
          id: 3,
          title: '지진관측자료',
          link:'',
          className : 'link menu3',
          subMenu: [
            { id: 31, title: '이벤트파형자료', link:'/data/event-data' },
            { id: 32, title: '연속파형자료' , link:'/data/continuous-data'},
            { id: 33, title: 'Web Services', link:'/data/web-services' },
          ],
        },
        {
          id: 4,
          title: '지진분석정보',
          className : 'link menu4',
          link:'',
          subMenu: [
            { id: 41, title: '한반도 주요지진', link:'/analysis/major-earthquakes' },
            { id: 42, title: '지진학술연보' , link:'/analysis/annual-report'},
            { id: 43, title: 'K-ESM DB', link:'/analysis/kesmdb' },
          ],
        }
      ];
    const [openSubMenuId, setOpenSubMenuId] = useState(null); 
    const [isGnbToggle, setGnbToggle] = useState(false); 
    const hambugerMenuSwitchHandler = () => {
      setGnbToggle(!isGnbToggle);
      setOpenSubMenuId(1);
    };
    const gnbMenuSwitchHandler = (val) => {
        setGnbToggle(val);
    };
    const handleMenuClick = (id) => {
      setOpenSubMenuId(id); 
      gnbMenuSwitchHandler(true);
    };
   
    const handleMouseLeave = () => { 
      gnbMenuSwitchHandler(false);
      setOpenSubMenuId(null)
    };
    return (
        <>
            <p className="a11y_link"><a href="#body_container">본문 바로가기</a></p>
            <header onMouseLeave={handleMouseLeave}  className={isGnbToggle ? 'header_container active ' + props.subPageCheck : 'header_container ' + props.subPageCheck  }>{/* 오픈 상태일때는 active */}
                <div className="inner">
                    <h1 className="logo"><Link to="/" className="parents">지오빅데이터 오픈플랫폼</Link><Link to="/" className="index">지진연구정보</Link></h1>
                    <nav className={ isGnbToggle ? "close" : ""}> {/* 오픈 상태일때는 close */}
                        <ul>
                        {menuData.map((menu) => (
                            <li
                                key={menu.id}
                                className={ openSubMenuId === menu.id ? 'on' : ''}
                                onMouseOver={() => handleMenuClick(menu.id)}
                                onClick={() => handleMenuClick(menu.id)}
                            >
                                <Link className={menu.className} to={menu.link}> {menu.title}</Link> 
                                {menu.subMenu.length > 0 && (
                                <div className="sub_menu">
                                    <ul>
                                        {menu.subMenu.map((subMenu) => (
                                        <li key={subMenu.id}><Link to={subMenu.link}>{subMenu.title}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                )}
                            </li>
                            ))}
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
                    <button type="button" className="btn_ham" onClick={hambugerMenuSwitchHandler}><span>{isGnbToggle  ? '메뉴 닫기' : '메뉴 열기'}</span></button>
                </div>
            </header>
        </>
    );
};

Header.defaultProps = {
  subPageCheck: " "
};
export default Header;