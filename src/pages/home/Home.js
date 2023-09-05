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
            <main className="content">
                <div className="home-visual">
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
                        <SwiperSlide className="home-visual__bg1"> 
                            <div className="home-visual__text">
                                <p className="tt">MULTIPLATFORM<br />GEOSCIENCE<br />INFORMATION</p>
                                <p className="desc">국민의 삶의 질 향상과<br />  국민 행복 추구에 기여하겠습니다.</p>
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide className="home-visual__bg2"> 
                            <div className="home-visual__text">
                                <p className="tt">MULTIPLATFORM<br />GEOSCIENCE<br />INFORMATION</p>
                                <p className="desc">국민의 삶의 질 향상과<br /> 국민 행복 추구에 기여하겠습니다.</p>
                            </div>
                        </SwiperSlide>    
                    </Swiper>
                </div>
                <dl className="home-notice">
                    <dt>공지사항</dt>
                    <dd>
                        <Link to="#" className="home-notice__link">
                            <span>[안내] MGEO 지질정보시스템 업그레이드</span>
                            <span>2021.01.01</span>
                        </Link>
                        <Link to="#" className="home-notice__more"><span>더보기</span></Link>
                    </dd>
                </dl>
            </main> 
            
            {/* Footer */}
            <Footer />
        </>
    );
    
};

export default Home;