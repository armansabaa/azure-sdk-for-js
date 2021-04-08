/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/// <reference lib="esnext.asynciterable" />
import { SpanStatusCode } from "@azure/core-tracing";
import { createSpan } from "../tracing";
import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Library } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClientContext } from "../artifactsClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  LibraryResource,
  LibraryListOperationResponse,
  LibraryGetOperationResultResponse,
  LibraryGetResponse,
  LibraryAppendOptionalParams,
  LibraryListNextResponse
} from "../models";

/** Class representing a Library. */
export class LibraryImpl implements Library {
  private readonly client: ArtifactsClientContext;

  /**
   * Initialize a new instance of the class Library class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClientContext) {
    this.client = client;
  }

  /**
   * Lists Library.
   * @param options The options parameters.
   */
  public list(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<LibraryResource> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<LibraryResource[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<LibraryResource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists Library.
   * @param options The options parameters.
   */
  private async _list(options?: coreHttp.OperationOptions): Promise<LibraryListOperationResponse> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-_list", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(operationArguments, listOperationSpec);
      return result as LibraryListOperationResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Flush Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async flush(
    libraryName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-flush", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      libraryName,
      options: this.getOperationOptions(updatedOptions, "undefined")
    };
    const sendOperation = async (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as coreHttp.RestResponse;
      } catch (error) {
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };

    const initialOperationResult = await sendOperation(operationArguments, flushOperationSpec);
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: flushOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Get Operation result for Library
   * @param operationId operation id for which status is requested
   * @param options The options parameters.
   */
  async getOperationResult(
    operationId: string,
    options?: coreHttp.OperationOptions
  ): Promise<LibraryGetOperationResultResponse> {
    const { span, updatedOptions } = createSpan(
      "ArtifactsClient-getOperationResult",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      operationId,
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getOperationResultOperationSpec
      );
      return result as LibraryGetOperationResultResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Delete Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async delete(
    libraryName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-delete", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      libraryName,
      options: this.getOperationOptions(updatedOptions, "undefined")
    };
    const sendOperation = async (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as coreHttp.RestResponse;
      } catch (error) {
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };

    const initialOperationResult = await sendOperation(operationArguments, deleteOperationSpec);
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Get Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async get(libraryName: string, options?: coreHttp.OperationOptions): Promise<LibraryGetResponse> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-get", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      libraryName,
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(operationArguments, getOperationSpec);
      return result as LibraryGetResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates a library with the library name.
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async create(
    libraryName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-create", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      libraryName,
      options: this.getOperationOptions(updatedOptions, "undefined")
    };
    const sendOperation = async (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as coreHttp.RestResponse;
      } catch (error) {
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };

    const initialOperationResult = await sendOperation(operationArguments, createOperationSpec);
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Append the content to the library resource created using the create operation. The maximum content
   * size is 4MiB. Content larger than 4MiB must be appended in 4MiB chunks
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param content Library file chunk.
   * @param options The options parameters.
   */
  async append(
    libraryName: string,
    content: coreHttp.HttpRequestBody,
    options?: LibraryAppendOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-append", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      libraryName,
      content,
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        appendOperationSpec
      );
      return result as coreHttp.RestResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private async _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<LibraryListNextResponse> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-_listNext", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        listNextOperationSpec
      );
      return result as LibraryListNextResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path: "/libraries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const flushOperationSpec: coreHttp.OperationSpec = {
  path: "/libraries/{libraryName}/flush",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationResultOperationSpec: coreHttp.OperationSpec = {
  path: "/libraryOperationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryResource
    },
    202: {
      bodyMapper: Mappers.OperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.operationId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/libraries/{libraryName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/libraries/{libraryName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreHttp.OperationSpec = {
  path: "/libraries/{libraryName}",
  httpMethod: "PUT",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [Parameters.accept],
  serializer
};
const appendOperationSpec: coreHttp.OperationSpec = {
  path: "/libraries/{libraryName}",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.content,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [
    Parameters.contentType1,
    Parameters.accept1,
    Parameters.xMsBlobConditionAppendpos
  ],
  mediaType: "binary",
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
