import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../../services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {AllorderAction} from '../../actions/orders.action';
import {getOrderState} from '../../reducer/orders.reducers';
import './orders.css';

const AllOrder = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();

    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    React.useEffect(() => {
        dispatch(AllorderAction({
          currency: 1,
          image: "medium_rectangle"
        }))
      },[])
    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const codeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Gift Cards</span>
                {rowData.code}
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                {rowData.name}
            </React.Fragment>
        );
    }

    const categoryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Order No</span>
                {rowData.category}
            </React.Fragment>
        );
    }

    const quantityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Amount Paid</span>
                {rowData.quantity}
            </React.Fragment>
        );
    }
    const quantityBodyTemplate1 = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>
                {rowData.quantity}
            </React.Fragment>
        );
    }

    return (
        <div className="datatable-responsive-demo">
            <div className ="container mt-4">
            <p className ="order mb-5">Your Orders</p>
            <div className="card">
                <DataTable value={products} className="p-datatable-responsive-demo" paginator rows={10}>
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


                 