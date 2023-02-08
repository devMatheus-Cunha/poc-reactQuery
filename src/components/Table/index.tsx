import React from "react";

import "./styles.css";

export interface Columns {
  header: string;
  name: string;
  action?: (id: string | number) => void;
}

interface TableProps<T> {
  data: T[];
  columns: Columns[];
}

const Table = <T extends {}>({ columns, data = [] }: TableProps<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ header, name }) => (
            <th key={`${header}-${name}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: Record<string, string | number>) => (
          <tr key={row.id}>
            {columns.map(({ name, action }) => (
              <td
                onClick={() => action && action(row?.id)}
                key={`${name}-${row.id}`}
              >
                <div
                  style={{
                    cursor: !!action ? "pointer" : "auto",
                    textDecoration: !!action ? "underline" : "auto",
                    width: "80%",
                  }}
                >
                  {row[name]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
