import { useState } from "react";

import useGetUsersList from "hooks/useGetUsersList";


import { Loading } from "templates";

import { Table } from "components";
import { Columns } from "components/Table";

import { ActionsButtons } from "./utils/actionsButton";
import { Modal } from "@mui/material";
import ModalContent from "./utils/modalContent";

import { SelectedUserByIdDataProps } from "shared/intefaces";

interface ModalTypesAndOpen {
  type: "edit" | "delete" | "details" | ""
  open: boolean
}

const Home = () => {
  const [openAndTypeModal, setOpenAndTypeModal] = useState<ModalTypesAndOpen>({
    type: "",
    open: false
  })
  const [userSeletedData, setUserSeletedData] = useState<SelectedUserByIdDataProps | undefined>()


  const {
    usersList,
    refetchRequstUsersList,
    statusRequstUsersList,
  } = useGetUsersList();


  const handleOpenAndTypeModal = (type: "edit" | "delete" | "details" | "", open: boolean) => {
    setOpenAndTypeModal({
      type,
      open,
    })
  }

  const tableColumns: Columns[] = [
    {
      header: "Id",
      name: "id",
    },
    {
      header: "User Name",
      name: "username",
    },
    {
      header: "Email",
      name: "email",
    },
    {
      header: "City",
      name: "address.city",
    },
    {
      header: "Company Name",
      name: "company.name",
    },
    {
      header: "Has Company",
      name: "website",
    },
    {
      header: "Action",
      name: "actions",
      action: (data) => setUserSeletedData(data as any),
      modifer: <ActionsButtons handleOpenAndTypeModal={handleOpenAndTypeModal} />,
    },
  ];

  return (
    <Loading
      refetch={refetchRequstUsersList}
      status={statusRequstUsersList}
    >
      <>
        <h1>List of the users</h1>
        {usersList && usersList?.length > 0 ? (
          <>
            <Table columns={tableColumns} data={usersList} />
            <Modal
              open={openAndTypeModal.open}
            >
              <ModalContent data={userSeletedData} typeModal={openAndTypeModal.type} onClose={() => {
                handleOpenAndTypeModal("", false)
                setUserSeletedData(undefined)
              }} />
            </Modal>
          </>

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
