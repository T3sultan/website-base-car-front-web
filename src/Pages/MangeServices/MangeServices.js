import React from "react";
import useServices from "../../hooks/useServices";

const MangeServices = () => {
  const [services, setServices] = useServices();
  const handleDeleteService = id => {
    const proceed = window.confirm("Are Your Sure?");
    if (proceed) {
      const url = `https://still-depths-35907.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = services.filter(service => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2>manage your services</h2>
      {services.map(service => (
        <div key={service._id}>
          <h4>
            {service.name}{" "}
            <button onClick={() => handleDeleteService(service._id)}>X</button>{" "}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default MangeServices;
