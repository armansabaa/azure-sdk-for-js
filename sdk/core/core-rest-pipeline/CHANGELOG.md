# Release History

## 1.1.0-beta.2 (Unreleased)

### Fixed

- Fixed an issue where tracing spans were not setting a status correctly (on success or error) which results in the span status being `UNSET`. In addition, we will now capture the HTTP status code when a request fails in the tracing span. [PR 15061](https://github.com/Azure/azure-sdk-for-js/pull/15061)

## 1.1.0-beta.1 (2021-05-06)

### Features Added

- Add a new `bearerTokenChallengeAuthenticationPolicy` that provides a skeleton of handling challenge-based authorization. There are two extensible points: `authorizeRequest` and `authorizeRequestOnChallenge` callbacks.
  - `authorizeRequest` allows customizing the policy to alter how it authorizes a request before sending it. By default when no callbacks are specified, this policy has the same behavior as `bearerTokenAuthenticationPolicy`. It will retrieve the token from the underlying token credential, and if it gets one, it will cache the token and set it to the outgoing request.
  - `authorizeRequestOnChallenge`, which gets called only if we've found a challenge in the response. This callback has access to the original request and its response and is expected to handle the challenge. If this callback returns true, the request, usually updated after handling the challenge, will be sent again. If this call back returns false, no further actions will be taken.

### Fixed

- Rewrote `bearerTokenAuthenticationPolicy` to use a new backend that refreshes tokens only when they're about to expire and not multiple times before. This is based on a similar fix implemented on `@azure/core-http@1.2.4` ([PR with the changes](https://github.com/Azure/azure-sdk-for-js/pull/14223)). This fixes the issue: [13369](https://github.com/Azure/azure-sdk-for-js/issues/13369).
- Delay loading of NO_PROXY environment variable until when request pipeline is being created. This fixes [issue 14873](https://github.com/Azure/azure-sdk-for-js/issues/14873)

## 1.0.3 (2021-03-30)

### Breaking Changes

- Updated @azure/core-tracing to version `1.0.0-preview.11`. See [@azure/core-tracing CHANGELOG](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/core/core-tracing/CHANGELOG.md) for details about breaking changes with tracing.

## 1.0.2 (2021-03-25)

- Fixed an issue where chunked HTTP responses would sometimes be decoded incorrectly when multibyte characters were used. [PR 14517](https://github.com/Azure/azure-sdk-for-js/pull/14517)

## 1.0.1 (2021-03-18)

- Fixed an issue where `timeout` and `abortSignal` of requests was not honored on Node after requests had already been issued to the server. [PR 14359](https://github.com/Azure/azure-sdk-for-js/pull/14359)

## 1.0.0 (2021-03-15)

GA release of this package.

## 1.0.0-beta.2 (2021-03-10)

- Renamed interfaces with `HTTPS` in the name to have `HTTP` instead.
- Changed from exposing `DefaultHttpsClient` as a class directly, to providing `createDefaultHttpsClient()` to instantiate the appropriate runtime class.
- Fix an issue when passing in proxy hosts. [PR 13911](https://github.com/Azure/azure-sdk-for-js/pull/13911)
- Package rename to `core-rest-pipeline` to better reflect its purpose.

## 1.0.0-beta.1 (2021-02-04)

- Changes from `core-http`:
  - First release of new Pipeline model, see README for details.
  - ServiceClient and related AutoRest functionality moved out to `core-client`.
  - XML functionality moved out to `core-xml`.
  - Removal of node-fetch dependency.
  - Switched to use `https-proxy-agent` for proxy support.
  - Dropped IE support.
  - Stopped exporting various helper/utility methods.
  - All function parameters are now interfaces.
  - Remove rpRegistrationPolicy.
  - Remove keepAlivePolicy
  - Let clients add ndJsonPolicy manually
  - Disable redirects by removing the policy instead of an option
  - Invert response decompression policy
  - Remove request cloning, to optimize pipeline allocations.
- Add ms-cv header used as correlation vector (used for distributed tracing) to list of non-redacted headers so that clients can share this header for debugging purposes. [PR 13541](https://github.com/Azure/azure-sdk-for-js/pull/13541)
