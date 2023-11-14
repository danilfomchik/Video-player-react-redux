import React, { memo, useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import img from "../../../assets/icon.png";

import VideosListItem from "../../home/video-list-item/VideosListItem";

import httpRequest from "../../../utils/httpRequest";
import useDataFetching from "../../../hooks/useDataFetching";

import { BASE_URL, API_KEY } from "../../../utils/constants";
import { useGetSuggestedVideosQuery } from "../../../api/api";

import "./suggested-videos.scss";

// топ статья для ртк квери https://habr.com/ru/companies/alfa/articles/705640/

const SuggestedVideos = memo(({ query }) => {
    const {
        data: suggestedVideos,
        isError,
        isLoading,
        isFetching,
        refetch: refetchSuggestedVideos,
    } = useGetSuggestedVideosQuery(query);

    console.log("suggestedVideos-->", suggestedVideos);
    // использовать декодер для строки запроса

    // -----------------------

    // НУЖНО СОХРАНЯТЬ NEXT PAGE TOKEN ДЛЯ ПАГИНАЦИИ.
    // при подгрузке менять NEXT PAGE TOKEN и делать рефетч

    // -----------------------

    // А ДЛЯ ВРЕСТКИ, ВОЗМОЖНО, ИСПОЛЬЗОВАТЬ ХОК, В КОТОРОМ БУДЕТ ЛОГИКА, А ВЕРСТКА БУДЕТ ОТЛИЧАТЬСЯ

    // -----------------------

    // console.log(query);

    // const requestUrl = `/search?part=snippet&maxResults=8&type=video&q=${
    //     query || ""
    // }&order=viewCount&videoDuration=medium&key=${API_KEY}`;
    // const { getData, data: suggestedVideosList } = useDataFetching(requestUrl);

    // const [data, setData] = useState([]);
    // const { request } = httpRequest();

    // const getData = async (param = "") => {
    //     const response = await request({
    //         url:
    //             BASE_URL +
    //             `/search?part=snippet&maxResults=8&type=video&q=${param}&order=viewCount&videoDuration=medium&key=${API_KEY}`,
    //     });

    //     console.log(response);

    //     setData(response.items);
    // };

    // useEffect(() => {
    //     getData(query);
    // }, [query]);

    return (
        <Box className="suggested-videos">
            {/* {data.map((video) => (
                <VideosListItem video={video} />
            ))} */}
        </Box>
    );
});

export default SuggestedVideos;
