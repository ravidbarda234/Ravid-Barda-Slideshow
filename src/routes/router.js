import PAGES from "../models/pageModel.js";
import { HOME_PAGE, ABOUT_PAGE, ADD_PAGE, LOGIN_PAGE, ERROR_PAGE, SIGNUP_PAGE } from '../services/domservic.js'

export const onChangePage = (page) => {
    HOME_PAGE.className = "d-none";
    ABOUT_PAGE.className = "d-none";
    ADD_PAGE.className = "d-none";
    LOGIN_PAGE.className = "d-none";
    SIGNUP_PAGE.className = "d-none";
    ERROR_PAGE.className = "d-none";
    if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
    if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
    if (page === PAGES.ADD) return (ADD_PAGE.className = "d-block");
    if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
    if (page === PAGES.SIGNUP) return (SIGNUP_PAGE.className = "d-block");
    return ERROR_PAGE.className = "d-block";
    
} 