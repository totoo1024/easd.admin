/* tslint:disable */
/* eslint-disable */
/**
 * 博客前端接口
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PageResultReplyOutput } from './page-result-reply-output';
/**
 * 
 * @export
 * @interface RESTfulResultPageResultReplyOutput
 */
export interface RESTfulResultPageResultReplyOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultReplyOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {PageResultReplyOutput}
     * @memberof RESTfulResultPageResultReplyOutput
     */
    data?: PageResultReplyOutput;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultPageResultReplyOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultReplyOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultReplyOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultReplyOutput
     */
    timestamp?: number;
}
