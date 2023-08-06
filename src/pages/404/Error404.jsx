import React from "react";

import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import NoResults from "../../assets/no-results.png";
import Img from "../../components/lazyLoadingImages/Img";


const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <Img className="no-results" src={NoResults} alt="No Results" />
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;