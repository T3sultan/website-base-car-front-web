import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  //this part important
  //   const [user, setUser] = useState({
  //     name: "akbar the great",
  //     email: "akbar@gmail.com",
  //     address: "Tajmohol road",
  //     phone: "0183553535",
  //   });
  //   const handleAddressChange = event => {
  //     console.log(event.target.value);
  //     const { address, ...rest } = user;
  //     const newAddress = event.target.value;
  //     const newUser = { address: newAddress, ...rest };
  //     setUser(newUser);
  //     console.log(newUser, rest);
  //   };

  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://still-depths-35907.herokuapp.com/order", order)
      .then(res => {
        console.log(res);
        const { data } = res;
        if (data.insertedId) {
          toast("Your order is booked");
          event.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please order :{service.name} </h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          readOnly
          value={user?.displayName}
          className="w-100 mb-3"
          type="text"
          name="name"
          placeholder="Name"
          required
          disabled
        />
        <br />
        <input
          disabled
          readOnly
          value={user?.email}
          className="w-100 mb-3"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />

        <input
          value={service.name}
          className="w-100 mb-3"
          type="text"
          name="service"
          placeholder="Service"
          required
        />
        <br />
        <input
          className="w-100 mb-3"
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
        />
        <br />
        <input
          value={user.phone}
          className="w-100 mb-3"
          type="text"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
