import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';  
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';


const Metadata = () => { 
    return (
        <>
            {/* Header */}
            <Header subPageCheck="header--sub" />
            
            {/* Contents Body */}
            <main className="content">
                
                {/* Page Title */}
                <PageHeader mainTitle="메타데이터" /> 
                
                {/* Location */}
                <div className="content-path">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="/observatory/stations" className="link">
                        지진관측소</Link>
                        <strong className="stay">메타데이터</strong> 
                    </p>
                </div>

                {/* Content */}
                <section className="content-wrap"> 
                    <h3 className="hide">메타데이터 다운로드</h3> 
                    <p className="text-error">
                        <span>?</span>로그인이 필요한 서비스입니다.
                        <button type="button" className="text-error__close"><span>닫기</span></button>
                    </p>
                    <p className="text-notice"><span>?</span>서비스 중인 지진관측자료의 메타데이터(2016년 이후, 변경이력 포함) 다운로드 기능을 제공합니다.</p>
                    
                    <table className="table-view table-view--topline" summary="메타데이터 검색 조건">
                        <colgroup>
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} /> 
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">관측소</th>
                                <td>
                                    <div className="formbox">
                                        <label className="radio">
                                            <input type="radio" name="selectorType" />
                                            <span>전체</span>
                                        </label>
                                    </div>
                                    <div className="formbox">
                                        <span className="formbox__col">
                                            <label className="radio">
                                                <input type="radio" name="selectorType" />
                                                <span>위도<span className="pc">범위</span></span>
                                            </label>
                                            <input type="text" className="entry" placeholder="35.0" /> ~
                                            <input type="text" className="entry" placeholder="38.0" />
                                        </span>

                                        <span className="formbox__col">
                                            <label className="radio radio__noshow">
                                                <input type="radio" name="selectorType" disabled />
                                                <span>경도<span className="pc">범위</span></span>
                                            </label>
                                            <input type="text" className="entry" placeholder="126.0" /> ~ 
                                            <input type="text" className="entry" placeholder="129.0" />
                                        </span>
                                        <span className="text-caution __error"><span>!</span>위도 범위를 입력해주세요.</span>
                                    </div>
                                    <div className="formbox">
                                        <span className="formbox__col">
                                            <label className="radio">
                                                <input type="radio" name="selectorType" />
                                                <span><span className="pc">위경도</span>중심</span>
                                            </label>
                                            <input type="text" className="entry" placeholder="36.3" />, 
                                            <input type="text" className="entry" placeholder="127.5" />
                                        </span>
                                        <span className="formbox__col">
                                            <label className="radio radio__noshow">
                                                <input type="radio" name="selectorType" disabled />
                                                <span>반경</span>
                                            </label>
                                            <input type="text" className="entry" placeholder="30" /> km
                                        </span>
                                    </div>
                                    <div className="formbox">
                                        <span className="formbox__col">
                                            <label className="radio">
                                                <input type="radio" name="selectorType" />
                                                <span>직접 선택</span>
                                            </label>
                                            <span className="btn">
                                                <button type="button" className="button-small">전체선택</button>
                                                <button type="button" className="button-small">전체해제</button>
                                            </span>
                                        </span>
                                        <div className="formbox__multi">
                                            <div className="search">
                                                <span>검색</span> <input type="text" placeholder="입력하세요" className="search_entry" />
                                            </div>
                                            <ul>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>AJD (안좌도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>BBK (방방골)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>BGD (보길도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>BOG (봉계)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>BRN (북백령도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>BRS (남백령도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>CGD (청도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>CGU (천군)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>CHNB (철원)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>CHS (청송)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>CRB (원주KSRS)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>DES (덕성)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>DKJ (덕정리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>DOKDO (독도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>DUC (덕천)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>GCN (건천)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>GHR (가학리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>GKP1 (경북대)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>GKP2 (경북대)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>GRE (구례)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>GSU (경상대)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>HAK (학계리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>HCH (학천)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>HDB (효동리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>HKU (교원대)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>HSB (홍성)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>HWSB (화순)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>IBA (입암산)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>JJB (제주도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>JRB (지리산)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>JSB (정선)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>JUC (죽천)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>KIP (김포)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>KJM (거제)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>KMC (김천)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>KNUC (강원대 춘천)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>KNUD (도계)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>KSA (간성)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>MAK (매곡리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>MGB (문경)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>MKL (명계리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>MRD (마라도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>MUN (무안)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>NPR (나포리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>OJR (옥정리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>PCH (포천)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>PKNU (부경대)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>POHB (포항)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>POSB (포항공대)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>SIG (신계)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>SND (상동)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>SNU (서울대)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>TJN (대전)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>UNI (울산과기원)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>WDL (원달리)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>WID (위도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>YIN (용인)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>YKB (양구)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>YPD (연평도)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>YSB (양산)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>YSUK (연세대 국제)</span></label></li>
                                                <li><label className="checkbox"><input type="checkbox" name="selectorType" /><span>YSUM (연세대 미래)</span></label></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </td> 
                            </tr> 
                            <tr>
                                <th scope="row">자료 형식</th>
                                <td>
                                    <div className="formbox">
                                        <label className="radio"><input type="radio" name="dataType" /><span>StationXML</span></label>
                                        <label className="radio"><input type="radio" name="dataType" /><span>SACPZ</span></label> 
                                    </div> 
                                    <p className="text-caution"><span>!</span>메타데이터 업데이트: 2023-04-27</p>
                                </td> 
                            </tr> 
                        </tbody>
                    </table>
                    <div className="button-area">
                        <Link to="/" className="button-big">다운로드</Link>
                    </div>
                </section>
                
            </main>
            
            {/* Footer */}
            <Footer /> 
        </>
    );
};
export default Metadata;