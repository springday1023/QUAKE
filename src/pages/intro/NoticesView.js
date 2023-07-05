import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer'; 
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';

const NoticeView = () => {
    return (
        <>
            {/* Header */}
            <Header subPageCheck="sub_header" />
            
            {/* Contents Body */}
            <main className="intro_container">
                
                {/* Page Title */}
                <PageHeader mainTitle="공지사항" />  
                
                {/* Location */}
                <div className="location_wrap">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="intro/about" className="link">
                        소개</Link>
                        <strong className="stay">공지사항</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <section className="notices_wrap">
                    <h3 className="hide">공지사항 상세</h3>
                    <table className="table_view">
                        <colgroup>
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>제목</th>
                                <td>
                                    <strong className="imp">[중요]</strong> 이벤트 상세검색 기능 개선 안내(K-ESM DB 서비스 오픈)
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                    <table className="table_view">
                        <colgroup>
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} />
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} />
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>작성자</th>
                                <td>관리자</td>
                                <th>작성</th>
                                <td>2021.01.01</td>
                                <th>조회수</th>
                                <td>30</td>
                            </tr> 
                        </tbody>
                    </table>
                    <table className="table_view">
                        <colgroup>
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>첨부파일</th>
                                <td>
                                    <p className="file">
                                        <Link hrfe="#">image01.jpg (5.3 KB)</Link>
                                    </p>
                                    <p className="file">
                                        <Link hrfe="#">file02.jpg (100.3 KB)</Link>
                                    </p>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                    <div className="content_print">
                        기존 이벤트 상세검색 기능으로 서비스되던 이벤트 자료(가속도 관측기록)의 검색/내려받기 기능을 개선하고<br /> 
                        이를 지진분석정보 메뉴의 'K-ESM DB' 서비스로 오픈하였습니다.<br /><br />자세한 사항은 
                        <a href="https://kr.object.gov-ncloudstorage.com/kerc-kquake-public/manuals/K_EMS_DB_manual_latest.pdf" target="_blank" rel="noreferrer">K-ESM DB 매뉴얼</a>을 참고하시기 바랍니다.
                        <br /><br />
                        <a href="https://data.kigam.re.kr/quake/analysis/kesmdb">K-ESM DB 바로가기</a>
                        <br /><br />
                        관련 문의, 개선 의견, 오류 보고 등은 아래 이메일로 부탁드립니다.
                        <br />kquake@kigam.re.kr
                        <br /><br />
                        감사합니다.
                    </div>
                    <div className="btn_wrap">
                        <Link to="/intro/Notices" className="btn_big">목록</Link>
                    </div>
                </section>
            </main>
            
            {/* Footer */}
            <Footer />
        </>
    );
};
export default NoticeView;