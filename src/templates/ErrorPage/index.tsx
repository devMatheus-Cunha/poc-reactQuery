import React from "react";

interface ErrorPageProps {
  refetch: () => void;
}

const ErrorPage = ({ refetch }: ErrorPageProps) => {
  return (
    <div>
      <div>
        <h1>OPS!😓</h1>
        <h1>An unexpected error occurred, please reload the page.</h1>
      </div>
      <button onClick={refetch}>Recarregar</button>
    </div>
  );
};

export default ErrorPage;
