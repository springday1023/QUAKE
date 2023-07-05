import React from 'react';  
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Autoplay, Navigation } from 'swiper'; 
import Header from '../include/Header';
import Footer from '../include/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
     
    return (
        <> 
            {/* Header */}
            <Header />
            
            {/* Contents Body */}
            <main className="main_container">
                <div className="visual_slider">
                    <Swiper  
                        navigation={true}
                        modules={[Autoplay, EffectFade, Navigation]} 
                        effect="fade"
                        speed="400"
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                    >
                        <SwiperSlide className="slider01"> 
                            <div className="text">
                                <p className="text_01">MULTIPLATFORM<br />GEOSCIENCE<br />INFORMATION</p>
                                <p className="text_02">국민의 삶의 질 향상과 국민 행복 추구에 기여하겠습니다.</p>
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide className="slider02"> 
                            <div className="text">
                                <p className="text_01">MULTIPLATFORM<br />GEOSCIENCE<br />INFORMATION</p>
                                <p className="text_02">국민의 삶의 질 향상과 국민 행복 추구에 기여하겠습니다.</p>
                            </div>
                        </SwiperSlide>    
                    </Swiper>
                </div>
                <dl className="notice_wrap">
                    <dt>공지사항</dt>
                    <dd>
                        <Link to="#">
                            <span>[안내] MGEO 지질정보시스템 업그레이드</span>
                            <span>2021.01.01</span>
                        </Link>
                    </dd>
                </dl>
            </main> 
            
            {/* Footer */}
            <Footer />
        </>
    );
    
};

export default Home;