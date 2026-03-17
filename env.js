// env.js

const ENV = (() => {

    const host = location.hostname;

    const isProd =
        host.includes("azurestaticapps.net") ||
        host.includes("prod") ||
        host.includes("minnanobousaisouko.com");

    return {
        API_BASE: isProd
            ? "https://prod-05.japaneast.logic.azure.com:443/workflows/42f5304fb52d4ab5880b825c88a0f71e/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=-8x_EOunm2AlqQl4ol-FTQhBoC4P7WThsDfdih13Uyc"
            : "https://prod-05.japaneast.logic.azure.com:443/workflows/42f5304fb52d4ab5880b825c88a0f71e/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=-8x_EOunm2AlqQl4ol-FTQhBoC4P7WThsDfdih13Uyc",

        LIFF_ID: isProd
            ? "PROD_LIFF_ID"
            : "DEV_LIFF_ID"
    };

})();f