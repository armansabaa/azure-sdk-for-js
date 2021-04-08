/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SpanStatusCode } from "@azure/core-tracing";
import { createSpan } from "../tracing";
import { PipelineRun } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClientContext } from "../artifactsClientContext";
import {
  RunFilterParameters,
  PipelineRunQueryPipelineRunsByWorkspaceResponse,
  PipelineRunGetPipelineRunResponse,
  PipelineRunQueryActivityRunsResponse,
  PipelineRunCancelPipelineRunOptionalParams
} from "../models";

/** Class representing a PipelineRun. */
export class PipelineRunImpl implements PipelineRun {
  private readonly client: ArtifactsClientContext;

  /**
   * Initialize a new instance of the class PipelineRun class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClientContext) {
    this.client = client;
  }

  /**
   * Query pipeline runs in the workspace based on input filter conditions.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param options The options parameters.
   */
  async queryPipelineRunsByWorkspace(
    filterParameters: RunFilterParameters,
    options?: coreHttp.OperationOptions
  ): Promise<PipelineRunQueryPipelineRunsByWorkspaceResponse> {
    const { span, updatedOptions } = createSpan(
      "ArtifactsClient-queryPipelineRunsByWorkspace",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      filterParameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        queryPipelineRunsByWorkspaceOperationSpec
      );
      return result as PipelineRunQueryPipelineRunsByWorkspaceResponse;
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
   * Get a pipeline run by its run ID.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  async getPipelineRun(
    runId: string,
    options?: coreHttp.OperationOptions
  ): Promise<PipelineRunGetPipelineRunResponse> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-getPipelineRun", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      runId,
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getPipelineRunOperationSpec
      );
      return result as PipelineRunGetPipelineRunResponse;
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
   * Query activity runs based on input filter conditions.
   * @param pipelineName The pipeline name.
   * @param runId The pipeline run identifier.
   * @param filterParameters Parameters to filter the activity runs.
   * @param options The options parameters.
   */
  async queryActivityRuns(
    pipelineName: string,
    runId: string,
    filterParameters: RunFilterParameters,
    options?: coreHttp.OperationOptions
  ): Promise<PipelineRunQueryActivityRunsResponse> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-queryActivityRuns", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      pipelineName,
      runId,
      filterParameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        queryActivityRunsOperationSpec
      );
      return result as PipelineRunQueryActivityRunsResponse;
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
   * Cancel a pipeline run by its run ID.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  async cancelPipelineRun(
    runId: string,
    options?: PipelineRunCancelPipelineRunOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const { span, updatedOptions } = createSpan("ArtifactsClient-cancelPipelineRun", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      runId,
      options: coreHttp.operationOptionsToRequestOptionsBase(updatedOptions || {})
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        cancelPipelineRunOperationSpec
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
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const queryPipelineRunsByWorkspaceOperationSpec: coreHttp.OperationSpec = {
  path: "/queryPipelineRuns",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRunsQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.filterParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getPipelineRunOperationSpec: coreHttp.OperationSpec = {
  path: "/pipelineruns/{runId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRun
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.runId],
  headerParameters: [Parameters.accept],
  serializer
};
const queryActivityRunsOperationSpec: coreHttp.OperationSpec = {
  path: "/pipelines/{pipelineName}/pipelineruns/{runId}/queryActivityruns",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ActivityRunsQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.filterParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.pipelineName, Parameters.runId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const cancelPipelineRunOperationSpec: coreHttp.OperationSpec = {
  path: "/pipelineruns/{runId}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.isRecursive],
  urlParameters: [Parameters.endpoint, Parameters.runId],
  headerParameters: [Parameters.accept],
  serializer
};
