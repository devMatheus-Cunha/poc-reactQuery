import React from "react";

import useCompanies from "hooks/useCompanies";

import { Loading } from "templates";
import { useNavigate } from "react-router-dom";

import { Table } from "components";
import { Columns } from "components/Table";

const Home = () => {
  const {
    companiesData,
    refetchRequstCompaniesData,
    statusRequstCompaniesData,
  } = useCompanies();

  const navigate = useNavigate();

  const tableColumns: Columns[] = [
    {
      header: "Company name",
      name: "name",
      action: (id) => navigate(`/company/${id}`),
    },
    {
      header: "Vatin",
      name: "vatin",
    },
  ];

  return (
    <Loading
      refetch={refetchRequstCompaniesData}
      status={statusRequstCompaniesData}
    >
      <>
        <h1>Companies</h1>
        {companiesData && companiesData?.length > 0 ? (
          <Table columns={tableColumns} data={companiesData} />
        ) : (
          <h2 style={{ marginTop: "1rem", color: "orange" }}>
            No data for this search!
          </h2>
        )}
      </>
    </Loading>
  );
};

export default Home;
