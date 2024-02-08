import React from "react";

type Props = {};

export default function LoadingTable({}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>
              <div className="skeleton h-4 w-full"></div>
            </th>
            <th>
              <div className="skeleton h-4 w-full"></div>
            </th>
            <th>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </th>
            <td>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </td>
            <td>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </td>
            <td>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </td>
          </tr>
          <tr>
            <th>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </th>
            <td>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </td>
            <td>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </td>
            <td>
              {" "}
              <div className="skeleton h-4 w-full"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
