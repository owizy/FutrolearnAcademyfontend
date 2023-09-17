import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import QRCode from 'qrcode.react';
import "./ceritificate.css"
// import QRCode from 'qrcode';
import bann  from "../image8/certificate.png"
function Certificate(){
    
  const [userInput, setUserInput] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const contentRef = useRef(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleBackgroundChange = (event) => {
    setBackgroundImage(event.target.value);
  };

  const handleDownload = async () => {
    const content = contentRef.current;
    const canvas = await html2canvas(content);

    const pdf = new jsPDF();
    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 10, 10, 190, 150);

    pdf.save('Certificate.pdf');
  };
  
    return (
      <div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter text here"
      />
      <input
        type="text"
        value={backgroundImage}
        onChange={handleBackgroundChange}
        placeholder="Enter background image URL"
      />
      <div ref={contentRef} style={{display:"flex"}} >
        <img src={bann} alt="Background" style={{ width: '100%', height: '100%' }}  />
        <div style={{ position: 'absolute', top: '270px', left: '480px', color: 'black',   }} className='namess'>
          {userInput}
         
        </div>
        <h5 style={{ position: 'absolute', top: '415px', left: '595px', color: 'black',   }}>Frontend developer</h5>
        <h4 style={{ position: 'absolute', top: '544.5px', left: '556px', color: 'black',   }}>{new Date().toLocaleString('en-US', { month: 'long' })} {new Date().getDate()},{new Date().getFullYear()}  </h4>
        <QRCode value={userInput}  style={{ position: 'absolute', bottom: '-50px', left: '50px', color: 'black', fontSize: '20px'}}/>
      </div>
      <button onClick={handleDownload} disabled={!userInput}>
        Download PDF
      </button>
    </div>

    );
}

export default Certificate