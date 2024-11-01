import React from 'react'; 
import Header from '../include/Header';
import Footer from '../include/Footer'; 
import PageHeader from '../include/PageHeader';  
import { Link } from 'react-router-dom';
 
const About = () => {
     
    return ( 
        <>
            {/* Header */}
            <Header subPageCheck="header--sub" />
            
            {/* Contents Body */}
            <main className="content"> 
                
                {/* Page Title */}
                <PageHeader mainTitle="서비스 소개" />  
                
                {/* Location */}
                <div className="content-path">
                    <p>
                        <Link to="/" className="ico_home">Home</Link>
                        <Link to="intro/about" className="link">소개</Link>
                        <strong className="stay">서비스 소개</strong> 
                    </p>
                </div>
                
                {/* Content */}
                <div className="content-wrap">
                    <div className="page-about">
                        <section className="page-about__section01">
                            <h3>ORFEUS</h3>
                            <p>ORFEUS is the non-profit foundation to coordinate and promote digital, broadband seismology in the European-Mediterranean area.</p>
                        </section>
                        
                        <section className="page-about__section02">
                            <h3>EIDA</h3>
                            <p>EIDA is the European Integrated Data Archive infrastructure within ORFEUS to provide access to seismic waveform data in European archives.</p>
                        </section>
                    </div>
                </div>
                
            </main>
            
            {/* Footer */}
            <Footer /> 
        </>
    );
    
};

export default About;