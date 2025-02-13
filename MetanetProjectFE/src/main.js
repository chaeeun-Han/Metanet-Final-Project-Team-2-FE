import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from './i18n';
import axios from 'axios';

axios.interceptors.response.use(
    response => response, 
    async (error) => {
        if (error.response) {
            const status = error.response.status;
          
            if (status === 403) {
                await Swal.fire('오류', '접근 제한이 있는 페이지입니다.', 'error');
                router.push({ name: 'Error403Page' }).then(() => {                 
                    window.location.reload();
                });
            } else if (status === 400) {
                await Swal.fire('오류', '잘못된 요청입니다.', 'error');
                router.push({ name: 'Error400Page' , query: { previousUrl: currentUrl }}).then(() => {                 
                    window.location.reload();
                });
                
            } else if (status === 500) {                
                await Swal.fire('오류', '서버에서 예기치 않은 오류가 발생했습니다.', 'error');
                router.push({ name: 'Error500Page' , query: { previousUrl: currentUrl }}).then(() => {                 
                    window.location.reload();
                });                
            }
        }
        return Promise.reject(error);
    }
);




const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
