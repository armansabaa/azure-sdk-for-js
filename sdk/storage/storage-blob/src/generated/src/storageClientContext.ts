/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

const packageName = "azure-storage-blob";
const packageVersion = "12.4.0-beta.1";

export class StorageClientContext extends coreHttp.ServiceClient {
  url: string;
  version: string;

  /**
   * Initializes a new instance of the StorageClientContext class.
   * @param url The URL of the service account, container, or blob that is the targe of the desired
   * operation.
   * @param [options] The parameter options
   */
  constructor(url: string, options?: coreHttp.ServiceClientOptions) {
    if (url == undefined) {
      throw new Error("'url' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.version = '2020-04-08';
    this.baseUri = "{url}";
    this.requestContentType = "application/json; charset=utf-8";
    this.url = url;
  }
}
