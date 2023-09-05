import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer'; 
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';

const NoticeView = () => {
    return (
        <>
            {/* Header */}
            <Header subPageCheck="header--sub" />
            
            {/* Contents Body */}
            <main className="content">
                
                {/* Page Title */}
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
                        <table className="table-view">
                            <colgroup>
                                <col style={{"width":"150px"}} />
                                <col style={{"width":"auto"}} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>제목</th>
                                    <td>
                                        <input type="text" className="entry_title" placeholder="제목을 입력해주세요." />
                                    </td>
                                </tr> 
                            </tbody>
                        </table>
                        <table className="table-view">
                            <colgroup>
                                <col style={{"width":"150px"}} />
                                <col style={{"width":"auto"}} /> 
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>첨부파일</th>
                                    <td>
                                        <div className="file-list">
                                            <p>
                                                <Link href="#">image01.jpg (5.3 KB)</Link>
                                                <button type="button" class="file-list__del"><span>삭제</span></button>
                                            </p>
                                            <p>
                                                <Link href="#">file02.jpg (100.3 KB)</Link>
                                                <button type="button" class="file-list__del"><span>삭제</span></button>
                                            </p>
                                        </div>
                                        <button type="button" className="button-upload">첨부파일 선택</button>
                                    </td> 
                                </tr> 
                            </tbody>
                        </table> 
                        <div className="board-editor"> 
                            에디터
                        </div>
                        <div className="button-area">
                            <Link to="/intro/Notices" className="button-big">목록</Link>
                            <Link to="/intro/Notices" className="button-big">작성완료</Link>
                        </div>
                    </div>
                </section>
                
            </main>
            
            {/* Footer */}
            <Footer />
        </>
    );
};
export default NoticeView;