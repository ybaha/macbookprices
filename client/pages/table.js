import React, { useState } from 'react'
import { useTable } from 'react-table'
import t from '../styles/table.module.css'


export default function Table(props) {
  // const [list, setList] = useState(false)
  // if (props.list && list !== false){
  //   setList(props.list)
  // }
  console.log(props.list);
  let list = props.list
  const displayTable = () => {
    list.forEach(e => {
      let country = e.col1
      e.col1 = <img height="24px" width="36px" src={`./icons/png/${country}.png`}></img>
    });
    const data = React.useMemo(
      () => list, []
    )
    const columns = React.useMemo(
      () => [
        {
          Header: 'Country',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'Macbook 13" 1',
          accessor: 'col2',
        },
        {
          Header: 'Macbook 13" 2',
          accessor: 'col3',
        },
        {
          Header: 'Macbook 13" 3',
          accessor: 'col4',
        },
        {
          Header: 'Macbook 13" 4',
          accessor: 'col5',
        },
        {
          Header: 'Macbook 16" 1',
          accessor: 'col6',
        },
        {
          Header: 'Macbook 16" 2',
          accessor: 'col7',
        },
      ],
      []
    )
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })
    return (
      <table {...getTableProps()} className={t.rtable}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className={t.th}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className={t.tr}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={t.td}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }


  return (
    <>
      { list ? displayTable() : <></>}
    </>
  )
}
