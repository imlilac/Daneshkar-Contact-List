import React, { Component } from "react";
import Users from "../Users/Users";
import "./AddUser.css"; // Ensure correct file extension

export default class AddUser extends Component {
   constructor(props) {
      super(props);

      this.state = {
         name: "",
         phone: "",
         email: "",
         search: "",
         users: [],
      };
   }

   submitHandler(event) {
      event.preventDefault();
      let { name, phone, email } = this.state;

      if (name && phone && email) {
         let newUser = {
            id: this.state.users.length + 1,
            name,
            phone,
            email,
         };
         this.setState({
            users: [...this.state.users, newUser],
            name: "",
            phone: "",
            email: "",
         });
      }
   }

   nameHandler(event) {
      this.setState({
         name: event.target.value,
      });
   }

   phoneHandler(event) {
      this.setState({
         phone: event.target.value,
      });
   }

   emailHandler(event) {
      this.setState({
         email: event.target.value,
      });
   }

   searchHandler(event) {
      this.setState({
         search: event.target.value,
      });
   }

   render() {
      const { search, users } = this.state;
      const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

      return (
         <div className="addUser-container">
            <div className="newUser">
               <div className="newUser-title">
                  <h2>ایجاد کاربر جدید</h2>
                  <button onClick={(event) => this.submitHandler(event)} className="add-btn">
                     افــزودن
                  </button>
               </div>
               <div className="newUser-info">
                  <input type="text" value={this.state.name} onChange={(event) => this.nameHandler(event)} placeholder="نام و نام خانوادگی" />
                  <input type="text" value={this.state.phone} onChange={(event) => this.phoneHandler(event)} placeholder="شماره همراه" />
                  <input type="text" value={this.state.email} onChange={(event) => this.emailHandler(event)} placeholder="ایمیل" />
               </div>
            </div>
            <div className="user-search">
               <h2>لــیــست کـــاربــران</h2>
               <input type="search" placeholder="جستجو ..." value={this.state.search} onChange={(event) => this.searchHandler(event)} />
            </div>
            <div className="user-table">
               <table>
                  <thead>
                     <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>شماره همراه</th>
                        <th>ایمیل</th>
                     </tr>
                  </thead>
                  <tbody>
                     {filteredUsers.map((user) => (
                        <Users key={user.id} {...user} />
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}
