import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';  
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';


const MajorEarthquakes = () => { 
    return (
        <>
            {/* Header */}
            <Header subPageCheck="header--sub" />
            
            {/* Contents Body */}
            <main className="content">
                
                {/* Page Title */}
                <PageHeader mainTitle="한반도 주요지진" /> 
                
                {/* Location */}
                <div className="content-path">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="/data/EventData" className="link">
                        지진분석정보</Link>
                        <strong className="stay">한반도 주요지진</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <section className="content-wrap"> 
                    <h3 className="hide">한반도 주요지진 조회</h3>  
                    <p className="text-notice"><span>?</span>최근 발생한 한반도 주요 지진 및 여진에 대한 확대/축소/돌려보기 기능을 제공합니다.</p>
                    
                    <table className="table-view table-view--topline" summary="이벤트파형자료 조회 조건">
                        <colgroup>
                            <col style={{"width":"250px"}} />
                            <col style={{"width":"auto"}} /> 
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">지진</th>
                                <td>
                                    <div className="formbox">
                                        <label className="radio"><input type="radio" name="magnitude" /><span>2016 경주 지진</span></label>
                                        <label className="radio"><input type="radio" name="magnitude" /><span>2017 포항 지진</span></label> 
                                        <label className="radio"><input type="radio" name="magnitude" /><span>2020 해남 지진</span></label>  
                                    </div>  
                                </td> 
                            </tr> 
                        </tbody>
                    </table>
                    <div className="button-area">
                        <Link to="/" className="button-big">자료 조회</Link>
                    </div>
                    <div className="board-view">
                        내용 출력
                    </div>
                </section>
                
            </main>
            
            {/* Footer */}
            <Footer /> 
        </>
    );
};
export default MajorEarthquakes;