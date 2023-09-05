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
            <Header subPageCheck="header--sub" />
            
            {/* Contents Body */}
            <main className="content">
                
                {/* Page td-title */}
                <PageHeader mainTitle="공지사항" />  
                
                {/* Location */}
                <div className="content-path">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="intro/about" className="link">
                        소개</Link>
                        <strong className="stay">공지사항</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <section className="content-wrap">
                    <div className="page-notice">
                        <h3 className="hide">공지사항 목록</h3>
                        <div className="serch-form">
                            <div className="serch-form__inner">
                                <select>
                                    <option>제목</option>
                                    <option>작성자</option>
                                    <option>본문</option>
                                </select>
                                <input type="text" />
                                <button className="btn-search"><span>검색</span></button>
                            </div>
                        </div>
                        <div className="table-list">
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
                                        <td className="td-title"><Link to="/intro/noticesView"><strong>[중요]</strong> 이벤트 상세검색 기능 개선 안내(K-ESM DB 서비스 오픈)</Link></td>
                                        <td>관리자</td>
                                        <td>2022-12-23</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className="td-title"><Link to="/intro/noticesView">FDSNWS 인증 오류 수정 안내</Link></td>
                                        <td>관리자</td>
                                        <td>2022-08-31</td>
                                        <td>
                                            <span className="td-file"><span>첨부파일</span></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="td-title"><Link to="/intro/noticesView">FDSNWS 인증 오류 수정 안내</Link></td>
                                        <td>관리자</td>
                                        <td>2022-08-31</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="td-title"><Link to="/intro/noticesView">FDSNWS 인증 오류 수정 안내</Link></td>
                                        <td>관리자</td>
                                        <td>2022-08-31</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td className="td-title"><Link to="/intro/noticesView">FDSNWS 인증 오류 수정 안내</Link></td>
                                        <td>관리자</td>
                                        <td>2022-08-31</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                        <div className="table-foot">
                            <Page />
                            <div className="table-foot__rtl">
                                <Link to="/intro/noticesWrite" className="button-big">글쓰기</Link>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
            
            {/* Footer */}
            <Footer />
        </>
    );
};
export default Notice;