const baseUrl =
    process.env.NODE_ENV === "production"
    ? 'https://deployment-url.now.sh'//url produccion
    : 'http://localhost:3000';

export default baseUrl;