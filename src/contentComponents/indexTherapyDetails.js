import React from "react";
import { PageContext } from "../components/layout";

const IndexTherapyDetails = () => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div>
        <div className="my-5">
          <h2>Terapia</h2>
          <p>Pracuję terapeutycznie w nurcie Gestalt w gabinecie w Krakowie.</p>
          <p>
            Osobom, które nie mają możliwości fizycznej obecności na sesjach,
            proponuję terapię poprzez Skype/Zoom.
          </p>
          <p>Koszt 50 minutowej sesji to 120 zł.</p>
          <p> Pierwsza wizyta (konsultacja) jest bezpłatna.</p>
          <p>
            Sesje odbywają się co tydzień, o ustalonej godzinie, najczęściej raz
            w tygodniu.
          </p>
          <p> Swoją pracę poddaję superwizji.</p>
          <p>
            Jeśli ze względu na stan zdrowia, nie możesz sobie pozwolić na
            pokrycie kosztu terapii, powiedz mi o tym. Spróbujemy wspólnie
            znaleźć rozwiązanie.
          </p>
        </div>
      </div>
    )}
  </PageContext.Consumer>
);

export default IndexTherapyDetails;
