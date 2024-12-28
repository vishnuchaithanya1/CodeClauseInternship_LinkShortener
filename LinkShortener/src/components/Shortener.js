import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Shortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const shortenUrl = () => {
    const baseUrl = "http://short.ly/";
    const uniqueId = Math.random().toString(36).substring(2, 8);
    const alias = customAlias || uniqueId;
    const shortUrl = `${baseUrl}${alias}`;
    setShortenedUrl(shortUrl);
    setQrCode(shortUrl);
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-white">Link Shortener</h1>
        <p className="text-light">Simplify your links with a touch of style!</p>
      </div>
      <div className="card p-4 shadow mt-4">
        <div className="form-group">
          <label>Enter Long URL:</label>
          <input
            type="text"
            className="form-control"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="https://example.com"
          />
        </div>
        <div className="form-group mt-3">
          <label>Custom Alias (optional):</label>
          <input
            type="text"
            className="form-control"
            value={customAlias}
            onChange={(e) => setCustomAlias(e.target.value)}
            placeholder="my-short-url"
          />
        </div>
        <button
          className="btn btn-primary mt-4 w-100"
          onClick={shortenUrl}
          disabled={!longUrl}
        >
          Shorten URL
        </button>
      </div>

      {shortenedUrl && (
        <div className="mt-5 text-center">
          <h5>Shortened URL:</h5>
          <a
            className="shortened-url"
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortenedUrl}
          </a>
          <div className="qr-code">
            <h5>QR Code:</h5>
            <QRCodeCanvas value={qrCode} size={128} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shortener;

