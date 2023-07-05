import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer'; 
import { Link } from 'react-router-dom'; 
import PageHeader from '../include/PageHeader';  
import Page from '../include/Page';  

const Notice = () => {
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
                    <h3 className="hide">공지사항 목록</h3>
                    <div className="search_wrap">
                        <div className="search_form">
                            <select>
                                <option>제목</option>
                                <option>작성자</option>
                                <option>본문</option>
                            </select>
                            <input type="text" />
                            <button className="btn_search"><span>검색</span></button>
                        </div>
                    </div>
                    <div className="table_list">
                        <table summary="공지사항입니다.">
                            <colgroup>
                                <col style={{"width":"60px"}} />
                                <col style={{"width":"auto"}} />
                                <col style={{"width":"120px"}} />
                                <col style={{"width":"150px"}} />
                                <col style={{"width":"100px"}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">NO.</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">작성자</th>
                                    <th scope="col">작성일</th>
                                    <th scope="col">첨부파일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td className="title"><Link to="/intro/noticesView"><strong>[중요]</strong> 이벤트 상세검색 기능 개선 안내(K-ESM DB 서비스 오픈)</Link></td>
                                    <td>관리자</td>
                                    <td>2022-12-23</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="title"><Link to="/intro/noticesView">FDSNWS 인증 오류 수정 안내</Link></td>
                                    <td>관리자</td>
                                    <td>2022-08-31</td>
                                    <td>
                                        <span className="file"><span>첨부파일</span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="title"><Link to="/intro/noticesView">FDSNWS 인증 오류 수정 안내</Link></td>
                                    <td>관리자</td>
                                    <td>2022-08-31</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="title"><Link to="/intro/noticesView">FDSNWS 인증 오류 수정 안내</Link></td>
                                    <td>관리자</td>
                                    <td>2022-08-31</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className="title"><Link to="/intro/noticesView">FDSNWS 인증 오류 수정 안내</Link></td>
                                    <td>관리자</td>
                                    <td>2022-08-31</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                    <div className="table_footer">
                        <Page />
                        <Link to="/intro/noticesWrite" className="btn_big rtl">글쓰기</Link>
                    </div>
                </section>
            </main>
            
            {/* Footer */}
            <Footer />
        </>
    );
};
export default Notice;