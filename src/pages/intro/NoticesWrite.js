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
                    <table className="table_view">
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
                    <table className="table_view">
                        <colgroup>
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} /> 
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>첨부파일</th>
                                <td>
                                    <div className="file_list">
                                        <p className="file">
                                            <Link hrfe="#">image01.jpg (5.3 KB)</Link>
                                            <button type="button"><span>삭제</span></button>
                                        </p>
                                        <p className="file">
                                            <Link hrfe="#">file02.jpg (100.3 KB)</Link>
                                            <button type="button"><span>삭제</span></button>
                                        </p>
                                    </div>
                                    <button type="button" className="btn_fileUpload">첨부파일 선택</button>
                                </td> 
                            </tr> 
                        </tbody>
                    </table> 
                    <div className="content_editor"> 
                        에디터
                    </div>
                    <div className="btn_wrap">
                        <Link to="/intro/Notices" className="btn_big">목록</Link>
                        <Link to="/intro/Notices" className="btn_big">작성완료</Link>
                    </div>
                </section>
            </main>
            
            {/* Footer */}
            <Footer />
        </>
    );
};
export default NoticeView;