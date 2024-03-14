/* tslint:disable */
/* eslint-disable */
/**
 * 规范化接口演示
 * 让 .NET 开发更简单，更通用，更流行。
 *
 * OpenAPI spec version: 1.0.0
 * Contact: monksoul@outlook.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SelectOutput } from './select-output';
/**
 * 
 * @export
 * @interface RESTfulResultListSelectOutput
 */
export interface RESTfulResultListSelectOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListSelectOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {Array<SelectOutput>}
     * @memberof RESTfulResultListSelectOutput
     */
    data?: Array<SelectOutput> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultListSelectOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListSelectOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListSelectOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListSelectOutput
     */
    timestamp?: number;
}
