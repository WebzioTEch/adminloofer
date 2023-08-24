import DataGridD from 'app/form/DataGridD';
import React from 'react';
import { Box, Divider } from '@mui/material';
import ProductTable from 'app/form/ProductTable';

const ProductList = () => {
	return (
		<div>
			<Box
				style={{
					boxShadow:
						'rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px',
					padding: 30,
					background: 'white'
				}}>
				<h2>Product List</h2>
				<Divider style={{ marginTop: 20, marginBottom: 20 }} />
				<ProductTable />
			</Box>
		</div>
	);
};

export default ProductList;
