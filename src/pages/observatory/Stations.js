import React, { useState } from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer'; 
import Page from '../include/Page';  
import sampleImg from '../../assets/images/pc/map_sample.png'; 
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';


const Stations = () => {
    const [isShown, setIsShown] = useState(false);
    const openModal = () =>{
        setIsShown(current => !current);
    }
    return (
        <>
            {/* Header */}
            <Header subPageCheck="sub_header" />

            {/* Contents Body */}
            <main className="sub_container">
                
                {/* Page Title */}
                <PageHeader mainTitle="관측소 정보" /> 
                
                {/* Location */}
                <div className="location_wrap">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="/observatory/stations" className="link">
                        지진관측소</Link>
                        <strong className="stay">관측소 정보</strong> 
                    </p>
                </div>

                {/* Content */}
                <section className="contents_wrap"> 
                    <h3 className="hide">관측소 목록</h3>
                    <div className="observatory"> 
                        <div className="map">
                            <div className="solt">
                                <h4>설치유형 선택</h4>
                                <ul>
                                    <li><label className="checkbox_01"><input type="checkbox" name="shortperiod"  /><span>지표형</span></label></li>
                                    <li><label className="checkbox_01"><input type="checkbox" name="shortperiod" /><span>시추형</span></label></li>
                                </ul> 
                            </div>
                            <div className="solt">
                                <h4>센서 종류</h4>
                                <ul>
                                    <li><label className="checkbox_01"><input type="checkbox" name="shortperiod"  /><span>단주기</span></label></li>
                                    <li><label className="checkbox_01"><input type="checkbox" name="shortperiod" /><span>광대역</span></label></li>
                                    <li><label className="checkbox_01"><input type="checkbox" name="shortperiod" /><span>가속도</span></label></li>
                                </ul> 
                            </div>
                            <div>
                                <img src={sampleImg} alt="map sample" />
                                <section className="info_popup">
                                    <h4 className="title">용인 (YIN)</h4>
                                    <div className="map_info">
                                        <span>설치유형: <span>지표형</span></span>
                                        <span>센서종류: <span>가속도, 단주기</span></span>
                                    </div>
                                    <div className="rtl">
                                        <button type="button" className="modal_trigger" onClick={openModal}>상세정보</button>
                                    </div>
                                    <button type="button" className="btn_close"><span>닫기</span></button>
                                </section>
                            </div>

                        </div>
                        <div className="list"> 
                            <div className="table_hd">
                                <p><label className="checkbox_01"><input type="checkbox" name="sync-with-map" /><span>지도 내 관측소만 보기</span></label></p>
                                <button type="button" className="btn_big">목록 다운로드</button>
                            </div>
                            <div className="table_list line">
                                <table summary="관측소 목록">
                                    <colgroup>
                                        <col span="4" style={{"width":"25%"}} /> 
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col">관측소 코드</th>
                                            <th scope="col">관측소명</th>
                                            <th scope="col">설치유형</th>
                                            <th scope="col">센서종류</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={openModal}>
                                            <td>AJD</td>
                                            <td>안좌도</td>
                                            <td>지표형</td>
                                            <td>가속도, 단주기</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>BBK</td>
                                            <td>방방골</td>
                                            <td>지표형</td>
                                            <td>가속도, 단주기</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>BGD</td>
                                            <td>보길도</td>
                                            <td>지표형</td>
                                            <td>가속도, 광대역</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>BOG</td>
                                            <td>봉계</td>
                                            <td>지표형+시추형</td>
                                            <td>가속도</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>BRN</td>
                                            <td>북백령도</td>
                                            <td>지표형+시추형</td>
                                            <td>가속도</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>BRS</td>
                                            <td>남백령도</td>
                                            <td>지표형+시추형</td>
                                            <td>가속도</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>CGD</td>
                                            <td>청도</td>
                                            <td>지표형</td>
                                            <td>가속도, 단주기</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>CGU</td>
                                            <td>천군</td>
                                            <td>지표형+시추형</td>
                                            <td>가속도</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>CHNB</td>
                                            <td>철원</td>
                                            <td>지표형</td>
                                            <td>광대역</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>CHS</td>
                                            <td>청송</td>
                                            <td>지표형</td>
                                            <td>가속도, 광대역</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>CRB</td>
                                            <td>원주KSRS</td>
                                            <td>지표형+시추형</td>
                                            <td>가속도</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>DES</td>
                                            <td>덕성</td>
                                            <td>지표형</td>
                                            <td>가속도, 광대역</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>DKJ</td>
                                            <td>덕정리</td>
                                            <td>지표형</td>
                                            <td>가속도, 단주기</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>DUC</td>
                                            <td>덕천</td>
                                            <td>지표형+시추형</td>
                                            <td>가속도</td>
                                        </tr>
                                        <tr onClick={openModal}>
                                            <td>GCN</td>
                                            <td>건천</td>
                                            <td>지표형+시추형</td>
                                            <td>가속도</td>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div>
                            <div className="table_footer">
                                <Page />  
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>

            {/* Popup */}
            <div className={ isShown ? 'modal_popup show' : 'modal_popup'}>
                <section className="modal">
                    <h2>관측소 상세 정보 - <span>덕천 (DUC)</span></h2> 
                    <div className="stationsDetail_popup">
                        <table className="table_view">
                            <colgroup>
                                <col style={{"width":"150px"}} />
                                <col style={{"width":"auto"}} />
                                <col style={{"width":"150px"}} />
                                <col style={{"width":"auto"}} />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">관측개시일</th>
                                    <td>2011-01-01</td>
                                    <th>설치유형</th>
                                    <td>지표형+시추형</td>
                                </tr> 
                                <tr>
                                    <th scope="row">위도</th>
                                    <td>34.7479</td>
                                    <th>센서종류</th>
                                    <td>단주기, 광대역, 가속도</td>
                                </tr> 
                                <tr>
                                    <th scope="row">경도</th>
                                    <td>126.12384</td>
                                    <th>지반분류(VS30)</th>
                                    <td>SA,S1</td>
                                </tr> 
                                <tr>
                                    <th scope="row">고도</th>
                                    <td>125.0 m</td>
                                    <th>지반분류(H&VS,Soil)</th>
                                    <td>StationXML, SEED, RESP 파일</td>
                                </tr> 
                            </tbody>
                        </table>
                        <div className="flex_box">
                            <section className="land">
                                <h3 className="sub_title">부지정보</h3>
                                <div className="print">
                                    <img className="width-auto" alt="부지정보 이미지" src="https://kr.object.gov-ncloudstorage.com/kerc-kquake-public/web/images/station/DUC_siteInfoFig_20211117.png"  style={{"cursor": "pointer","width": "100%"}} />
                                    ※ 센서의 정확한 설치 깊이는 메타데이터(StationXML)를 참고하시기 바랍니다.
                                </div>
                            </section>
                            <section className="pic">
                                <h3 className="sub_title">관측소 사진</h3>
                                <ul className="pic_list">
                                    <li>
                                        <img src="https://kr.object.gov-ncloudstorage.com/kerc-kquake-public/web/images/station/AJD_panorama_20210311_1.thumb.jpg" alt="쵤영 일자: 2021-03-11" title="클릭하면 원본 사진을 볼 수 있습니다." style={{"cursor": "pointer","width": "100%"}} />
                                        <time dateTime={"2021-03-11"}>쵤영 일자: 2021-03-11</time>
                                    </li>
                                    <li>
                                        <img src="https://kr.object.gov-ncloudstorage.com/kerc-kquake-public/web/images/station/AJD_panorama_20210311_1.thumb.jpg" alt="쵤영 일자: 2021-03-11" title="클릭하면 원본 사진을 볼 수 있습니다." style={{"cursor": "pointer","width": "100%"}} />
                                        <time dateTime={"2021-03-11"}>쵤영 일자: 2021-03-11</time>
                                    </li>
                                    <li>
                                        <img src="https://kr.object.gov-ncloudstorage.com/kerc-kquake-public/web/images/station/AJD_panorama_20210311_1.thumb.jpg" alt="쵤영 일자: 2021-03-11" title="클릭하면 원본 사진을 볼 수 있습니다." style={{"cursor": "pointer","width": "100%"}} />
                                        <time dateTime={"2021-03-11"}>쵤영 일자: 2021-03-11</time>
                                    </li>
                                    <li>
                                        <img src="https://kr.object.gov-ncloudstorage.com/kerc-kquake-public/web/images/station/AJD_panorama_20210311_1.thumb.jpg" alt="쵤영 일자: 2021-03-11" title="클릭하면 원본 사진을 볼 수 있습니다." style={{"cursor": "pointer","width": "100%"}} />
                                        <time dateTime={"2021-03-11"}>쵤영 일자: 2021-03-11</time>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <button type="button" className="btn_close" onClick={openModal}><span>닫기</span></button>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};
export default Stations;