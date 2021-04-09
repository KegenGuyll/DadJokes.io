import React from "react";

const EndpointGenericWriteup = () => {
  return (
    <>
      <br />
      <section>
        <h2>Authentication:</h2>
        <p>An API Key is required and is provide by RapidAPI</p>
      </section>
      <section>
        <h2>API response format:</h2>
        <p>
          All API endpoints follow their respective browser URLs, but we adjust
          the response formatting to be more suited for an API based on the
          provided HTTP <code>Accept</code> header.
        </p>
        <p>
          Accepted <code>Accept</code> headers:
        </p>
        <ul>
          <li>
            <code>text/html</code> - HTML response (default response format)
          </li>
          <li>
            <code>application/json</code> - JSON response
          </li>
          <li>
            <code>text/plain</code> - Plain text response
          </li>
        </ul>
        <p>
          <b>Note:</b> Requests made via <code>curl</code> which do not set an{" "}
          <code>Accept</code> header will respond with <code>text/plain</code>{" "}
          by default.
        </p>
      </section>
    </>
  );
};

export default EndpointGenericWriteup;
