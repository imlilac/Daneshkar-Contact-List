import React, { Component } from "react";
import "./Users";

export default class Users extends Component {
   render() {
      return (
         <tr>
            <td>{this.props.name}</td>
            <td>{this.props.phone}</td>
            <td>{this.props.email}</td>
         </tr>
      );
   }
}
