import axios from "axios";

function isPublicEndpoint(url) {
  if (url === "/lectures/all") return true;
  if (url === "/email/mail-password") return true;
  if (url === "/email/verify") return true;
  if (url === "/auth/login") return true;
  const parts = url.split("/");
  if (parts[1] === "lecture" && parts.length === 3) {
    return true;
  }
  return false;
}

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  (config) => {
    // 공개 엔드포인트가 아니라면 토큰 첨부
    if (!isPublicEndpoint(config.url)) {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const requestUrl = error.config && error.config.url;
    // 403 에러이고, 요청 URL이 공개 엔드포인트가 아니라면 로그인 페이지로 리다이렉트
    if (error.response && error.response.status === 403 && !isPublicEndpoint(requestUrl)) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
