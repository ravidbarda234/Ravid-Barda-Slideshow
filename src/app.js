import PAGES from './/models/pageModel.js';
import { onChangePage } from './routes/router.js';
import { HOME_PAGE_LINK, ABOUT_PAGE_LINK } from './services/domservic.js';

//האזנה לאירועים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
