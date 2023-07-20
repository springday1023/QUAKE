import React, { useState } from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';  
import PageHeader from '../include/PageHeader';  
import Page from '../include/Page';  
import { Link } from 'react-router-dom';


const AnnualReport = () => { 
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
            <main className="analysis_container">
                
                {/* Page Title */}
                <PageHeader mainTitle="K-ESM DB" /> 
                
                {/* Location */}
                <div className="location_wrap">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="/data/EventData" className="link">
                        지진분석정보</Link>
                        <strong className="stay">K-ESM DB</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <section className="kesmdb_wrap"> 
                    <h3 className="hide">K-ESM DB 조회</h3>  
                    <p className="text_notice"><span>?</span>K-ESM (KIGAM Engineering Strong Motion) DB는 관측소 단위의 가속도 관측기록의 검색, 가공 및 다운로드 기능을 제공합니다.</p>
                    
                    <table className="table_view bdt2 metadata" summary="K-ESM DB 조회 조건">
                        <colgroup>
                            <col style={{"width":"250px"}} />
                            <col style={{"width":"auto"}} /> 
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    이벤트 
                                    <span className="text_quote">기상청 국내지진 목록에 기반함</span>
                                </th>
                                <td>
                                    <div className="form_box">
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>기간</span></label> 
                                        <span className="group_m">
                                            <input type="text" className="entry date" placeholder="2020.01.01" /> ~ <input type="text" className="entry date" placeholder="2020.01.01" />
                                        </span>
                                    </div>  
                                    <div className="form_box">
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>규모</span></label> 
                                        <span className="group_m">
                                            <input type="text" className="entry" placeholder="0" /> ~ <input type="text" className="entry" placeholder="0" />
                                        </span>
                                    </div>  
                                     
                                    <div className="form_box flex_box m_flex_none"> 
                                        <label className="checkbox_01"><input type="checkbox" name="magnitude" /><span>위치</span></label>
                                        <div className="group_m">
                                            <div className="form_box"> 
                                                <label className="radio_01"><input type="radio" name="selectorType" /><span>위도 <span className="pc">범위</span></span></label>
                                                <input type="text" className="entry" placeholder="35" /> ~ <input type="text" className="entry" placeholder="38" />
                                                <span className="box">
                                                    <strong>경도 <span className="pc">범위</span></strong>
                                                    <input type="text" className="entry" placeholder="126" /> ~ <input type="text" className="entry" placeholder="129" />
                                                </span>
                                                <span className="text_cation"><span>!</span> 위도 범위를 입력해주세요.</span>
                                            </div>  
                                            <div className="form_box">
                                                <label className="radio_01"><input type="radio" name="selectorType" /><span><span className="pc">위경도</span> 중심</span></label>
                                                <input type="text" className="entry" placeholder="36.3" />, <input type="text" className="entry" placeholder="127.5" />
                                                <span className="box">
                                                    <strong>반경</strong>
                                                    <input type="text" className="entry" placeholder="30" /> km
                                                </span>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="form_box">
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>진원 깊이(km)</span></label> 
                                        <span className="group_m">
                                            <input type="text" className="entry" placeholder="0" /> ~ <input type="text" className="entry" placeholder="30" />
                                        </span>
                                    </div>  
                                     
                                </td> 
                            </tr> 
                            <tr>
                                <th scope="row">
                                    관측소 
                                </th>
                                <td> 
                                    <div className="form_box"> 
                                        <label className="radio_01"><input type="radio" name="period" /><span>조건 설정</span></label> 
                                    </div>
                                    <div className="form_box flex_box"> 
                                        <span className="text_label">위치 :</span>
                                        <div className="group_m">
                                            <div className="form_box"> 
                                                <label className="radio_01"><input type="radio" name="selectorType" /><span>위도<span className="pc"> 범위</span></span></label>
                                                <input type="text" className="entry" placeholder="35" /> ~ <input type="text" className="entry" placeholder="38" />
                                                <span className="box">
                                                    <strong>경도<span className="pc"> 범위</span></strong>
                                                    <input type="text" className="entry" placeholder="126" /> ~ <input type="text" className="entry" placeholder="129" />
                                                </span>
                                                <span className="text_cation"><span>!</span> 위도 범위를 입력해주세요.</span>
                                            </div>  
                                            <div className="form_box">
                                                <label className="radio_01"><input type="radio" name="selectorType" /><span><span className="pc">위경도 </span>중심</span></label>
                                                <input type="text" className="entry" placeholder="36.3" />, <input type="text" className="entry" placeholder="127.5" />
                                                <span className="box">
                                                    <strong>반경</strong>
                                                    <input type="text" className="entry" placeholder="30" /> km
                                                </span>
                                            </div>
                                        </div>
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
                                <th scope="row">
                                    관측 기록 
                                    <span className="text_quote">1 g ≈ 981 cm/s2</span>
                                </th>
                                <td> 
                                    <div className="form_box">
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>진앙 거리(km)</span></label> 
                                        <span className="group_m">
                                            <input type="text" className="entry" placeholder="0" /> ~ <input type="text" className="entry" placeholder="30" />
                                        </span>
                                    </div>  
                                    <div className="form_box">
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>수평방향 PGA (cm/s<sup>2</sup>)</span></label> 
                                        <span className="group_m">
                                            <input type="text" className="entry" placeholder="0" /> ~ <input type="text" className="entry" placeholder="30" />
                                        </span>
                                    </div>  
                                    <div className="form_box">
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>수직방향 PGA (cm/s<sup>2</sup>)</span></label> 
                                        <span className="group_m">
                                            <input type="text" className="entry" placeholder="0" /> ~ <input type="text" className="entry" placeholder="30" />
                                        </span>
                                    </div>  
                                    <div className="form_box">
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>센서 설치 유형:</span></label> 
                                        <span className="group_m">
                                            <label className="radio_01"><input type="radio" name="selectorType" /><span>지표형</span></label>
                                            <label className="radio_01"><input type="radio" name="selectorType" /><span>시추형</span></label>
                                        </span>
                                    </div>  
                                     
                                </td> 
                            </tr> 
                        </tbody>
                    </table>
                    <div className="btn_wrap">
                        <Link to="/" className="btn_big">자료 조회</Link>
                    </div>
                     
                    <div className="table_hd">
                        <p>총 0건</p>
                        <select>
                            <option>10개</option>
                            <option>20개</option>
                            <option>30개</option>
                            <option>50개</option>
                        </select>
                    </div>

                    <div className="table_list line mobile_scroll">
                        <table summary="K-ESM 목록">
                            <colgroup>
                                <col style={{"width":"5%"}} />
                                <col style={{"width":"18%"}} />
                                <col style={{"width":"7%"}} />
                                <col style={{"width":"11%"}} />
                                <col style={{"width":"8%"}} />
                                <col style={{"width":"8%"}} />
                                <col style={{"width":"12%"}} />
                                <col style={{"width":"7%"}} />
                                <col style={{"width":"8%"}} />
                                <col style={{"width":"8%"}} />
                                <col style={{"width":"8%"}} />
                            </colgroup>
                            <thead>
                                <tr className="row_01">
                                    <th scope="col">선택</th>
                                    <th scope="col" colSpan="2">이벤트</th>
                                    <th scope="col" colSpan="3">관측소</th>
                                    <th scope="col" colSpan="5">관측 기록</th>
                                </tr>
                                <tr className="row_02">
                                    <th scope="col"><label className="checkbox_01"><input type="checkbox" name="period" /><span className="hidden">선택</span></label></th>
                                    <th scope="col">발생시각 (KST)</th>
                                    <th scope="col">M<sub>L</sub></th>
                                    <th scope="col">이름</th>
                                    <th scope="col">V<sub>S30</sub></th>
                                    <th scope="col">H&amp;V<sub>S,Soil</sub></th>
                                    <th scope="col">코드</th>
                                    <th scope="col">진앙 거리<br />(km)</th>
                                    <th scope="col">수평방향 PGA<br />(cm/s<sup>2</sup>)</th>
                                    <th scope="col">수직방향 PGA<br />(cm/s<sup>2</sup>)</th>
                                    <th scope="col">신호처리</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td onClick={openModal2}><label className="checkbox_01"><input type="checkbox" name="period" /><span className="hidden">선택</span></label></td>
                                    <td onClick={openModal2} dateTime="2021-08-21T09:40:40">2021-08-21T09:40:40</td>
                                    <td onClick={openModal2}>4.0</td>
                                    <td onClick={openModal2}>덕천</td>
                                    <td onClick={openModal2}>C</td>
                                    <td onClick={openModal2}>S2</td>
                                    <td onClick={openModal2}>KG.DUC..HA</td>
                                    <td onClick={openModal2}>405.0</td>
                                    <td onClick={openModal2}>1.235520</td>
                                    <td onClick={openModal2}>0.186864</td>
                                    <td><button type="button" onClick={openModal}>열기</button></td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>

                    <Page />

                    <p className="text_cation_02"><span>i</span>본 가공자료에 일괄 적용된 신호처리 기법은 <a href="https://kr.object.gov-ncloudstorage.com/kerc-kquake-public/manuals/K_EMS_DB_manual_latest.pdf" target="_blank" rel="noreferrer">매뉴얼</a>을 참고하세요. 위 표의 개별 신호처리 버튼을 클릭하시면 사용자가 원하는 신호처리 파라미터를 설정하고 다운로드 할 수 있습니다.</p>
                    <section className="section_01">
                        <h4 className="sub_title">데이터</h4>
                        <div>
                            <ul>
                                <li><label className="radio_01"><input type="radio" name="selectorType" /><span>가공자료 (ASCII)</span></label></li>
                                <li><label className="radio_01"><input type="radio" name="selectorType" /><span>원시자료 (miniSEED)</span></label></li> 
                            </ul>
                            <div className="sub_form">
                                <label className="checkbox_01"><input type="checkbox" name="selectorType" /><span>가속도</span></label>
                                <label className="checkbox_01"><input type="checkbox" name="selectorType" /><span>속도</span></label>
                                <label className="checkbox_01"><input type="checkbox" name="selectorType" /><span>변위</span></label>
                                <label className="checkbox_01"><input type="checkbox" name="selectorType" /><span>가속도 응답 스펙트럼</span></label>
                            </div>
                        </div>
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
                    
                    <p className="text_terms">
                        <label className="checkbox_01"><input type="checkbox" name="selectorType" /><span>지진전문연구정보 서비스의 <Link target="_blank" rel="noreferrer" href="/intro/terms">이용약관</Link>을 확인하였으며, 이에 동의합니다.</span></label>
                    </p>
                    <div className="btn_wrap">
                        <Link to="/" className="btn_big">다운로드</Link>
                    </div>
                </section>
                
            </main>
            
            {/* Popup */}
            <div className={ isShown ? 'modal_popup show' : 'modal_popup'}> 
                <section className="modal">
                    <h2>Process (KMA20210011_KG.MKL..HG)</h2> 
                    <div className="detail_popup">
                        <div className="kesm_report">
                            <div className="select_option">
                                <section className="box">
                                    <h3>1. Time window</h3>
                                    <p>At the beginning (s) <input type="number" /> At the end (s) <input type="number" /></p>
                                </section>
                                <section className="box">
                                    <h3>2. Cosine taper</h3>
                                    <p>
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>At the beginning (%)</span></label> 
                                        <input type="number" />
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>At the end (%)</span></label> 
                                        <input type="number" />
                                    </p>
                                </section>
                                <section className="box">
                                    <h3>3. Bandpass filter</h3>
                                    <p>※ Zero padding (up to the number of data matched to the n-th power or 2) is added and removed before and after applying the bandpass filter.</p>
                                    <p>
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>Low-cut (Hz)</span></label> 
                                        <input type="number" />
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>High-cut (Hz)</span></label> 
                                        <input type="number" />
                                    </p>
                                    <p>
                                        Filter order
                                        <select>
                                            <option></option>
                                        </select>
                                    </p>
                                </section>
                                <section className="box">
                                    <h3>4. Post-cosine taper</h3>
                                    <p>
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>At the beginning (%)</span></label> 
                                        <input type="number" />
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>At the end (%)</span></label> 
                                        <input type="number" />
                                    </p>
                                </section> 
                                <section className="box">
                                    <h3>4. Post-cosine taper</h3>
                                    <p>
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>At the beginning (%)</span></label> 
                                        <select>
                                            <option></option>
                                        </select>
                                        <label className="checkbox_01"><input type="checkbox" name="period" /><span>At the end (%)</span></label> 
                                        <input type="number" />
                                        <select>
                                            <option></option>
                                        </select>  
                                    </p>
                                </section> 
                                <section className="box">
                                    <h3>※ 활용 목적</h3>
                                    <p>
                                        <label className="radio_01"><input type="radio" name="period" /><span>연구(자연과학)</span></label> 
                                        <label className="radio_01"><input type="radio" name="period" /><span>연구(공학)</span></label> 
                                        <label className="radio_01"><input type="radio" name="period" /><span>설계</span></label> 
                                        <label className="radio_01"><input type="radio" name="period" /><span>교육</span></label> 
                                        <label className="radio_01"><input type="radio" name="period" /><span>기타</span></label> 
                                    </p>
                                </section> 
                                <div className="btn_wrap">
                                    <Link to="/" className="btn_big">실행</Link>
                                </div>
                            </div>
                            <div className="Select_data">
                                <h3>Select data type</h3>
                                <p>
                                    <label className="radio_01"><input type="radio" name="period" /><span>ACC</span></label> 
                                    <label className="radio_01"><input type="radio" name="period" /><span>VEL</span></label> 
                                    <label className="radio_01"><input type="radio" name="period" /><span>DISP</span></label> 
                                    <label className="radio_01"><input type="radio" name="period" /><span>ACC_SPECTRA</span></label> 
                                </p>
                                <div className="graph">그래프</div>
                                
                                <p className="text_terms">
                                    <label className="checkbox_01"><input type="checkbox" name="selectorType" /><span>지진전문연구정보 서비스의 <Link target="_blank" rel="noreferrer" href="/intro/terms">이용약관</Link>을 확인하였으며, 이에 동의합니다.</span></label>
                                </p> 
                                <div className="btn_wrap">
                                    <Link to="/" className="btn_big">실행</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn_close" onClick={openModal}><span>닫기</span></button>
                </section>
            </div>
            
            {/* Popup */}
            <div className={ isShown2 ? 'modal_popup show' : 'modal_popup'}> 
                <section className="modal">
                    <h2>파형 미리보기</h2> 
                    <div className="detail_popup">
                        그래프
                    </div>
                    <button type="button" className="btn_close" onClick={openModal2}><span>닫기</span></button>
                </section>
            </div>
            
            {/* Footer */}
            <Footer /> 
        </>
    );
};
export default AnnualReport;