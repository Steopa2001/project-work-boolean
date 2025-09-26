import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const eventi = [
  {
    id: 1,
    location: "Milano",
    dataInizio: "2025-10-01",
    dataFine: "2025-10-03",
    operatore: "Luca Rossi",
    status: "pronto",
    partecipanti: [
      {
        nome: "Mario",
        cognome: "Bianchi",
        codiceFiscale: "BNCMRA85T10H501Z",
        email: "mario.bianchi@email.com",
        cellulare: "3331234567",
      },
      {
        nome: "Anna",
        cognome: "Verdi",
        codiceFiscale: "VRDANN90F41H501X",
        email: "anna.verdi@email.com",
        cellulare: "3337654321",
      },
    ],
  },
  {
    id: 2,
    location: "Roma",
    dataInizio: "2025-11-05",
    dataFine: "2025-11-07",
    operatore: "Giulia Neri",
    status: "finito",
    partecipanti: [
      {
        nome: "Carlo",
        cognome: "Esposito",
        codiceFiscale: "SPSCRL92A01H501Y",
        email: "carlo.esposito@email.com",
        cellulare: "3312345678",
      },
      {
        nome: "Laura",
        cognome: "Ferrari",
        codiceFiscale: "FRRLRA88B21H501W",
        email: "laura.ferrari@email.com",
        cellulare: "3318765432",
      },
      {
        nome: "Paolo",
        cognome: "Ricci",
        codiceFiscale: "RCCPLL95C12H501V",
        email: "paolo.ricci@email.com",
        cellulare: "3319876543",
      },
    ],
  },
  {
    id: 3,
    location: "Firenze",
    dataInizio: "2025-12-10",
    dataFine: "2025-12-12",
    operatore: "Marco Conti",
    status: "non iniziato",
    partecipanti: [
      {
        nome: "Elena",
        cognome: "Gallo",
        codiceFiscale: "GLLNLN89D34H501T",
        email: "elena.gallo@email.com",
        cellulare: "3391234567",
      },
    ],
  },
];

function Homepage() {
  const [search, setSearch] = useState("");
  const [filterEventi, setFilterEventi] = useState(eventi);

  useEffect(() => {
    const tempEventi = eventi.filter((evento) =>
      evento.partecipanti.some((p) =>
        `${p.nome} ${p.cognome}`.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilterEventi(tempEventi);
  }, [search]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-lg-6 col-md-8">
        <h2 className="mb-4 text-center">Lista Viaggi</h2>

        <table className="table table-striped table-bordered align-middle shadow-sm rounded fs-4">
          <thead className="table-dark text-center">
            <tr>
              <th className="fw-bold">Operatore</th>
              <th className="fw-bold">Destinazione</th>
              <th className="fw-bold">Periodo</th>
              <th className="fw-bold">Stato</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filterEventi.length > 0 ? (
              filterEventi.map((evento) => {
                let badgeClass = "bg-secondary";
                if (evento.status === "pronto") badgeClass = "bg-success";
                else if (evento.status === "finito") badgeClass = "bg-danger";
                else if (evento.status === "non iniziato")
                  badgeClass = "bg-warning";

                return (
                  <tr key={evento.id}>
                    <td className="fw-semibold">{evento.operatore}</td>
                    <td>
                      <Link
                        className="text-decoration-none fw-semibold"
                        to={`/dettaglio/${evento.id}`}
                      >
                        {evento.location}
                      </Link>
                    </td>
                    <td className="text-start fw-light">
                      {evento.dataInizio} – {evento.dataFine}
                    </td>
                    <td>
                      <span
                        className={`badge rounded-pill px-3 py-2 ${badgeClass}`}
                      >
                        {evento.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Nessun evento trovato
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homepage;
