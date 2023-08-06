import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    // console.log(mediaType, id);
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
    console.log(data?.results)

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endPoint={mediaType}
        />
    );
};

export default Similar;