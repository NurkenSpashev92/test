import { createApp } from "vue";
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router'
import './styles/app.css';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './styles/styles.scss';
import './styles/styles/layout.scss';
import './styles/demo/flags/flags.css';


import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';
import CodeHighlight from './components/menu/AppCodeHighlight';
import BadgeDirective from 'primevue/badgedirective';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';






createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true, inputStyle: 'outlined' })
    .use(ToastService)
    .use(ConfirmationService)
    .component('InputText', InputText)
    .component('Password', Password)
    .component('Button', Button)
    .component('Menu', Menu)
    .component('Menubar', Menubar)
    .directive('tooltip', Tooltip)
    .directive('ripple', Ripple)
    .directive('code', CodeHighlight)
    .directive('badge', BadgeDirective)
    .directive('styleclass', StyleClass)
    .mount('#customer-app')



