import React from 'react';  
const PageHeader = (props) => {  
    return (
        <div className="content-head">
            <h2>{ props.mainTitle }</h2>
            <p>EARTHQUAKE RESEARCH INFORMATION</p>
        </div>
    );
};

export default PageHeader;