import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer'; 
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';
 
const Terms = () => {
    return (
        <>
            {/* Header */}
            <Header subPageCheck="sub_header" />
            
            {/* Contents Body */}
            <main className="sub_container"> 
                
                {/* Page Title */}
                <PageHeader mainTitle="이용약관" />  
                
                {/* Location */}
                <div className="location_wrap">
                    <p className="inner">
                        <Link to="/" className="ico_home">Home</Link>
                        <Link to="intro/about" className="link">소개</Link>
                        <strong className="stay">이용약관</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <div className="terms_wrap">
                    <section className='section_01'>
                        <h3 className="sub_title">KIGAM Quake 이용약관</h3>
                        <ul>
                            <li>KIGAM Quake에서 서비스되는 자료 중 별도의 출처가 명시되지 않은 자료의 저작권은 한국지질자원연구원에 있습니다.</li>
                            <li>KIGAM Quake를 통해 획득한 자료를 사용하여 파생된 결과를 발표하거나 게시할 경우 반드시 본 서비스를 이용하였다는 출처를 표시해야 합니다.</li>
                            <li>KIGAM Quake에서 서비스되는 지진관측자료(원시 및 가공 자료)는 재배포를 금지합니다.</li>
                            <li>원활한 서비스 제공을 위하여 일 또는 월 단위로 개인별 다운로드 가능 용량이 제한될 수 있습니다.</li>
                        </ul>
                    </section>
                    <section className='section_02'>
                        <h3 className="sub_title">한국지질자원연구원 지오빅데이터 오픈플랫폼 저작권정책</h3>
                        <ul>
                            <li>한국지질자원연구원은 제공데이터의 정확성, 완전성(데이터에 하자 내지 결함이 없음), 안전성(데이터에 바이러스 등 악성코드가 없음), 유효성(본 계약 목적에의 적합성)을 보증하지 않습니다.</li>
                            <li>한국지질자원연구원은 제공데이터가 타인의 지식재산권 및 기타 권리를 침해하지 않는다는 것을 보증하지 않습니다.</li>
                            <li>한국지질자원연구원은 데이터 이용자가 제공데이터를 이용하는 과정에서 발생한 타인의 발명 고안 창작 및 영업비밀 등 지식재산권 및 기타 권리 침해에 관한 모든 청구 손실 손해 또는 비용에 대하여 책임을 지지 않습니다.</li>
                            <li>데이터 이용자는 제공데이터 이용에 관련되는 제3자와의 사이에 분쟁 클레임 또는 청구(이하 [분쟁 등]이라 한다)가 발생한 경우에는 즉시 한국지질자원연구원에 서면으로 통지하여야 하고 또한 자기의 책임과 비용 부담으로 해당 분쟁 등을 해결해야 합니다.</li>
                        </ul>
                    </section>
                </div>
                
            </main>
            
            {/* Footer */}
            <Footer />
        </>
    );
};
 
export default Terms;