import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between align-center">
      <Link href="/">
        <a className="h2 text-dark">ToDo List</a>
      </Link>

      <Link href="/nuevo">
        <button className="btn btn-secondary d-block d-md-inline-block">
          Agregar Tarea
        </button>
      </Link>
    </nav>
  );
};

export default Navigation;
