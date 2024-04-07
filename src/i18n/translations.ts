import {initReactI18next} from "react-i18next";
import translationInstance from 'i18next';
import en from './en.json';

translationInstance
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            }
        },
        fallbackLng: 'en',
        debug: true,
    });

export default translationInstance;
