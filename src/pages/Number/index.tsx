import { useNavigate, useParams } from "react-router-dom";

import useNumberById from "hooks/useNumberById";

import { Loading } from "templates";

import { BackButton } from "components";

import "./styles.css";

const Number = () => {
  const { numberId } = useParams<{ numberId: string }>();

  const navigate = useNavigate();

  const {
    refetchRequstSelectedNumberId,
    selectedNumberId,
    statusRequstSelectedNumberId,
  } = useNumberById(numberId);

  return (
    <Loading
      refetch={refetchRequstSelectedNumberId}
      status={statusRequstSelectedNumberId}
    >
      <>
        <BackButton
          onClick={() => navigate(`/company/${selectedNumberId?.company_id}`)}
          type="button"
        >
          Go Back
        </BackButton>
        <h2>Local Public Office</h2>
        <div className="container">
          <div className="content">
            <span>Number: </span> {selectedNumberId?.id}
          </div>
          <div className="content">
            <span>Type:</span> {selectedNumberId?.type}
          </div>
        </div>
      </>
    </Loading>
  );
};

export default Number;
