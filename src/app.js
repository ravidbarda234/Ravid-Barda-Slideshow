import PAGES from './/models/pageModel.js';
import { onChangePage } from './routes/router.js';
import { HOME_PAGE_LINK, ABOUT_PAGE_LINK, ADD_PAGE_LINK, LOGIN_PAGE_LINK, SIGNUP_PAGE_LINK, ERROR_PAGE_LINK } from './services/domservic.js';

//האזנה לאירועים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
ADD_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ADD));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
SIGNUP_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.SIGNUP));

