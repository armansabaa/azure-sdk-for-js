/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  ApiVersion20200630Preview,
  SearchServiceClientOptionalParams
} from "./models";

const packageName = "@azure/search-documents";
const packageVersion = "11.2.0-beta.2";

/** @internal */
export class SearchServiceClientContext extends coreHttp.ServiceClient {
  endpoint: string;
  apiVersion: ApiVersion20200630Preview;

  /**
   * Initializes a new instance of the SearchServiceClientContext class.
   * @param endpoint The endpoint URL of the search service.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    apiVersion: ApiVersion20200630Preview,
    options?: SearchServiceClientOptionalParams
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{endpoint}";

    // Parameter assignments
    this.endpoint = endpoint;
    this.apiVersion = apiVersion;
  }
}
