import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { divideBy10E18 } from '../utils/math';

export default function Epoches(props) {
    const {data} = props; 
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);

    const buildRowsAndColumns = (epoches) => {
        const columns = [];
        const rows = [];

        const keys = Object.keys(epoches[1]);

        keys.map((key) => { 
            if (key === '__typename' || key === 'id') {
                return
            }

            columns.push({
                field: key,
                headerName: key,
                minWidth: 250,
                align: `left`,
            })
        });

        epoches.map(epoch => rows.push({
            id: epoch.id,
            startBlock: epoch.startBlock,
            totalRewards: divideBy10E18(epoch.totalRewards),
            stakeDeposited: divideBy10E18(epoch.stakeDeposited),
            taxedQueryFees: divideBy10E18(epoch.taxedQueryFees),
            totalIndexerRewards: divideBy10E18(epoch.totalIndexerRewards),
            endBlock: epoch.endBlock
        }))

        setRows(rows);
        setColumns(columns);
    }

    React.useEffect(()=> {
        buildRowsAndColumns(data.epoches)
    }, [data]);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        rowHeight={40}
      />
    </div>
  );
}