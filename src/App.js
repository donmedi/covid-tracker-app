import { useEffect, useState } from "react";
import "./App.css";
import VaccinatedGraph from "./components/vaccinatedGraph";
import NumberFormat from "react-number-format";
import AffectedGraph from "./components/affectedGraph";
import { CountryData } from "./components/dataSet";
import AllVaccinationData from "./components/allVaccinationData";

function App() {
  const [firstDose, setFirstDose] = useState([]);
  const [secDose, setSecDose] = useState([]);
  const [affectArr, setAffectedArr] = useState([]);

  const newData = CountryData;

  const [countryId, setCountryId] = useState(0);

  const handleChangeCountry = (e) => {
    let index = e.target.value;
    setVacIndex("First Dose");
    setCountryId(index);
    setFirstDose(newData[index].vaccinated.total.firstDose);
    setSecDose(newData[index].vaccinated.total.secondDose);
    setAffectedArr(newData[index].affected.monthlyCases);
  };

  const graphArr = () => {
    setFirstDose(newData[countryId].vaccinated.total.firstDose);
    setSecDose(newData[countryId].vaccinated.total.secondDose);
    setAffectedArr(newData[countryId].affected.monthlyCases);
  };

  useEffect(() => {
    graphArr();
  }, []);

  const [vacIndex, setVacIndex] = useState("First Dose");

  const handleDoseChange = async (e) => {
    setVacIndex(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <AllVaccinationData
          newData={newData}
          handleChangeCountry={(e) => handleChangeCountry(e)}
          countryId={countryId}
        />

        <h5 className="text-left mt-4">All affected cases</h5>
        <div className="row mt-2">
          <div className="col-lg-3">
            <div className="card my-2 bg-primary text-white">
              <div className="card-body">
                <div style={{ fontWeight: "400" }}>Daily </div>
                <h3>{newData ? newData[countryId].affected.daily : "n/a"}</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card my-2 bg-secondary text-white">
              <div className="card-body">
                <div style={{ fontWeight: "400" }}>Monthly</div>
                <h3>
                  {newData ? (
                    <NumberFormat
                      value={newData[countryId].affected.monthly}
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
            <div className="card my-2 bg-danger text-white">
              <div className="card-body">
                <div style={{ fontWeight: "400" }}>Deaths</div>
                <h3>{newData ? newData[countryId].death : "n/a"}</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card my-2 bg-warning text-white">
              <div className="card-body">
                <div style={{ fontWeight: "400" }}>Confirmed Cases</div>
                <h3>
                  {newData ? (
                    <NumberFormat
                      value={newData[countryId].totalConfirmedCases}
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

        <div className="row mt-4">
          <div className="col-lg-10">
            <div className="card my-3">
              <div className="card-header">Vaccination</div>
              <div className="card-body">
                <select value={vacIndex} onChange={handleDoseChange}>
                  <option value="First Dose">First Dose</option>
                  <option value="Second Dose">Second Dose</option>
                </select>
                <VaccinatedGraph
                  vacData={firstDose}
                  vacData2={secDose}
                  vacLabel={vacIndex}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-10">
            <div className="card my-3">
              <div className="card-header">Active Cases</div>
              <div className="card-body">
                <AffectedGraph dataArr={affectArr} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
