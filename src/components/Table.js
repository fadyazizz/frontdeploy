import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import tableRow from '../StyleSheets/tableRow.css'
import cancel from '../Images/cancel.png'
import accept from '../Images/accept.png'
import rejected from '../Images/rejected.png'
export default function Table(props) {
  const [rows, setRows] = useState(props.records)
  const size = 100 / (props.request ? props.keys.length + 1 : props.keys.length)
  return (
    <table className='tableStyle'>
      <tr>
        <td>
          <Card className='TableRow'>
            <table>
              <tr
                style={{
                  backgroundColor: props.headerColor
                    ? props.headerColor
                    : '#abaeb3',
                  color: 'white',
                }}
              >
                {props.headerNames.map((name) => {
                  return (
                    <td
                      style={{
                        padding: '0%',
                        width: `${size}%`,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {name}
                    </td>
                  )
                })}
                <td
                  style={{
                    padding: '0%',
                    width: `${size}%`,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {props.request
                    ? props.functionHeaders.map((header) => {
                        return header
                      })
                    : ''}
                </td>
              </tr>
            </table>
          </Card>
        </td>
      </tr>

      {props.records.map((row) => {
        return (
          <tr>
            <td>
              <Card className='TableRow'>
                <table>
                  <tr>
                    {props.keys.map((key) => {
                      return (
                        <React.Fragment>
                          <td
                            style={{
                              padding: '0%',
                              width: `${size}%`,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {row[key]}
                          </td>
                        </React.Fragment>
                      )
                    })}
                    {props.request ? (
                      <td
                        style={{
                          padding: '0%',
                          width: `${size}%`,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {props.cancel ? (
                          <img
                            style={{ marginLeft: '3%', marginRight: '1%' }}
                            width='10%'
                            src={cancel}
                            onClick={() => props.cancel(row._id)}
                          ></img>
                        ) : (
                          ''
                        )}
                        {props.reject ? (
                          <img
                            style={{ marginRight: '1%' }}
                            width='10%'
                            src={rejected}
                            onClick={() => props.reject(row._id)}
                          ></img>
                        ) : (
                          ''
                        )}
                        {props.accept ? (
                          <img
                            width='10%'
                            src={accept}
                            onClick={() => props.accept(row._id)}
                          ></img>
                        ) : (
                          ''
                        )}
                      </td>
                    ) : (
                      ''
                    )}
                  </tr>
                </table>
              </Card>
            </td>
          </tr>
        )
      })}
    </table>
  )
}
