/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** A paged collection of chat message read receipts. */
export interface ChatMessageReadReceiptsCollection {
  /** Collection of chat message read receipts. */
  value: ChatMessageReadReceipt[];
  /**
   * If there are more chat message read receipts that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** A chat message read receipt indicates the time a chat message was read by a recipient. */
export interface ChatMessageReadReceipt {
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  senderCommunicationIdentifier: CommunicationIdentifierModel;
  /** Id of the chat message that has been read. This id is generated by the server. */
  chatMessageId: string;
  /** The time at which the message was read. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  readOn: Date;
}

/** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
export interface CommunicationIdentifierModel {
  /** Raw Id of the identifier. Optional in requests, required in responses. */
  rawId?: string;
  /** The communication user. */
  communicationUser?: CommunicationUserIdentifierModel;
  /** The phone number. */
  phoneNumber?: PhoneNumberIdentifierModel;
  /** The Microsoft Teams user. */
  microsoftTeamsUser?: MicrosoftTeamsUserIdentifierModel;
}

/** A user that got created with an Azure Communication Services resource. */
export interface CommunicationUserIdentifierModel {
  /** The Id of the communication user. */
  id: string;
}

/** A phone number. */
export interface PhoneNumberIdentifierModel {
  /** The phone number in E.164 format. */
  value: string;
}

/** A Microsoft Teams user. */
export interface MicrosoftTeamsUserIdentifierModel {
  /** The Id of the Microsoft Teams user. If not anonymous, this is the AAD object Id of the user. */
  userId: string;
  /** True if the Microsoft Teams user is anonymous. By default false if missing. */
  isAnonymous?: boolean;
  /** The cloud that the Microsoft Teams user belongs to. By default 'public' if missing. */
  cloud?: CommunicationCloudEnvironmentModel;
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

/** Request payload for sending a read receipt. */
export interface SendReadReceiptRequest {
  /** Id of the latest chat message read by the user. */
  chatMessageId: string;
}

/** Details of the message to send. */
export interface SendChatMessageRequest {
  /** Chat message content. */
  content: string;
  /** The display name of the chat message sender. This property is used to populate sender name for push notifications. */
  senderDisplayName?: string;
  /** The chat message type. */
  type?: ChatMessageType;
}

/** Result of the send message operation. */
export interface SendChatMessageResult {
  /** A server-generated message id. */
  id: string;
}

/** Collection of chat messages for a particular chat thread. */
export interface ChatMessagesCollection {
  /** Collection of chat messages. */
  value: ChatMessage[];
  /**
   * If there are more chat messages that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Chat message. */
export interface ChatMessage {
  /** The id of the chat message. This id is server generated. */
  id: string;
  /** The chat message type. */
  type: ChatMessageType;
  /** Sequence of the chat message in the conversation. */
  sequenceId: string;
  /** Version of the chat message. */
  version: string;
  /** Content of a chat message. */
  content?: ChatMessageContent;
  /** The display name of the chat message sender. This property is used to populate sender name for push notifications. */
  senderDisplayName?: string;
  /** The timestamp when the chat message arrived at the server. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  createdOn: Date;
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  senderCommunicationIdentifier?: CommunicationIdentifierModel;
  /** The timestamp (if applicable) when the message was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /** The last timestamp (if applicable) when the message was edited. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  editedOn?: Date;
}

/** Content of a chat message. */
export interface ChatMessageContent {
  /** Chat message content for messages of types text or html. */
  message?: string;
  /** Chat message content for messages of type topicUpdated. */
  topic?: string;
  /** Chat message content for messages of types participantAdded or participantRemoved. */
  participants?: ChatParticipant[];
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  initiatorCommunicationIdentifier?: CommunicationIdentifierModel;
}

/** A participant of the chat thread. */
export interface ChatParticipant {
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  communicationIdentifier: CommunicationIdentifierModel;
  /** Display name for the chat participant. */
  displayName?: string;
  /** Time from which the chat history is shared with the participant. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  shareHistoryTime?: Date;
}

/** Request payload for updating a chat message. */
export interface UpdateChatMessageRequest {
  /** Chat message content. */
  content?: string;
}

/** Collection of participants belong to a particular thread. */
export interface ChatParticipantsCollection {
  /** Chat participants. */
  value: ChatParticipant[];
  /**
   * If there are more chat participants that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Participants to be added to the thread. */
export interface AddChatParticipantsRequest {
  /** Participants to add to a chat thread. */
  participants: ChatParticipant[];
}

/** Result of the add chat participants operation. */
export interface AddChatParticipantsResult {
  /** Errors encountered during the addition of the chat participant to the chat thread. */
  errors?: AddChatParticipantsErrors;
}

/** Errors encountered during the addition of the chat participant to the chat thread. */
export interface AddChatParticipantsErrors {
  /** The participants that failed to be added to the chat thread. */
  invalidParticipants: CommunicationError[];
}

/** Request payload for creating a chat thread. */
export interface CreateChatThreadRequest {
  /** The chat thread topic. */
  topic: string;
  /** Participants to be added to the chat thread. */
  participants: ChatParticipant[];
}

/** Result of the create chat thread operation. */
export interface CreateChatThreadResult {
  /** Chat thread. */
  chatThread?: ChatThread;
  /** Errors encountered during the creation of the chat thread. */
  errors?: CreateChatThreadErrors;
}

/** Chat thread. */
export interface ChatThread {
  /** Chat thread id. */
  id: string;
  /** Chat thread topic. */
  topic: string;
  /** The timestamp when the chat thread was created. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  createdOn: Date;
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  createdByCommunicationIdentifier: CommunicationIdentifierModel;
  /** The timestamp when the chat thread was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
}

/** Errors encountered during the creation of the chat thread. */
export interface CreateChatThreadErrors {
  /**
   * The participants that failed to be added to the chat thread.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invalidParticipants?: CommunicationError[];
}

/** Collection of chat threads. */
export interface ChatThreadsInfoCollection {
  /** Collection of chat threads. */
  value: ChatThreadInfo[];
  /**
   * If there are more chat threads that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Summary information of a chat thread. */
export interface ChatThreadInfo {
  /** Chat thread id. */
  id: string;
  /** Chat thread topic. */
  topic: string;
  /** The timestamp when the chat thread was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /**
   * The timestamp when the last message arrived at the server. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastMessageReceivedOn?: Date;
}

/** Request payload for updating a chat thread. */
export interface UpdateChatThreadRequest {
  /** Chat thread topic. */
  topic?: string;
}

/** Known values of {@link CommunicationCloudEnvironmentModel} that the service accepts. */
export const enum KnownCommunicationCloudEnvironmentModel {
  Public = "public",
  Dod = "dod",
  Gcch = "gcch"
}

/**
 * Defines values for CommunicationCloudEnvironmentModel. \
 * {@link KnownCommunicationCloudEnvironmentModel} can be used interchangeably with CommunicationCloudEnvironmentModel,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **public** \
 * **dod** \
 * **gcch**
 */
export type CommunicationCloudEnvironmentModel = string;

/** Known values of {@link ChatMessageType} that the service accepts. */
export const enum KnownChatMessageType {
  Text = "text",
  Html = "html",
  TopicUpdated = "topicUpdated",
  ParticipantAdded = "participantAdded",
  ParticipantRemoved = "participantRemoved"
}

/**
 * Defines values for ChatMessageType. \
 * {@link KnownChatMessageType} can be used interchangeably with ChatMessageType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **text** \
 * **html** \
 * **topicUpdated** \
 * **participantAdded** \
 * **participantRemoved**
 */
export type ChatMessageType = string;

/** Optional parameters. */
export interface ChatThreadListChatReadReceiptsOptionalParams extends coreHttp.OperationOptions {
  /** The maximum number of chat message read receipts to be returned per page. */
  maxPageSize?: number;
  /** Skips chat message read receipts up to a specified position in response. */
  skip?: number;
}

/** Contains response data for the listChatReadReceipts operation. */
export type ChatThreadListChatReadReceiptsResponse = ChatMessageReadReceiptsCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatMessageReadReceiptsCollection;
  };
};

/** Contains response data for the sendChatMessage operation. */
export type ChatThreadSendChatMessageResponse = SendChatMessageResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: SendChatMessageResult;
  };
};

/** Optional parameters. */
export interface ChatThreadListChatMessagesOptionalParams extends coreHttp.OperationOptions {
  /** The maximum number of messages to be returned per page. */
  maxPageSize?: number;
  /** The earliest point in time to get messages up to. The timestamp should be in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  startTime?: Date;
}

/** Contains response data for the listChatMessages operation. */
export type ChatThreadListChatMessagesResponse = ChatMessagesCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatMessagesCollection;
  };
};

/** Contains response data for the getChatMessage operation. */
export type ChatThreadGetChatMessageResponse = ChatMessage & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatMessage;
  };
};

/** Optional parameters. */
export interface ChatThreadListChatParticipantsOptionalParams extends coreHttp.OperationOptions {
  /** The maximum number of participants to be returned per page. */
  maxPageSize?: number;
  /** Skips participants up to a specified position in response. */
  skip?: number;
}

/** Contains response data for the listChatParticipants operation. */
export type ChatThreadListChatParticipantsResponse = ChatParticipantsCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatParticipantsCollection;
  };
};

/** Contains response data for the addChatParticipants operation. */
export type ChatThreadAddChatParticipantsResponse = AddChatParticipantsResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AddChatParticipantsResult;
  };
};

