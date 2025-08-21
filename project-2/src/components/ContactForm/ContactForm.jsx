import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
 
const onSubmit = (event)=> {
  event.preventDefault();
  console.log(event);
}

  return (
  



    <>
      <section className={styles["contact-form-container"]}>
        <div className={styles["form-body"]}>

          <div className={styles["top-button"]}>

          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={18}/>} />
          <Button
        
           text="VIA CALL" 
           icon={<FaPhoneAlt fontSize={18}/>} />
          </div>


          <Button 
          isoutline={true}
          text="VIA MAIL" 
          icon={<HiMail fontSize={18}/>} />

          {/* Take Inputs */}

          <form onSubmit={onSubmit}>

          <div className={styles["form-controller"]}>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" />
          </div>
            
            <div className={styles["form-controller"]}>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" />
          </div>
           
            <div className={styles["form-controller"]}>
           <label htmlFor="Text">Text </label>
          <textarea name="text" rows={10}/>
          </div>
        
        <div
        style={{display: "flex",
          justifyContent: "end"
        }}>
        <Button 
        text="SUBMIT" />
           </div>
          </form>


        </div>





        <div className={styles["contact-image"]}>
          <img src="./images/contact_image.svg" alt="contact image" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
