import React, { useEffect, useState } from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import CountHours from "./CountHours";
import DaysWeek from "./DaysWeek";
import "./SlotsTable.css";

const SlotsTable = ({ rowCount, colCount }) => {
  const [stateTable, setStateTable] = useState({
    rows: [],
  });

  useEffect(() => {
    if (localStorage.getItem("tableSlots") === null) {
      const modelRows = [];
      for (let i = 0; i < rowCount; i++) {
        modelRows.push(new Array(colCount).fill(false));
      }
      setStateTable({ rows: modelRows });
      localStorage.setItem("tableSlots", JSON.stringify(stateTable));
    } else {
      setStateTable(JSON.parse(localStorage.getItem("tableSlots")));
    }
  }, [rowCount, colCount]);

  useEffect(() => {
    localStorage.setItem("tableSlots", JSON.stringify(stateTable));
  }, [stateTable]);

  return (
    <div className="tableContainer">
      <DaysWeek count={rowCount} />
      <div className="tableBox">
        <CountHours count={colCount} />
        <TableDragSelect
          value={stateTable.rows}
          onChange={(rows) => setStateTable({ rows })}
        >
          {stateTable.rows.map((row, indexRow) => {
            return (
              <tr key={indexRow}>
                {row.map((item, indexCell) => (
                  <td key={indexCell} />
                ))}
              </tr>
            );
          })}
        </TableDragSelect>
      </div>
    </div>
  );
};

SlotsTable.defaultProps = {
  rowCount: 7,
  colCount: 24,
};

export default SlotsTable;