/** Optional parameters. */
export interface ChatThreadListChatReadReceiptsNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of chat message read receipts to be returned per page. */
  maxPageSize?: number;
  /** Skips chat message read receipts up to a specified position in response. */
  skip?: number;
}

/** Contains response data for the listChatReadReceiptsNext operation. */
export type ChatThreadListChatReadReceiptsNextResponse = ChatMessageReadReceiptsCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatMessageReadReceiptsCollection;
  };
};

/** Optional parameters. */
export interface ChatThreadListChatMessagesNextOptionalParams extends coreHttp.OperationOptions {
  /** The maximum number of messages to be returned per page. */
  maxPageSize?: number;
  /** The earliest point in time to get messages up to. The timestamp should be in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  startTime?: Date;
}

/** Contains response data for the listChatMessagesNext operation. */
export type ChatThreadListChatMessagesNextResponse = ChatMessagesCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatMessagesCollection;
  };
};

/** Optional parameters. */
export interface ChatThreadListChatParticipantsNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The maximum number of participants to be returned per page. */
  maxPageSize?: number;
  /** Skips participants up to a specified position in response. */
  skip?: number;
}

/** Contains response data for the listChatParticipantsNext operation. */
export type ChatThreadListChatParticipantsNextResponse = ChatParticipantsCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatParticipantsCollection;
  };
};

