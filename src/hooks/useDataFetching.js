import { useState, useEffect } from "react";
import httpRequest from "../utils/httpRequest";

import { BASE_URL, API_KEY } from "../utils/constants";

// вместо этого для загрузки коментариев и предложеных видео использовать ртк квери
// https://stackoverflow.com/questions/72530121/rtk-query-infinite-scrolling-retaining-existing-data
// https://codesandbox.io/s/react-rtk-query-inifinite-scroll-8kj9bh?file=/src/service/pokemon.js

// Сделать стейт для лоадинга и ошибки в хуке загрузки данных (стейт машин).
// Этот хук использовать для саддешенов и коментов.
// Исходя из этих стейтов показывать скелетоны.

const useDataFetching = (url) => {
    // сделать стейты для ошибки и загрузки
    const [data, setData] = useState({});
    const { request } = httpRequest();

    const getData = async (param = "") => {
        const response = await request({
            url: BASE_URL + url,
        });

        setData(response?.items);
    };

    useEffect(() => {
        getData();
    }, []);

    return { getData, data };
};

export default useDataFetching;
