import api from "./api";

function parseJwt(token) {
  if (!token) return null;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  try {
    return JSON.parse(decodeURIComponent(escape(window.atob(base64))));
  } catch (e) {
    console.error("JWT 파싱 오류:", e);
    return null;
  }
}

/**
 * 로그인 요청 함수
 * @param {Object} credentials - { id, password }
 * @returns {Promise} - 응답 데이터
 */
// export async function login(credentials) {
//   const response = await api({
//     method: "post",
//     url: "/auth/login",
//     data: credentials,
//     headers: { "Content-Type": "application/json; charset=UTF-8" },
//   });

//   const authHeader = response.headers.authorization;
//   if (authHeader && authHeader.startsWith("Bearer ")) {
//     const token = authHeader.split(" ")[1];
//     sessionStorage.setItem("jwtToken", token);

//     const payload = parseJwt(token);
//     if (payload) {
//       sessionStorage.setItem("memberId", payload.sub);
//       sessionStorage.setItem("memberRole", payload.auth);
//     }
//   }
//   return response.data;
// }

export function callApi(method, endpoint, data = {}) {
  return api({
    method,
    url: endpoint,
    ...(method.toLowerCase() === "get" ? { params: data } : { data }),
  }).then((response) => response.data);
}

export default api;