/** Optional parameters. */
export interface ChatCreateChatThreadOptionalParams extends coreHttp.OperationOptions {
  /** If specified, the client directs that the request is repeatable; that is, that the client can make the request multiple times with the same Repeatability-Request-Id and get back an appropriate response without the server executing the request multiple times. The value of the Repeatability-Request-Id is an opaque string representing a client-generated, globally unique for all time, identifier for the request. It is recommended to use version 4 (random) UUIDs. */
  repeatabilityRequestId?: string;
}

/** Contains response data for the createChatThread operation. */
export type ChatCreateChatThreadResponse = CreateChatThreadResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CreateChatThreadResult;
  };
};

/** Optional parameters. */
export interface ChatListChatThreadsOptionalParams extends coreHttp.OperationOptions {
  /** The maximum number of chat threads returned per page. */
  maxPageSize?: number;
  /** The earliest point in time to get chat threads up to. The timestamp should be in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  startTime?: Date;
}

/** Contains response data for the listChatThreads operation. */
export type ChatListChatThreadsResponse = ChatThreadsInfoCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatThreadsInfoCollection;
  };
};

/** Contains response data for the getChatThread operation. */
export type ChatGetChatThreadResponse = ChatThread & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatThread;
  };
};

/** Optional parameters. */
export interface ChatListChatThreadsNextOptionalParams extends coreHttp.OperationOptions {
  /** The maximum number of chat threads returned per page. */
  maxPageSize?: number;
  /** The earliest point in time to get chat threads up to. The timestamp should be in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  startTime?: Date;
}

/** Contains response data for the listChatThreadsNext operation. */
export type ChatListChatThreadsNextResponse = ChatThreadsInfoCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChatThreadsInfoCollection;
  };
};

/** Optional parameters. */
export interface ChatApiClientOptionalParams extends coreHttp.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
