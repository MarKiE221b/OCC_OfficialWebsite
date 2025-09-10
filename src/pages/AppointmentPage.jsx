import React from "react";
import Appointment from "../components/Appointment";

const AppointmentPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-base-200 py-12 mt-10">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-4 text-primary text-center">
          Book an Appointment
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Schedule your visit or meeting with the Office of Commissioner Desiderio
          R. Apag III.
        </p>
        <Appointment />
      </div>
    </div>
  );
};

export default AppointmentPage;
