import React from "react";

const Pagination = ({ page, setPage, totalPages, setTotalPages }) => {
  return (
    <div className="row">
      <div className="col d-flex justify-content-center gap-3 align-items-center">
        <button
          className="btn btn-danger"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          disabled={page <= 1}
        >
          Indietro
        </button>
        Pagina {page} di {totalPages}
        <button
          className="btn btn-danger"
          onClick={() => {
            setPage((p) => p + 1);
          }}
          disabled={page >= totalPages}
        >
          Avanti
        </button>
      </div>
    </div>
  );
};

export default Pagination;
