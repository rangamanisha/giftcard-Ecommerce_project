import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {AllorderAction} from '../../actions/orders.action';
import {getOrderState} from '../../reducer/orders.reducers';
import './orders.css';

const AllOrder = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const orderState = useSelector(getOrderState);


   useEffect(() => {
        dispatch(AllorderAction({
          currency: 1,
          image_size: "medium_rectangle",
          limit: 10,
          offset: 0
        }))
      },[dispatch])


    const codeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Gift Cards</span>
                <img src={rowData.images.medium_rectangle} className="mr-5 rounded img-thumbnail" alt="Icon" />
                
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                {rowData.date}
            </React.Fragment>
        );
    }

    const categoryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Order No</span>
                {rowData.orderid}
            </React.Fragment>
        );
    }

    const quantityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Amount Paid</span>
                {rowData.payment_currency_amount}
            </React.Fragment>
        );
    }
    const quantityBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>

               <p className="status">{rowData.order_status}</p> 
            </React.Fragment>
        );
    }

    return (
        <div className="datatable-responsive-demo">
            <div className ="container mt-4">
            <p className ="order mb-5">Your Orders</p>
            <div className="card">
                <DataTable value={orderState.data} className="p-datatable-responsive-demo" paginator rows={10}>
                    <Column field="Giftcards" header="Gift Cards" body={codeBodyTemplate} />
                    <Column field="Date" header="Date" body={nameBodyTemplate} />
                    <Column field="Order No" header="Order No" body={categoryBodyTemplate} />
                    <Column field="Amount paid" header="Amount Paid" body={quantityBodyTemplate} />
                    <Column field="Status" header="Status" body={quantityBodyTemplate1} />
                </DataTable>
            </div>
            </div>
        </div>
    );
}

export default AllOrder;


                 