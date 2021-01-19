import React from "react";
import { PageContext } from "../components/layout";

const AboutMe = () => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div
        className={
          dark
            ? "card bg-dark card-body indexDisplayCard"
            : "card card-body indexDisplayCard"
        }
      >
        <div className="my-5">
          <h3>O mnie</h3>
          <p>
            Nazywam się Urszula Krasny i jestem terapeutką, i counsellorką
            Gestalt oraz autorką Talii Ja-Ty. Współtworzę społeczność Klub
            Gestalt i koordynuję projekt Biblioteka Gestalt.
          </p>
          <p>
            {" "}
            Gdybym miała wymienić jedną rzecz, którą uważam za charakterystyczną
            dla swojej pracy, będzie to zainteresowanie i szczególne
            uwrażliwienie na kwestię zasobów osoby, która do mnie przychodzi.
            Kiedy mówię o zasobach mam na myśli np. umiejętność dbania o swój
            dobrostan, zainteresowanie dla siebie, czy poczucie własnej
            sprawczości (i korespondujące z nim poczucie nadziei), ale też
            przykładowo to, jak traktujemy swoje ciało, czy lubimy i pozwalamy
            sobie na zabawę i jak wyglądają nasze relacje z innymi… W moim
            przekonaniu to fundamenty, które uławiają nam stawienie czoła różnym
            życiowym wyzwaniom.{" "}
          </p>
          <p>
            Zdecydowałam się specjalizować w pracy z osobami, których obszarem
            trudności są emocje i myśli związane z tematami zdrowia, choroby i
            śmierci, ponieważ uświadomienie sobie kruchości życia i wynikające z
            tego uświadomienia emocje, refleksje i potrzeby, są dla mnie
            wyjątkowe; bardzo fundamentalne i bliskie życiu.
          </p>
          <p>
            Zagrożenie zdrowia i życia sprzyja poddawaniu refleksji
            dotychczasowych życiowych “oczywistości”: swoich relacji, wyborów
            czy sposobu przeżywania czasu, jaki mamy do dyspozycji.
          </p>
          <p>
            Choroba, a czasem sam lęk przed chorobą, jest wyjątkową okazją do
            wewnętrznego wzrostu. Piszę o lęku przed chorobą, ponieważ wierzę,
            że nie trzeba chorować, aby zetknąć się z charakterystycznymi dla
            choroby tematami; czasem wystarczy uświadomić sobie własną
            skończoność. Wyjątkowość tej okazji rozwojowej polega dla mnie na
            tym, że wyostrza i uwypukla dotychczasowe decyzje, sposoby działania
            i strategie funkcjonowania w relacjach. Trudno jest chorobę
            zignorować (chociaż są osoby, które próbują tak robić). Choroba
            domaga się zajęcia stanowiska: wobec świata, wobec najbliższych, i
            wobec siebie. Może pomóc wydobyć na powierzchnię to, co ważne. W tym
            sensie choroba, albo lęk przed nią, ma szansę stanowić początek
            unikalnej podróży. W tej podróży towarzyszę.
          </p>
        </div>
      </div>
    )}
  </PageContext.Consumer>
);

export default AboutMe;
