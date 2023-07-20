import React, { useState } from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';  
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';


const EventData = () => { 
    const [isShown, setIsShown] = useState(false);
    const openModal = () =>{
        setIsShown(current => !current);
    }
    const [isShown2, setIsShown2] = useState(false);
    const openModal2 = () =>{
        setIsShown2(current => !current);
    }
    return (
        <>
            {/* Header */}
            <Header subPageCheck="sub_header" />
            
            {/* Contents Body */}
            <main className="data_container">
                
                {/* Page Title */}
                <PageHeader mainTitle="연속파형자료" />  
                
                {/* Location */}
                <div className="location_wrap">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="/data/EventData" className="link">
                        지진관측자료</Link>
                        <strong className="stay">연속파형자료</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <section className="continuousdata_wrap"> 
                    <h3 className="hide">연속파형자료 조회</h3>  
                    <p className="text_notice"><span>?</span>관측소(채널) 단위의 연속파형자료 검색 및 다운로드 기능을 제공합니다.</p>
                    
                    <table className="table_view bdt2 metadata" summary="연속파형자료 조회 조건 선택">
                        <colgroup>
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} /> 
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scpoe="row">관측소</th>
                                <td>
                                    <div className="form_box">
                                        <label className="radio_01"><input type="radio" name="selectorType" /><span>전체</span></label>
                                    </div>
                                    <div className="form_box">
                                        <label className="radio_01"><input type="radio" name="selectorType" /><span>위도 범위</span></label>
                                        <input type="text" className="entry" /> ~ <input type="text" className="entry" />
                                        <span className="box">
                                            <strong>경도 범위</strong>
                                            <input type="text" className="entry" /> ~ <input type="text" className="entry" />
                                        </span>
                                        <span className="text_cation"><span>!</span> 위도 범위를 입력해주세요.</span>
                                    </div>
                                    <div className="form_box">
                                        <label className="radio_01"><input type="radio" name="selectorType" /><span>위경도 중심</span></label>
                                        <input type="text" className="entry" />, <input type="text" className="entry" />
                                        <span className="box">
                                            <strong>반경</strong>
                                            <input type="text" className="entry" /> km
                                        </span>
                                    </div>
                                    <div className="form_box">
                                        <label className="radio_01"><input type="radio" name="selectorType" /><span>직접 선택</span></label>
                                        <span className="btn">
                                            <button type="button" className="btn_small">전체선택</button>
                                            <button type="button" className="btn_small">전체해제</button>
                                        </span>
                                        <div className="extend_menu">
                                            <div className="search">
                                                <span>검색</span> <input type="text" placeholder="입력하세요" className="search_entry" />
                                            </div>
                                            <ul>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>AJD (안좌도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>BBK (방방골)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>BGD (보길도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>BOG (봉계)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>BRN (북백령도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>BRS (남백령도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>CGD (청도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>CGU (천군)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>CHNB (철원)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>CHS (청송)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>CRB (원주KSRS)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>DES (덕성)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>DKJ (덕정리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>DOKDO (독도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>DUC (덕천)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>GCN (건천)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>GHR (가학리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>GKP1 (경북대)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>GKP2 (경북대)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>GRE (구례)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>GSU (경상대)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>HAK (학계리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>HCH (학천)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>HDB (효동리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>HKU (교원대)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>HSB (홍성)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>HWSB (화순)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>IBA (입암산)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>JJB (제주도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>JRB (지리산)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>JSB (정선)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>JUC (죽천)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>KIP (김포)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>KJM (거제)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>KMC (김천)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>KNUC (강원대 춘천)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>KNUD (도계)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>KSA (간성)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>MAK (매곡리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>MGB (문경)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>MKL (명계리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>MRD (마라도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>MUN (무안)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>NPR (나포리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>OJR (옥정리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>PCH (포천)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>PKNU (부경대)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>POHB (포항)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>POSB (포항공대)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>SIG (신계)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>SND (상동)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>SNU (서울대)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>TJN (대전)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>UNI (울산과기원)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>WDL (원달리)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>WID (위도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>YIN (용인)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>YKB (양구)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>YPD (연평도)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>YSB (양산)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>YSUK (연세대 국제)</span></label></li>
                                                <li><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>YSUM (연세대 미래)</span></label></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </td> 
                            </tr> 
                            <tr>
                                <th scpoe="row">채널</th>
                                <td>
                                    <div className="form_box">
                                        <label className="radio_01"><input type="radio" name="magnitude" /><span>전체</span></label>
                                    </div>  
                                    <div className="form_box">
                                        <label className="radio_01"><input type="radio" name="magnitude" /><span>조건 설정</span></label>
                                        <ul className="extend">
                                            <li>
                                                <span className="col">Sample Rate:</span>
                                                <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>20 sps</span></label></span>
                                                <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>100 sps</span></label></span> 
                                            </li>
                                            <li>
                                                <span className="col">설치 위치:</span>
                                                <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>지표면</span></label></span>
                                                <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>시추공</span></label></span> 
                                            </li>
                                            <li>
                                                <span className="col">센서 종류:</span>
                                                <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>속도(단주기)</span></label></span>
                                                <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>속도(광대역)</span></label></span> 
                                                <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>가속도</span></label></span> 
                                            </li>
                                        </ul>
                                    </div>  
                                    <div className="form_box">
                                        <label className="radio_01"><input type="radio" name="magnitude" /><span>직접입력</span></label>
                                        <input type="text" className="entry" style={{"width":"150px"}} placeholder="HG?, HA?" />
                                    </div>  
                                    <div className="form_box">
                                        <button type="button" className="btn_medium" onClick={openModal}>선택 채널 목록 보기</button>
                                    </div>
                                </td> 
                            </tr> 
                            <tr>
                                <th>자료 시간</th>
                                <td> 
                                    <div className="form_box"> 
                                        <input type="text" title="입력 형식:
2022-01-01
2022-01-01 10:00:00
2022-01-01 10:00:00.000" className="entry date" placeholder="2022-01-01 10:00:00" /> ~ <input type="text" title="입력 형식:
2022-01-01
2022-01-01 10:00:00
2022-01-01 10:00:00.000" className="entry date" placeholder="2022-01-01 10:00:00" />
                                    </div> 
                                    <ul className="extend form_box">
                                        <li>
                                            <span className="col">Timezone:</span>
                                            <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>KST</span></label></span>
                                            <span className="col"><label className="checkbox_02"><input type="checkbox" name="selectorType" /><span>UTC</span></label></span> 
                                        </li> 
                                    </ul>
                                    <p className="text_cation_02"><span>!</span>2016년 이후 자료를 서비스하고 있으며, 신규 자료는 1~2일 이후에 다운로드 할 수 있습니다.</p>
                                    <p className="text_cation_02"><span>!</span>한번에 최대 3일 자료를 다운로드 할 수 있습니다.</p>
                                    <p className="text_cation_02"><span>!</span>많은 자료를 한 번에 요청할 경우 로딩시간이 길어집니다. (브라우저 내부적으로 다운로드가 완료된 후 파일 다운로드가 시작됩니다.)</p>
                                    <p className="text_cation_02"><span>!</span>좀 더 다양한 조건으로 기간 제한 없이 다운로드를 받고 싶으시면 <a href="/quake/openapi/fdsnws">Web Services(FDSNWS)</a>를 이용 부탁드립니다.</p>
                                    <div className="form_box">
                                        <button type="button" className="btn_medium" onClick={openModal2}>가용률 보기</button>
                                    </div>
                                </td> 
                            </tr>  
                        </tbody>
                    </table>
                    <section className="section_01">
                        <h4 className="sub_title">자료 형식</h4>
                        <ul>
                            <li><label className="radio_01"><input type="radio" name="selectorType" /><span>miniSEED</span></label></li>
                            <li><label className="radio_01"><input type="radio" name="selectorType" /><span>SAC</span></label></li>
                            <li><label className="radio_01"><input type="radio" name="selectorType" /><span>GeoCSV (ASCII)</span></label></li>
                        </ul>
                    </section>
                    <section className="section_01">
                        <h4 className="sub_title">활용 목적</h4>
                        <ul>
                            <li><label className="radio_01"><input type="radio" name="selectorType" /><span>연구(자연과학)</span></label></li>
                            <li><label className="radio_01"><input type="radio" name="selectorType" /><span>연구(공학)</span></label></li>
                            <li><label className="radio_01"><input type="radio" name="selectorType" /><span>설계</span></label></li>
                            <li><label className="radio_01"><input type="radio" name="selectorType" /><span>교육</span></label></li>
                            <li><label className="radio_01"><input type="radio" name="selectorType" /><span>기타</span></label></li>
                        </ul>
                    </section>
                    <div className="btn_wrap">
                        <Link to="/" className="btn_big">다운로드</Link>
                    </div>
                      
                </section>
                
            </main>
            
            {/* 선택 채널 목록 popup */}
            <div className={ isShown ? 'modal_popup show' : 'modal_popup'}>
                <section className="modal">
                    <h2>선택 채널 목록</h2> 
                    <div className="detail_popup">
                        <div className="table_hd">
                            <p>총 0건</p> 
                        </div>
                        <div className="table_list line">
                            <table summary="">
                                <colgroup>
                                    <col style={{"width":"20%"}} />
                                    <col style={{"width":"20%"}} />
                                    <col style={{"width":"20%"}} />
                                    <col style={{"width":"40%"}} />
                                </colgroup>
                                <thead>
                                    <tr> 
                                        <th>관측소 코드</th> 
                                        <th>관측소명</th>
                                        <th>위치 코드</th>
                                        <th>선택 채널</th>
                                    </tr>  
                                </thead>
                                <tbody>
                                    <tr> 
                                        <td>AJD</td> 
                                        <td>안좌도</td>
                                        <td>&nbsp;</td> 
                                        <td>BGE, BGN, BGZ, ELE, ELN, ELZ, HGE, HGN, HGZ, SLE, SLN, SLZ</td>
                                    </tr>  
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <button type="button" className="btn_close" onClick={openModal}><span>닫기</span></button>
                </section>
            </div>
            
            {/* 가용률 popup */}
            <div className={ isShown2 ? 'modal_popup show' : 'modal_popup'}>
                <section className="modal">
                    <h2>가용률</h2> 
                    <div className="detail_popup">
                        <div className="table_hd">
                            <p>총 0건</p> 
                            <p className="rtl">(초록색: ≥ 98%, 주황색: ≥ 90%, 빨간색: &gt; 90%, 회색: 0%)</p>
                        </div>
                        <div className="table_list line">
                            <table summary="">
                                <colgroup>
                                    <col style={{"width":"20%"}} />
                                    <col style={{"width":"20%"}} />
                                    <col style={{"width":"20%"}} />
                                    <col style={{"width":"20%"}} />
                                    <col style={{"width":"20%"}} />
                                </colgroup>
                                <thead>
                                    <tr> 
                                        <th>관측소 코드</th> 
                                        <th>관측소 명</th>
                                        <th>위치 코드</th>
                                        <th>선택 채널</th>
                                        <th>
                                            가용률 
                                            <span className="tolltip">
                                                <button type="button" className="text_notice"><span>?</span></button>
                                                <div className="cont">
                                                    <strong>가용률 표기 안내</strong>
                                                    <span>- 98% 이상 초록색<br /> - 90% 이상 주황색<br /> - 90% 미만 빨간색<br /> - 0% 회색</span>
                                                </div>
                                            </span>
                                        </th>
                                    </tr>  
                                </thead>
                                <tbody>
                                    <tr className="grade_4"> 
                                        <td>AJD</td> 
                                        <td>안좌도</td>
                                        <td>&nbsp;</td> 
                                        <td>BGE</td>
                                        <td>95%</td>
                                    </tr>  
                                    <tr className="grade_3"> 
                                        <td>AJD</td> 
                                        <td>안좌도</td>
                                        <td>&nbsp;</td> 
                                        <td>BGE</td>
                                        <td>70%</td>
                                    </tr>  
                                    <tr className="grade_2"> 
                                        <td>AJD</td> 
                                        <td>안좌도</td>
                                        <td>AA</td> 
                                        <td>BGE</td>
                                        <td>69%</td>
                                    </tr>  
                                    <tr className="grade_1"> 
                                        <td>AJD</td> 
                                        <td>안좌도</td>
                                        <td>&nbsp;</td> 
                                        <td>BGE</td>
                                        <td>0%</td>
                                    </tr>  
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <button type="button" className="btn_close" onClick={openModal2}><span>닫기</span></button>
                </section>
            </div>
            
            {/* Footer */}
            <Footer /> 
        </>
    );
};
export default EventData;