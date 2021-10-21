import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "../../App";
import AffectedGraph from "../affectedGraph";
import AllVaccinationData from "../allVaccinationData";
import { InfoCard } from "../infoCard";
import { CountryData } from "../dataSet";

describe("Testing all component", () => {
  it("get card info", () => {
    const { getByTestId } = render(<InfoCard />);
    expect(getByTestId("card-1")).toBeInTheDocument();
  });

  it("first selected country is Nigeria", async () => {
    render(<AllVaccinationData newData={CountryData} countryId={0} />);
    const linkElement = await screen.findByText("Nigeria");
    expect(linkElement).toBeInTheDocument();
  });

  it("check selected data", async () => {
    const { getByTestId, getAllByTestId } = render(
      <AllVaccinationData newData={CountryData} countryId={0} />
    );
    fireEvent.change(getByTestId("country-el"), { target: { value: 0 } });
    let options = getAllByTestId("select-option");
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });
});
