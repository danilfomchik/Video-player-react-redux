const httpRequest = () => {
    const request = async (
        url,
        method = "GET",
        body = null,
        headers = { "Content-Type": "application/json" }
    ) => {
        // throw new Error();

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                console.log("error");
                throw new Error(
                    `Could not fetch ${url}, status: ${response.status}`
                );
            }

            const data = await response.json();

            return data;
        } catch (e) {
            throw e;
        }
    };

    return {
        request,
    };
};

export default httpRequest;
