import React from "react";

const listing = [
  "w pracy ze stanami lękowymi i napięciowymi, z obniżonym nastrojem itd.,",
  "w spotkaniu się z tematami egzystencjalnymi: śmiercią, wolnością i odpowiedzialnością, izolacją, sensem życia,",
  "w odzyskaniu swobody doświadczania własnych uczuć,",
  "w budowaniu wspierającej, opartej na szacunku i zaufaniu relacji z własnym ciałem,",
  "w świadomym kształtowaniu relacji z innymi ludźmi,",
  "w spotkaniu ze wstydem, poczuciem izolacji społecznej, presją na doskonałość,",
  "w zyskaniu albo odzyskaniu radości, spokoju, swobody i satysfakcji z życia. Motywacją do podjęcia pracy terapeutycznej może być chronicznie obniżony nastrój, stany lękowe, poczucie wyobcowania, wstyd (lub perfekcjonizm), trudności w relacjach, uporczywy stres, problemy ze snem itd. “To o co nam chodzi”",
  "pisze F. Perls, twórca terapii Gestalt – “to dojrzewanie człowieka, usuwanie blokad, które przeszkadzają mu w staniu na własnych nogach. Staramy się pomóc w przejściu ze wsparcia środowiska na samo-wsparcie (…) celem terapii jest sprawić, by pacjent był niezależny od innych oraz by odkrył od samego początku, że jest w stanie zrobić wiele rzeczy, o wiele więcej, niż uważa, że potrafi”.",
];

const IndexTextContent = () => (
  <div className="card card-body">
    <ul className="list-unstyled d-flex flex-wrap">
      {listing.map((item, index) => (
        <li className="mb-2" key={index}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default IndexTextContent;
