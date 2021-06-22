import { findByLabelText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const Display = (props) => {
    const Data = props.Data;
    const {gender, email, picture, name, phone} = Data;
    const fullName = name.first+' '+ name.last;
    const addMember = props.handleClick;
     const [mobile, setMobile] = useState(" ");
     const addPhone = () => setMobile(phone);

    // ========================================================
    const style = {
        display: "flex",
        border: "1px solid red",
        width: "40%",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px"
    };
    const imageStyle = {
        width: "200px",
        height: '200px',
        padding: "10px",
        borderRadius: "10px"
    }
    // ==========================================================
    return (
        <div style={style}>
           <div>
               <img src={picture.large} style={imageStyle}  alt="" />
            </div>
           <div>
              <h1>FullName:{fullName}</h1>
              <h2>Gender:{gender}</h2>
              <h4>Email:{email}</h4>
              <h4>Phone: {mobile}</h4>
              <button onClick={() =>addMember(fullName)}>add me</button> <button onClick={addPhone}>add phone</button>
           </div>
        </div>
    );
};

export default Display;