import "./Nav.css";
function Nav() {
   return (
      <div className="container">
         <div>
            <ul>
               <li>
                  <a href="#">ادمین(فاطمه کرابی)</a>
               </li>
               {/* <li>
                  <a href="#">علاقه مندی (3)</a>
               </li>
               <li>
                  <a href="#">سبد خرید (2)</a>
               </li> */}
            </ul>
         </div>
         <div className="logo">
            <h1>لـــایـلــاکــــــ..</h1>
         </div>
         <div>
            <ul>
               <li>
                  <a href="#">مدیریت کاربران</a>
               </li>
               <li>
                  <a href="#">مدیریت محصولات</a>
               </li>
               <li>
                  <a href="#">خروج</a>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Nav;
