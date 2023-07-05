import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';  
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';


const EventData = () => {  
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
                        <strong className="stay">Web Services</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <section className="webservices_wrap">  
                    <h3 className="sub_title">FDSN Web Services란?</h3>
                    <ul className="list_dot">
                        <li>FDSN Web Services란 지진자료의 공유를 위해 <a href="https://www.fdsn.org/" target="_blank" rel="noreferrer">FDSN(International Federation of Digital Seismograph Networks)</a>에서 정의한 HTTP 기반의 지진자료 공유 프로토콜로, <a href="https://service.iris.edu/fdsnws/" target="_blank" rel="noreferrer">IRIS</a>, <a href="https://orfeus-eu.org/data/eida/webservices/" target="_blank" rel="noreferrer">ORFEUS</a> 등 과 같은 세계적인 지진자료 공유 플랫폼에서 자료 배포 방식으로 이용되고 있습니다.</li>
                        <li>별도의 프로그램 없이 HTTP 프로토콜을 지원하는 툴(대표적으로 인터넷 브라우저, wget 명령어 등)을 이용하여 자료를 다운로드 할 수 있으며, 프로그래밍을 통해 다른 프로그램 코드와 연동하거나 자동화할 수 있다는 장점이 있습니다. 특히, <a href="https://docs.obspy.org/" target="_blank" rel="noreferrer">ObsPy</a>(대표적인 지진연구용 Python library)를 이용할 경우 자료를 쉽게 다운로드하고 분석/가공할 수 있습니다.</li>
                        <li>공식 홈페이지:&nbsp;<a href="https://www.fdsn.org/webservices/" target="_blank" rel="noreferrer">https://www.fdsn.org/webservices/</a></li>
                    </ul>
                    <h3 className="sub_title">KIGAM Quake FDSN Web Services</h3>
                    <ul className="list_dot">
                        <li>KIGAM Quake에서는 4개의 FDSN Web Services 중 Station (관측소 메타데이터), Dataselect (지진파형자료)를 서비스 중에 있으며, 서비스 URL(Uniform Resource Locator)은 아래와 같습니다.</li>
                        <li>Service URL: <i><u>https://quake.kigam.re.kr/</u></i></li>
                        <li>KIGAM Quake의 FDSNWS 이용을 위해서는 지오빅데이터 오픈플랫폼의 오픈API 인증키 발급이 필요합니다.</li>
                        <li><a href="https://data.kigam.re.kr/my-openapi/request/" target="_blank" rel="noreferrer">지오빅데이터 오픈플랫폼의 오픈API 인증키 발급받기</a></li>
                    </ul>
                    <h3 className="sub_title">ObsPy를 이용한 KIGAM Quake FDSN Web Services 이용 방법</h3>
                    <ol className="list_num">
                        <li>
                            준비 작업
                            <div className="source_box">
                                from obspy import UTCDateTime<br />
                                from obspy.clients.fdsn import Client<br /><br />
                                client = Client("https://quake.kigam.re.kr/")<br /><br />
                                # 오픈API 인증키 설정<br />
                                client.request_headers["X-Open-Api-Token"] = "&lt;지오빅데이터 오픈플랫폼의 오픈API 인증키&gt;"<br />
                                # Example: client.request_headers["X-Open-Api-Token"] = "aaaaabbbbbCCCCCddddd12345eeeee"<br />
                            </div>
                        </li>
                        <li>
                            관측소 메타데이터 다운로드 
                            <div className="source_box">
                                # 모든 관측소 메타데이터 다운로드<br />
                                inventory = client.<a href="https://docs.obspy.org/packages/autogen/obspy.clients.fdsn.client.Client.get_stations.html" target="_blank" rel="noreferrer">get_stations</a>(level="response")<br />
                                # 'print(inventory)' 함수를 통해 다운로드 받은 자료 확인 가능<br /><br />
                                # 특정 관측소 메타데이터 다운로드 <br />inventory_AJD = client.get_stations(station="AJD", level="response")<br /><br />
                                # 특정 채널 메타데이터 다운로드<br />inventory_H_Z = client.get_stations(channel="H?Z", level="response")<br /><br />
                                # 파일로 저장<br />inventory.<a href="https://docs.obspy.org/master/packages/autogen/obspy.core.inventory.inventory.Inventory.write.html" target="_blank" rel="noreferrer">write</a>("KIGAM_KG61_metadata.xml", format="STATIONXML")<br />
                            </div>
                        </li>
                        <li>
                            지진파형자료 다운로드
                            <div>※ 지진파형자료 다운로드의 기간이나 용량 제한은 없으나, ObsPy(version 1.3.0 기준) library에서 한 번에 2 GB 이상의 MSEED 자료를 읽을 수 없습니다. 이용에 참고하시기 바랍니다.</div>
                            <div className="source_box">
                            event_time = UTCDateTime("2016-09-12T11:32:54")<br /># 모든 관측소 20 sps 수직성분 지진파형자료 다운로드<br />stream = client.<a href="https://docs.obspy.org/packages/autogen/obspy.clients.fdsn.client.Client.get_waveforms.html" target="_blank" rel="noreferrer">get_waveforms</a>("*", "*", "*", "B?Z", event_time, event_time + 300)<br /># print(stream) 또는 stream.<a href="https://docs.obspy.org/packages/autogen/obspy.core.stream.Stream.plot.html" target="_blank" rel="noreferrer">plot</a>(equal_scale=False) 함수를 통해 다운로드 받은 자료 확인 가능<br /><br /># Bulk download<br />bulk = [<br />&nbsp;&nbsp;&nbsp;&nbsp;("KG", "*", "*", "B?Z", event_time, event_time + 300),<br />&nbsp;&nbsp;&nbsp;&nbsp;("KG", "*", "*", "BGZ", UTCDateTime("2017-01-01T00:00:00"), UTCDateTime("2017-01-01T23:59:59.999999")),<br />&nbsp;&nbsp;&nbsp;&nbsp;("KG", "*", "*", "BHZ", UTCDateTime("2018-01-01T00:00:00"), UTCDateTime("2018-01-01T23:59:59.999999")),<br />]<br />stream_bulk = client.<a href="https://docs.obspy.org/packages/autogen/obspy.clients.fdsn.client.Client.get_waveforms_bulk.html" target="_blank" rel="noreferrer">get_waveforms_bulk</a>(bulk)<br /># stream.<a href="https://docs.obspy.org/packages/autogen/obspy.core.stream.Stream.write.html" target="_blank" rel="noreferrer">write</a>() 함수를 통해 MSEED나 SAC 형식으로 저장 가능<br />
                            </div>
                        </li>
                        <li>
                            물리값 변환 및 관측장비 응답특성 제거
                            <div>※ 아래 예제에서 관측장비 응답특성 제거를 위해 사용된 ObsPy의 remove_response() 함수는 다양한 파라미터를 제공합니다. 이용 전 공식 문서를 확인하시기 바랍니다.</div>
                            <div className="source_box">
                                # 관측소 메타데이터 준비<br />inventory = client.get_stations(level="response")<br /># 관측장비 응답특성 제거를 위해서는 get_stations() 함수의 'level'을 반드시 'response'로 지정해주어야 함<br /><br /># 파형 자료 준비<br />stream = client.get_waveforms(<br />&nbsp;&nbsp;&nbsp;&nbsp;"*", "*", "*", "BGZ", <br />&nbsp;&nbsp;&nbsp;&nbsp;UTCDateTime("2016-09-12T11:32:54"), UTCDateTime("2016-09-12T11:42:54")<br />)<br /><br /># 물리값 변환<br />sensitivity_removed_stream = stream.copy().<a href="https://docs.obspy.org/packages/autogen/obspy.core.stream.Stream.remove_sensitivity.html" target="_blank" rel="noreferrer">remove_sensitivity</a>(inventory)<br /># ValueError("No matching response information found.")가 발생하는 경우,<br /># 아래 "5. 메타데이터가 있는 지진파형자료만 추출" 부분을 참고하시기 바랍니다.<br /><br /># 관측장비 응답특성 제거<br />response_removed_stream = stream.copy().<a href="https://docs.obspy.org/packages/autogen/obspy.core.trace.Trace.remove_response.html" target="_blank" rel="noreferrer">remove_response</a>(inventory, output="ACC")<br />
                            </div>

                        </li>
                        <li>
                            메타데이터가 있는 지진파형자료만 추출
                            <div>※ KIGAM Quake에서 서비스되는 지진파형자료 중에는 메타데이터가 없는 자료도 일부 포함되어 있습니다.
                                <br />메타데이터가 없는 파형자료가 포함된 Stream object에 <a href="https://docs.obspy.org/packages/autogen/obspy.core.stream.Stream.remove_sensitivity.html" target="_blank" rel="noreferrer">remove_sensitivity()</a> 함수나 <a href="https://docs.obspy.org/packages/autogen/obspy.core.stream.Stream.remove_response.html" target="_blank" rel="noreferrer">remove_response()</a> 함수를 호출할 경우 ValueError가 발생합니다. <br />
                                이 경우, 아래 extract_metadata_exist_stream() 함수를 이용하여 메타데이터가 있는 파형자료만 추출할 수 있습니다.</div>
                               <div className="source_box">from obspy import Stream, Inventory<br /><br /><br />def extract_metadata_exist_stream(stream: Stream, inventory: Inventory) -&gt; Stream:<br />&nbsp;&nbsp;&nbsp;&nbsp;metadata_exist_stream = Stream()<br />&nbsp;&nbsp;&nbsp;&nbsp;for trace in stream:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;channel_metadata = inventory.select(<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trace.stats.network,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trace.stats.station,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trace.stats.location,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trace.stats.channel,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if len(channel_metadata):<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for metadata in channel_metadata[0][0]:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trimmed_trace = trace.copy().trim(metadata.start_date, metadata.end_date)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if trimmed_trace:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metadata_exist_stream.append(trimmed_trace)<br />&nbsp;&nbsp;&nbsp;&nbsp;return metadata_exist_stream<br /><br /><br /># 관측소 메타데이터 준비<br />inventory = client.get_stations(level="response")<br /><br /># 파형 자료 준비<br />stream = client.get_waveforms(<br />&nbsp;&nbsp;&nbsp;&nbsp;"*", "*", "*", "BGZ", <br />&nbsp;&nbsp;&nbsp;&nbsp;UTCDateTime("2016-09-12T11:32:54"), UTCDateTime("2016-09-12T11:42:54")<br />)<br /><br /># 메타데이터가 없는 파형자료 제거<br />metadata_exist_stream = extract_metadata_exist_stream(stream, inventory)<br /><br /># 물리값 변환<br />sensitivity_removed_stream = metadata_exist_stream.copy().<a href="https://docs.obspy.org/packages/autogen/obspy.core.stream.Stream.remove_sensitivity.html" target="_blank" rel="noreferrer">remove_sensitivity</a>(inventory)<br /><br /># 관측장비 응답특성 제거<br />response_removed_stream = metadata_exist_stream.copy().<a href="https://docs.obspy.org/packages/autogen/obspy.core.trace.Trace.remove_response.html" target="_blank" rel="noreferrer">remove_response</a>(inventory, output="ACC")<br />
                            </div>
                        </li> 
                    </ol>
                    <h3 className="sub_title">참고자료</h3>
                    <ol className="list_num">
                        <li><a href="https://docs.obspy.org/tutorial/code_snippets/retrieving_data_from_datacenters.html" target="_blank" rel="noreferrer">ObsPy Tutorial(Retrieving Data from Data Centers)</a></li>
                        <li><a href="https://docs.obspy.org/packages/obspy.clients.fdsn.html" target="_blank" rel="noreferrer">ObsPy API Document(FDSN web service client for ObsPy)</a></li>
                    </ol>
                </section>
            </main>
            
            {/* Footer */}
            <Footer /> 
        </>
    );
};
export default EventData;