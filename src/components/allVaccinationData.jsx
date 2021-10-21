import React from "react";
import NumberFormat from "react-number-format";
import { InfoCard } from "./infoCard";

const AllVaccinationData = ({ newData, countryId, handleChangeCountry }) => {
  const calTotal = (data) => {
    let allData = data.reduce((total, item) => total + item.total, 0);

    return allData;
  };

  return (
    <div>
      <h2 className="mt-3">Covid 19 Data</h2>
      <div>
        <div>Select Country</div>
        <select
          name="app-select"
          data-testid="country-el"
          className="select-style"
          value={countryId}
          onChange={handleChangeCountry}
        >
          {newData.map((item, id) => (
            <option key={id} data-testid="select-option" value={id}>
              {item.countryName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h5 className="text-left mt-4">All vaccination data</h5>
        <div className="row mt-2">
          <div className="col-lg-3">
            <InfoCard
              name="Daily 1st-Dose"
              dose={newData[countryId].vaccinated.daily.firstDose}
            />
          </div>
          <div className="col-lg-3">
            <div className="card my-2">
              <div className="card-body">
                <div style={{ fontWeight: "400" }}>Daily 2nd-Dose</div>
                <h3>
                  {newData ? (
                    <NumberFormat
                      value={newData[countryId].vaccinated.daily.secondDose}
                      displayType="text"
                      thousandSeparator={true}
                    />
                  ) : (
                    "n/a"
                  )}
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card my-2">
              <div className="card-body">
                <div style={{ fontWeight: "400" }}>Total 1st-Dose</div>
                <h3>
                  {newData ? (
                    <NumberFormat
                      value={calTotal(
                        newData[countryId].vaccinated.total.firstDose
                      )}
                      displayType="text"
                      thousandSeparator={true}
                    />
                  ) : (
                    "n/a"
                  )}
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card my-2">
              <div className="card-body">
                <div style={{ fontWeight: "400" }}>Total 1st-Dose</div>
                <h3>
                  {newData ? (
                    <NumberFormat
                      value={calTotal(
                        newData[countryId].vaccinated.total.secondDose
                      )}
                      displayType="text"
                      thousandSeparator={true}
                    />
                  ) : (
                    "n/a"
                  )}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVaccinationData;
