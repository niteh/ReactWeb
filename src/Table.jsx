import React from 'react'
import DataTable from 'react-data-table-component';
import { columns, data } from "./data";




const Table = () => {
    const tableData = {
        columns,
        data
      };

    

    return (
        <>
         <div className="container">
         <DataTable
		title="Movie List"
		columns={columns}
		data={data}
		
		pagination
	
		dense
	/>
        </div>
     
        </>
    )
}

export default Table
