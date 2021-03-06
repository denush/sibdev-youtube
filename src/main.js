import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { CustomInput, CustomButton } from '@/components/shared';

const app = createApp(App);
app.use(store);
app.use(router)

app.component('custom-input', CustomInput);
app.component('custom-button', CustomButton);

app.mount('#app');
