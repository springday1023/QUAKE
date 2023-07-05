import React from 'react'; 
import { Link } from 'react-router-dom';
const Page = () => {
    return (
        <div className="table_footer">
            <p className="page_wrap">
                <Link to="#" className="front"><span>처음</span></Link>
                <Link to="#" className="prev"><span>이전</span></Link>
                <Link to="#">1</Link>
                <strong>2</strong>
                <Link to="#">3</Link>
                <Link to="#" className="next"><span>다음</span></Link>
                <Link to="#" className="end"><span>끝</span></Link>
            </p>  
        </div> 
    );
};

export default Page;