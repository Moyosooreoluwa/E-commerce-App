import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import LoadingSpinner from '../components/LoadingSpinner';
import MesssageBox from '../components/MessageBox';
import { Store } from '../store/store';
import { getError } from '../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, orders: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function OrderHistoryScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(`/api/orders/mine`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div>
      <Helmet>
        <title>Order History - Moyozon</title>
      </Helmet>
      <h1 className="my-3">Order History</h1>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <MesssageBox variant="danger">{error}</MesssageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID?</th>
              <th>DELIVERED?</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(9, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                {/* order.paidAt.tosubstring(0, 10) */}
                <td>{order.isPaid ? 'Yes' : 'NO'}</td>
                <td>
                  {/* order.deliveredAt.tosubstring(0, 10) */}
                  {order.isDelivered ? 'Yes' : 'NO'}
                </td>
                <td>
                  <Button
                    type="button"
                    variant="outline-light"
                    onClick={() => {
                      navigate(`/order/${order._id}`);
                    }}
                  ></Button>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
