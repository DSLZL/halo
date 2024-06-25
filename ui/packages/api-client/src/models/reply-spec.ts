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
import { CommentOwner } from './comment-owner';

/**
 * 
 * @export
 * @interface ReplySpec
 */
export interface ReplySpec {
    /**
     * 
     * @type {boolean}
     * @memberof ReplySpec
     */
    'allowNotification': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReplySpec
     */
    'approved': boolean;
    /**
     * 
     * @type {string}
     * @memberof ReplySpec
     */
    'approvedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReplySpec
     */
    'commentName': string;
    /**
     * 
     * @type {string}
     * @memberof ReplySpec
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof ReplySpec
     */
    'creationTime'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReplySpec
     */
    'hidden': boolean;
    /**
     * 
     * @type {string}
     * @memberof ReplySpec
     */
    'ipAddress'?: string;
    /**
     * 
     * @type {CommentOwner}
     * @memberof ReplySpec
     */
    'owner': CommentOwner;
    /**
     * 
     * @type {number}
     * @memberof ReplySpec
     */
    'priority': number;
    /**
     * 
     * @type {string}
     * @memberof ReplySpec
     */
    'quoteReply'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReplySpec
     */
    'raw': string;
    /**
     * 
     * @type {boolean}
     * @memberof ReplySpec
     */
    'top': boolean;
    /**
     * 
     * @type {string}
     * @memberof ReplySpec
     */
    'userAgent'?: string;
}

