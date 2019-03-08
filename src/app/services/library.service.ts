import { Injectable } from '@angular/core';
import { basicTexts } from '../locales/basic';
import { settingTexts } from '../locales/settings';
/**
 * How to use language translation
 * @example
 *  this.texts = {
 *      abc: {
 *          en: 'Abc',
 *          ko: '가나다'
 *      }
 *  }
 *  this.languageCode = 'en'
 *  this.t('abc');
 *  this.t({ en: 'Abc', ko: '가나다'});
 *
 * @note By default, it uses language saved in localStorage by `setUserLanguage()`
 *          or it will use user's browser language.
 */
const LANGUAGE_CODE = 'language_code';

type LanguageCode = string | 'ko' | 'en' | 'jp' | 'ch';

@Injectable()
export class LibraryService {

    texts = {};
    /**
     * This is the language code for displaying language in view.
     * You can chagne it in realtime and the text changes in realtime also.
     * When you want to chagne language, simply chagne the value of this var.
     */
    languageCode: LanguageCode = null;
    constructor(
    ) {
        this.languageCode = <any> this.getBrowserLanguage();
        const lc = <any> this.getUserLanguage();
        if (lc) {
            this.languageCode = lc;
        }
        this.addLanguageText(basicTexts);
        this.addLanguageText(settingTexts);
    }
    /**
     * Returns browser language
     *
     * @param full If it is true, then it returns the full language string like 'en-US'.
     *              Otherwise, it returns the first two letters like 'en'.
     *
     * @returns
     *      - the browser language like 'en', 'en-US', 'ko', 'ko-KR'
     *      - null if it cannot detect a language.
     */
    getBrowserLanguage(full = false): string {
        const nav: any = window.navigator;
        const browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
        let ln: string = null;
        // support for HTML 5.1 "navigator.languages"
        if (Array.isArray(nav.languages)) {
            for (let i = 0; i < nav.languages.length; i++) {
                const language = nav.languages[i];
                if (language && language.length) {
                    ln = language;
                    break;
                }
            }
        }
        // support for other well known properties in browsers
        for (let i = 0; i < browserLanguagePropertyKeys.length; i++) {
            const language = nav[browserLanguagePropertyKeys[i]];
            if (language && language.length) {
                ln = language;
                break;
            }
        }
        if (ln) {
            if (full === false) {
                ln = ln.substring(0, 2);
            }
        }
        return ln;
    }

    /**
     * Gets data from localStroage and returns after JSON.parse()
     * .set() automatically JSON.stringify()
     * .get() automatically JSON.parse()
     *
     * @return
     *      null if there is error or there is no value.
     *      Or value that were saved.
     */
    get(key: string): any {
        const value = localStorage.getItem(key);
        if (value !== null) {
            try {
                return JSON.parse(value);
            } catch (e) {
                return null;
            }
        }
        return null;
    }




    /**
     * Saves data to localStorage.
     *
     * It does `JSON.stringify()` before saving, so you don't need to do it by yourself.
     *
     * @param key key
     * @param data data to save in localStorage
     */
    set(key: string, data: any): void {
        // console.log("storage::set()", data);
        localStorage.setItem(key, JSON.stringify(data));
    }



    /**
     *
     * Returns a string after patching error information.
     * @param str Error string
     * @param info Error information to patch into the string
     *
     *
     *
     * @return patched string
     *
     * @code
     *      _.patchmarker( 'Unknown #no', {no: 123} ) // returns 'Unknown 123'
     *
     */
    patchMarker(str: string, info: object = null): string {

        if (info === null || typeof info !== 'object') {
            return str;
        }
        const keys = Object.keys(info);
        if (!keys.length) {
            return str;
        }

        for (const k of keys) {
            str = str.replace('#' + k, (<string>info[k]));
        }
        return str;
    }

    /**
     * Returns translated text string.
     * @param code code and text to translate
     * @param info information to add on the translated text
     * @note This is a complete function for text translation.
     *    - If you have json like below,
     *    text = {
     *      name: {
     *        en: 'Name',
     *        ko: '이름'
     *      }
     *    }
     *    - If you have a big json file, you may cache in localStorage.
     * @example this.t( text.name )
     * @example
     *    this.translate({en: 'Name: #name', ko: '이름: #name'}, {name: 'JaeHo'});
     */
    translate(code: object, info?: object): string {
        // console.log('lang: ', this.languageCode);
        if (!code) {
            return 'CODE_EMPTY';
        }
        let str = code[this.languageCode];
        if (!str) {
            str = code['en'];
        }
        return this.patchMarker(str, info);
    }

    /**
     * Returns translated text from the language code.
     * @note this is short usage for 'translate()'
     * @param code string of i18n property.
     * @param info same as transate()
     * @example t( name, {name: 'JaeHo'} );
     *
     * @warning code must be lower case always.
     */
    t(code: any, info?: any): string {
        if (!code) {
            return 'No code';
        }
        if (typeof code === 'string') {
            if (!this.texts) {
                return 'No texts';
            }
            const temp = code;
            code = code.toLowerCase();
            if (this.texts[code] === void 0) {
                return temp;
            }
            return this.translate(this.texts[code], info);
        } else {
            return this.translate(code, info);
        }

    }


    addLanguageText(texts: object) {
        Object.assign(this.texts, texts);
    }

    /**
     * Returns language code like 'ko', 'en', 'jp'.
     *
     * It first checks if user has selected his language already (from localStorage).
     * If not, it returns browser language.
     *
     * @return language code.
     */
    getUserLanguage(): string {
        const ln = this.get(LANGUAGE_CODE);
        if (ln && ln.length === 2) {
            return ln;
        } else {
            return this.getBrowserLanguage();
        }
    }

    setUserLanguage(code: any) {
        this.set(LANGUAGE_CODE, code);
        this.languageCode = code;
    }

}
