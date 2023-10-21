import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const columns = [
    
    { field: 'id', headerName: 'Order ID', width: 110 },
    { field: 'user_id', headerName: 'User ID', width: 110 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'transaction_id', headerName: 'Transaction ID', width: 200 },
    { field: 'amount', headerName: 'Amount', width: 110 },
    { field: 'status', headerName: 'Order Status', width: 160 },
    { field: 'payment_status', headerName: 'Payment Status', width: 160 },
    { field: 'order_item_id', headerName: 'Order Item ID', width: 150 },
    { field: 'order_item_order_id', headerName: 'Order Item Order ID', width: 200 },
    { field: 'order_item_product_id', headerName: 'Order Item Product ID', width: 200 },
    { field: 'order_item_quantity', headerName: 'Order Item Quantity', width: 150 },
  ];

export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  const {ID} = location.state;



  

  useEffect(() => {
    console.log(localStorage.getItem("token"),"customer token")
    fetchData();
  }, [ID]);

  const fetchData=()=>{
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    };

    axios.post('https://loofer.bellazza.in/api/getOrderDetail', {order_id:ID}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res => {
                console.log(res,'res reeees')
                if(res.status===200 && res.data){
                    // setOrderInfo(res.data.data);
                    let orderData=res.data.data
                    if (orderData) {
                        console.log(orderData,'orderData')
                        setOrders([
                          {
                            id: orderData.id,
                            user_id: orderData.user_id,
                            name: orderData.name,
                            transaction_id: orderData.transaction_id,
                            amount: orderData.amount,
                            status: orderData.status,
                            payment_status: orderData.payment_status,
                            order_item_id: orderData.order_item.length > 0 ? orderData.order_item[0].id : '',
                            order_item_order_id: orderData.order_item.length > 0 ? orderData.order_item[0].order_id : '',
                            order_item_product_id: orderData.order_item.length > 0 ? orderData.order_item[0].product_id : '',
                            order_item_quantity: orderData.order_item.length > 0 ? orderData.order_item[0].quantity : '',
                          },
                        ]);
                      } else {
                        console.error("orderData is undefined");
                        setOrders([]);
                      }
            }
            }).catch(err => {
                console.error({err});
            });

  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
       { console.log(orders,'orders')}
      <DataGrid
        rows={orders}
        columns={columns}
        // getRowId={(row) => row.id}
        // autoHeight
        // disableColumnResize
        // hideFooterPagination
        // hideFooterSelectedRowCount
        // hideFooterRowCount
        // hideFooter
      />
    </Box>
  );
}
