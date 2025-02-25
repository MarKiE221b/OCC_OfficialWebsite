import React from "react";
import prof_sil from "/profile-sil.png";
import woman_sil from "/femail-sil.png";

const Members = () => {
  return (
    <div className="py-20">
      {" "}
      <h1 className="text-4xl font-bold">Members</h1>
      <div className="divider"></div>
      {/* body */}
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-center p-6">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={woman_sil} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ariadne Rose Esquillon</h2>
              <p>Executive Assistant / Chief of Staff</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-evenly mt-10 p-6">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={prof_sil} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Albert Trinidad</h2>
              <p>Senior Administrative Assistant III</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>

          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={woman_sil} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Czharlyz Nicole Manalang</h2>
              <p>Administrative Assistant VI</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-evenly mt-10 p-6">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={prof_sil} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ian Christopher Mangubat</h2>
              <p>Project Technical Staff II</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={prof_sil} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Von Francis La Victoria</h2>
              <p>Project Technical Staff II</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={prof_sil} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Marc Anthony Espiritu</h2>
              <p>Project Technical Staff II</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
