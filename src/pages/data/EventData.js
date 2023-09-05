import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';  
import Page from '../include/Page';  
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';


const EventData = () => { 
    return (
        <>
            {/* Header */}
            <Header subPageCheck="header--sub" />
            
            {/* Contents Body */}
            <main className="content">
                
                {/* Page Title */}
                <PageHeader mainTitle="이벤트파형자료" />  
                
                {/* Location */}
                <div className="content-path">
                    <p className="inner">
                        <Link to="/" className="ico_home">
                        Home</Link>
                        <Link to="/data/EventData" className="link">
                        지진관측자료</Link>
                        <strong className="stay">이벤트파형자료</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <section className="content-wrap"> 
                    <h3 className="hide">이벤트파형자료 조회</h3>  
                    <p className="text-notice"><span>?</span>지진 단위 이벤트파형자료 묶음의 검색 및 다운로드 기능을 제공합니다.</p>
                    
                    <table className="table-view table-view--topline" summary="이벤트파형자료 조회 조건">
                        <colgroup>
                            <col style={{"width":"150px"}} />
                            <col style={{"width":"auto"}} /> 
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">규모</th>
                                <td>
                                    <div className="formbox">
                                        <span class="formbox__col">
                                            <label className="radio"><input type="radio" name="magnitude" /><span>2.5+</span></label>
                                            <label className="radio"><input type="radio" name="magnitude" /><span>3.0+</span></label> 
                                            <label className="radio"><input type="radio" name="magnitude" /><span>4.0+</span></label> 
                                        </span>
                                        <span className="formbox__col">
                                            <label className="radio"><input type="radio" name="magnitude" /><span>직접 입력</span></label> 
                                            <input type="text" className="entry" /> ~ <input type="text" className="entry" />
                                        </span>
                                        <span className="text-caution __error"><span>!</span>규모를 입력해주세요.</span>
                                    </div>  
                                </td> 
                            </tr> 
                            <tr>
                                <th scope="row">기간</th>
                                <td> 
                                    <div className="formbox">
                                        <label className="radio"><input type="radio" name="period" /><span>과거 7일</span></label>
                                        <label className="radio"><input type="radio" name="period" /><span>과거 30일</span></label> 
                                        <label className="radio"><input type="radio" name="period" /><span>2023년</span></label> 
                                    </div>  
                                    <div className="formbox">
                                        <label className="radio"><input type="radio" name="period" /><span>직접 입력</span></label> 
                                        <input type="text" className="entry date" /> ~ <input type="text" className="entry date" />
                                    </div>  
                                </td> 
                            </tr> 
                            <tr>
                                <th scope="row">위치</th>
                                <td>
                                    <div className="formbox">
                                        <label className="radio"><input type="radio" name="selectorType" /><span>전체</span></label>
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
                                </td> 
                            </tr> 
                        </tbody>
                    </table>
                    <div className="button-area">
                        <Link to="/" className="button-big">자료 조회</Link>
                    </div>
                     
                    <div className="table-head">
                        <p>총 0건</p>
                        <select>
                            <option>10개</option>
                            <option>20개</option>
                            <option>30개</option>
                            <option>50개</option>
                        </select>
                    </div>

                    <div className="table-list table-list--line table--scroll">
                        <table summary="이벤트파형 목록">
                            <colgroup>
                                <col style={{"width":"5%","minWidth":"40px"}} />
                                <col style={{"width":"19%","minWidth":"152px"}} />
                                <col style={{"width":"8%","minWidth:":"46px"}} />
                                <col style={{"width":"8%","minWidth":"46px"}} />
                                <col style={{"width":"5%","minWidth":"40px"}} />
                                <col style={{"width":"5%","minWidth":"40px"}} />
                                <col style={{"width":"26%","minWidth":"208px"}} />
                                <col style={{"width":"12%","minWidth":"96px"}} />
                                <col style={{"width":"12%","minWidth":"96px"}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" rowSpan="2">NO.</th>
                                    <th scope="col" rowSpan="2">진원시<br />(KST)</th>
                                    <th scope="col" rowSpan="2">위도</th>
                                    <th scope="col" rowSpan="2">경도</th>
                                    <th scope="col" rowSpan="2">규모</th>
                                    <th scope="col" rowSpan="2">최대<br />진도</th>
                                    <th scope="col" rowSpan="2">위치</th>
                                    <th scope="col" colSpan="2">파형자료</th>
                                </tr>
                                <tr>
                                    <th>속도</th>
                                    <th>가속도</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AJD</td>
                                    <td>안좌도</td>
                                    <td>지표형</td>
                                    <td>가속도, 단주기</td>
                                    <td>AJD</td>
                                    <td>안좌도</td>
                                    <td>지표형</td>
                                    <td>가속도, 단주기</td>
                                    <td>가속도, 단주기</td>
                                </tr> 
                            </tbody>
                        </table> 
                    </div>

                    <p className="text-caution"><span>i</span>본 이벤트 목록은 기상청 날씨누리에 게시된 <a href="https://www.weather.go.kr/w/eqk-vol/search/korea.do" target="_blank" rel="noreferrer">국내지진 목록</a>(규모 2.5 이상)에 기반한 것입니다.</p>
                    
                    <div className="table-foot">
                        <Page />
                    </div> 
                </section>
                
            </main>
            
            {/* Footer */}
            <Footer /> 
        </>
    );
};
export default EventData;