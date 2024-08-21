import "./Footer.css";

function Footer() {
   return (
      <div id="footer">
         <div className="right-content">
            <h1>لـــایـلــاکــــــ..</h1>
            <p className="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز </p>
         </div>
         <div className="left-content">
            <div className="col">
               <h3>دسترسی آسان</h3>
               <ul>
                  <li>
                     <a href="#">محصولات بهداشتی</a>
                  </li>
                  <li>
                     <a href="#">محصولات آرایشی</a>
                  </li>
                  <li>
                     <a href="#">محصولات باتخفیف ویژه</a>
                  </li>
                  <li>
                     <a href="#">محصولات بهداشتی کودکان</a>
                  </li>
               </ul>
            </div>
            <div className="col">
               <h3>درباره ما</h3>
               <ul>
                  <li>
                     <a href="#">ساعت فعالیت</a>
                  </li>
                  <li>
                     <a href="#">ارتباط با ما</a>
                  </li>
                  <li>
                     <a href="#">آدرس ما </a>
                  </li>
                  <li>
                     <a href="#"> همکاری با ما </a>
                  </li>
               </ul>
            </div>
            <div className="col">
               <h3> مارا دنبال کنید</h3>
               <ul>
                  <li>
                     <a href="#">اینستاگرام</a>
                  </li>
                  <li>
                     <a href="#">تلگرام</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Footer;
