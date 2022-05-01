import React from "react";

const Table = () => {
  const arr = [
    { l: "java", e: 2 },
    { l: "javascript", e: 2 },
    { l: "spring", e: 1 },
    { l: "react", e: 2 },
    { l: "node", e: 2 },
    { l: "express", e: 2 },
    { l: "html", e: 2 },
    { l: "css", e: 2 }
  ];

  return (
    <div className="table" id="tab">
      <h1>Skills I have till</h1>

      <table>
        <tr className="heading">
          <th>Languages</th>
          <th>Efficiency</th>
        </tr>
        {arr.map((elem) => {
          return (
            <tr>
              <td>{elem.l}</td>
              <td>
                {(elem.e === 1 && `beginner`) ||
                  (elem.e === 2 && "intermediate")}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
