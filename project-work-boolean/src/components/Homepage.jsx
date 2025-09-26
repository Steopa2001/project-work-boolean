import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import eventi from "../eventi";

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
    <div className="container mt-4 d-flex justify-content-center">
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
                <td className="text-center">
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
