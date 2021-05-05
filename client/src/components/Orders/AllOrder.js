import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Moment from "react-moment";
import { AllorderAction } from "../../actions/orders.action";
import { getOrderState } from "../../reducer/orders.reducers";
import "./orders.scss";

const AllOrder = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const orderState = useSelector(getOrderState);
  const [selectedProduct1, setSelectedProduct1] = useState(null);

  useEffect(() => {
    dispatch(
      AllorderAction({
        //   currency: 1,
        image_size: "medium_rectangle",
        limit: 50,
        offset: 0,
      })
    );
  }, [dispatch]);

  const handleRowSelection = (e) => {
    setSelectedProduct1(e.data.id);
    history.push({ pathname: "/order/confirm_order", search: `${e.data.id}` });
  };
  const codeBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Gift Cards</span>
        <img
          src={rowData.images.medium_rectangle}
          className="rounded img-thumbnail2"
          alt="Icon"
        />
      </React.Fragment>
    );
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Date</span>
        <p className="text_order">
          <Moment format="MMM Do,YYYY">{rowData.date}</Moment>
          <br />
          <Moment format="h:mm A">{rowData.date}</Moment>
        </p>
      </React.Fragment>
    );
  };

  const categoryBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Order No</span>
        <p className="text_order">{rowData.orderid}</p>
      </React.Fragment>
    );
  };

  const quantityBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Amount Paid</span>
        <p className="text_order">
          {rowData.payment_currency} {rowData.payment_currency_amount}
        </p>
      </React.Fragment>
    );
  };
  const quantityBodyTemplate1 = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Status</span>
        <p className="status">{rowData.order_status}</p>
      </React.Fragment>
    );
  };

  return (
    <div className="datatable-responsive-demo">
      <div className="container mt-4">
        <p className="order mb-5">Your Orders</p>
        <div className="card">
          <DataTable
            value={orderState.data}
            resizableColumns
            columnResizeMode="fit"
            className="p-datatable-responsive-demo"
            paginator
            rows={4}
            selectionMode="single"
            selection={selectedProduct1}
            onRowSelect={(e) => handleRowSelection(e)}
          >
            <Column
              field="Giftcards"
              header="Gift Cards"
              body={codeBodyTemplate}
            />
            <Column field="Date" header="Date" body={nameBodyTemplate} />
            <Column
              field="Order No"
              header="Order No"
              body={categoryBodyTemplate}
            />
            <Column
              field="Amount paid"
              header="Amount Paid"
              body={quantityBodyTemplate}
            />
            <Column
              field="Status"
              header="Status"
              body={quantityBodyTemplate1}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
