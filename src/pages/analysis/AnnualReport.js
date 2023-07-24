import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';  
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';


const AnnualReport = () => { 
    return (
        <>
            {/* Header */}
            <Header subPageCheck="sub_header" />
            
            {/* Contents Body */}
            <main className="sub_container">
                
                {/* Page Title */}
                <PageHeader mainTitle="지진학술연보" /> 
                
                {/* Location */}
                <div className="location_wrap">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="/data/EventData" className="link">
                        지진분석정보</Link>
                        <strong className="stay">지진학술연보</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <section className="contents_wrap"> 
                    <h3 className="hide">지진학술연보 조회</h3>  
                    <p className="text_notice"><span>?</span>지진연구센터에서 발행한 지진학술연보의 다운로드 기능을 제공합니다.</p>
                    
                    <table className="table_view bdt2" summary="이벤트파형자료 조회 조건">
                        <colgroup>
                            <col style={{"width":"250px"}} />
                            <col style={{"width":"auto"}} /> 
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">연도</th>
                                <td>
                                    <div className="form_box">
                                        <label className="radio_01"><input type="radio" name="magnitude" /><span>2019</span></label>
                                        <label className="radio_01"><input type="radio" name="magnitude" /><span>2020</span></label> 
                                        <label className="radio_01"><input type="radio" name="magnitude" /><span>2021</span></label>  
                                    </div>  
                                </td> 
                            </tr> 
                        </tbody>
                    </table>
                    <div className="btn_wrap">
                        <Link to="/" className="btn_big">다운로드</Link>
                    </div>
                    <div className="print_earthquake">
                        내용 출력
                    </div>
                </section>
                
            </main>
            
            {/* Footer */}
            <Footer /> 
        </>
    );
};
export default AnnualReport;