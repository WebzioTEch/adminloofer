import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'image',
		headerName: 'Image',
		width: 300,
		height: 300,
		editable: true,
		renderCell: (params) => <img src={params.value} style={{ height: 50 }} />
	},
	{
		field: 'action',
		headerName: 'Action',
		width: 300,
		editable: true,
		renderCell: (cellValues) => {
			return (
				<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button
						variant='contained'
						color='primary'
						onClick={(event) => {
							// handleClick(event, cellValues);
						}}>
						Edit
					</Button>
					<Button
						variant='contained'
						color='primary'
						style={{ marginLeft: 10 }}
						onClick={(event) => {
							// handleClick(event, cellValues);
						}}>
						Delete
					</Button>
				</Box>
			);
		}
	}
];

const rows = [
	{
		id: 1,
		image: 'https://admin-six-iota.vercel.app/assets/images/products/headphone-2.jpg',
		name: 'Jon'
	}
];

export default function BannerTable() {
	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5
						}
					}
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Box>
	);
}
