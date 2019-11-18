import React from "react";
import ReactDOM from "react-dom";

import JobsList from "./components/jobsList";
import { IntlProvider } from 'react-intl';
import localeEs from './locales/es';
import localeEn from './locales/en';

ReactDOM.render(
    <IntlProvider locale = {navigator.language} messages = {detectarArchivo(navigator.language)}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);

function detectarArchivo(lang){
    console.log(lang)
    let temp = lang.split("-")
    if (temp[0] === 'es'){
        return localeEs;
    }
    else if (temp[0] === 'en'){
        return localeEn;
    }
}