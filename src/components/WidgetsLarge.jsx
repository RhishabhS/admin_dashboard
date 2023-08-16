import React from "react";
import "./WidgetsLarge.css";
const WidgetsLarge = () => {
  const Button=({type})=>{
    return <button className={"widget-large-button "+type}>{type}</button>
  }
  return <div className="widget-large">
  <h3 className="widget-large-title">Latest Transactions</h3>
  <table className="widget-large-table">
    <tr className="widget-large-tr">
      <th className="widget-large-th">Customer</th>
      <th className="widget-large-th">Date</th>
      <th className="widget-large-th">Amount</th>
      <th className="widget-large-th">Status</th>
    </tr>
    <tr className="widget-large-tr">
      <td className="widget-large-user">
        <img src="" alt="" className="widget-large-img" />
        <span className="widget-large-username">Shadab</span>

      </td>
       <td className="widget-large-date">14-02-2023</td>
       <td className="widget-large-amount">Rs.50</td>
       <td className="widget-large-status"><Button type="Approved"></Button></td>
    </tr>
    <tr className="widget-large-tr">
      <td className="widget-large-user">
        <img src="" alt="" className="widget-large-img" />
        <span className="widget-large-username">Shivam</span>

      </td>
       <td className="widget-large-date">14-02-2023</td>
       <td className="widget-large-amount">Rs.50</td>
       <td className="widget-large-status"><Button type="Pending"></Button></td>
    </tr>
    <tr className="widget-large-tr">
      <td className="widget-large-user">
        <img src="" alt="" className="widget-large-img" />
        <span className="widget-large-username">Rajni</span>

      </td>
       <td className="widget-large-date">14-02-2023</td>
       <td className="widget-large-amount">Rs.50</td>
       <td className="widget-large-status"><Button type="Declined"></Button></td>
    </tr>
  </table>
  </div>;
};

export default WidgetsLarge;
