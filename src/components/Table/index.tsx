import React from "react";

import "././styles.module.scss";

export interface Columns {
  header: string;
  name: string;
  action?: (data: Record<string, string | number>) => void
  modifer?: any

}

interface TableProps<T> {
  data: T[];
  columns: Columns[];
}

const Table = <T extends {}>({ columns, data = [] }: TableProps<T>) => {

  const getValueByString = (object: any, path: string) => {
    const properties = path.split('.');
    return properties.reduce((prev: any, curr: string) => prev && prev[curr], object);
  };


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
            {columns.map(({ name, action, modifer }) => (
              <td
                onClick={() => action && action(row)}
                key={`${name}-${row.id}`}
              >
                <div
                  style={{
                    cursor: !!action ? "pointer" : "auto",
                    textDecoration: !!action ? "underline" : "auto",
                  }}
                >
                  {
                    name === "actions" ? (
                      { ...modifer }
                    ) : (
                      <>
                        {getValueByString(row, name)}
                      </>
                    )
                  }
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
