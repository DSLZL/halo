/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Author } from './author';
// May contain unused imports in some cases
// @ts-ignore
import { CustomTemplates } from './custom-templates';
// May contain unused imports in some cases
// @ts-ignore
import { License } from './license';

/**
 * 
 * @export
 * @interface ThemeSpec
 */
export interface ThemeSpec {
    /**
     * 
     * @type {Author}
     * @memberof ThemeSpec
     */
    'author': Author;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'configMapName'?: string;
    /**
     * 
     * @type {CustomTemplates}
     * @memberof ThemeSpec
     */
    'customTemplates'?: CustomTemplates;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'displayName': string;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'homepage'?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'issues'?: string;
    /**
     * 
     * @type {Array<License>}
     * @memberof ThemeSpec
     */
    'license'?: Array<License>;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'logo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'repo'?: string;
    /**
     * Deprecated, use `requires` instead.
     * @type {string}
     * @memberof ThemeSpec
     * @deprecated
     */
    'require'?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'requires'?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'settingName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     */
    'version': string;
    /**
     * 
     * @type {string}
     * @memberof ThemeSpec
     * @deprecated
     */
    'website'?: string;
}

