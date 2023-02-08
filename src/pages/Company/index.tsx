import { useNavigate, useParams } from "react-router-dom";

import useCompanyById from "hooks/useCompanyById";

import { BackButton, Table } from "components";
import { Columns } from "components/Table";

import { Loading } from "templates";

const Company = () => {
  const { companyId } = useParams<{ companyId: string }>();

  const navigate = useNavigate();

  const {
    selectedCompanyId,
    statusRequstSelectedCompanyId,
    refetchRequstSelectedCompanyId,
  } = useCompanyById(companyId);

  const tableColumns: Columns[] = [
    {
      header: "Number",
      name: "id",
      action: (id) => navigate(`/number/${id}`),
    },
    {
      header: "Type",
      name: "type",
    },
  ];

  return (
    <Loading
      refetch={refetchRequstSelectedCompanyId}
      status={statusRequstSelectedCompanyId}
    >
      <>
        <BackButton onClick={() => navigate("/")} type="button">
          Go Back
        </BackButton>
        <h2>Local Public Office</h2>
        {selectedCompanyId && selectedCompanyId?.length > 0 ? (
          <Table columns={tableColumns} data={selectedCompanyId} />
        ) : (
          <h2 style={{ marginTop: "1rem", color: "orange" }}>
            No data for this search!
          </h2>
        )}
      </>
    </Loading>
  );
};

export default Company;
