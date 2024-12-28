import React from "react";

const Analytics = () => {
  const analyticsData = [
    { url: "http://short.ly/abc123", clicks: 42, lastAccessed: "2024-12-25" },
    { url: "http://short.ly/custom", clicks: 18, lastAccessed: "2024-12-26" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Link Analytics</h2>
      <table className="table mt-4 table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>Last Accessed</th>
          </tr>
        </thead>
        <tbody>
          {analyticsData.map((data, index) => (
            <tr key={index}>
              <td>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  {data.url}
                </a>
              </td>
              <td>{data.clicks}</td>
              <td>{data.lastAccessed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;

