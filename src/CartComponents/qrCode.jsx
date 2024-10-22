import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code"; // Assuming you are using 'qrcode.react' library

const QrCode = ({ title, price, description }) => {
  const [qrData, setQrData] = useState("");

  useEffect(() => {
    const product = {
      name: title,
      price: price,
      description: description ? description : "this is a sample product",
    };

    const productDetails = `Name: ${product.name}\nPrice: ${product.price}\nDescription: ${product.description}`;
    setQrData(productDetails);
  }, [title, price]);

  return (
    <div>
      {/* <button onClick={() => addProductToCart({ name: title, price, description: "This is a sample product." })}>
        Add Product to Cart
      </button> */}
      {qrData && (
        <QRCode value={qrData} style={{ width: "50px", height: "100px" }} />
      )}
    </div>
  );
};

export default QrCode;
