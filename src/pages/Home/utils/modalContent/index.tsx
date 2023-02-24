import { useState } from 'react';

import useGetUserById from 'hooks/useGetUserById';

import { SelectedUserByIdDataProps } from 'shared/intefaces';


import styles from "./styles.module.scss";


interface ModalContentProps {
 data: SelectedUserByIdDataProps | undefined
 typeModal: "edit" | "details" | "delete" | string;
 onClose: () => void
}

type ModalType = {
 title: string;
 action?: (event: any) => void;
};

type ValidateTitleAndActionModal = {
 [key: string]: ModalType;
};

interface User {
 id?: number;
 name?: string;
 username?: string;
 email?: string;
 street?: string;
 suite?: string;
 city?: string;
 zipcode?: string;
 lng?: string;
 lat?: string;
}

const ModalContent = ({ data, typeModal, onClose }: ModalContentProps) => {
 const { fetchEditUserById, isLoadingEditUser, fetchDeleteUserById, isLoadingDeleteUser } = useGetUserById()

 const [changeData, setChangeData] = useState<User>({
  id: data?.id,
  name: data?.name,
  username: data?.username,
  email: data?.email,
  street: data?.address.street,
  suite: data?.address.suite,
  city: data?.address.city,
  zipcode: data?.address.zipcode,
  lng: data?.address.geo.lng,
  lat: data?.address.geo.lat,
 });

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChangeData({ ...changeData, [event.target.id]: event.target.value });
 }

 const validateTitleAndActionModal: ValidateTitleAndActionModal = {
  edit: {
   title: "Edit User",
   action: async (event: any) => {
    await fetchEditUserById(event, changeData)
    if (!isLoadingEditUser) {
     onClose()
    }
   },
  },
  details: {
   title: "More details users",
  },
  delete: {
   title: "Delete User",
   action: async (event: any) => {
    await fetchDeleteUserById(event, changeData)
    if (!isLoadingDeleteUser) {
     onClose()
    }
   },
  },
 };



 return (
  <div className={styles.container}>
   <h1>
    {validateTitleAndActionModal[typeModal]?.title}

   </h1>
   <>
    {
     isLoadingEditUser || isLoadingDeleteUser ? (
      <h2>Loading...</h2>
     ) : (
      <>
       <form
        method={typeModal === "edit" ? "PUT" : "DELETE"}
        onSubmit={validateTitleAndActionModal[typeModal]?.action}
       >
        <div className={styles.formWrapper}>
         <div className={styles.input}>
          <label htmlFor="id">ID:</label>
          <input type="text" disabled={typeModal === "details"} id="id" value={changeData?.id} onChange={handleChange} />
         </div>

         <div className={styles.input}>
          <label htmlFor="name">Name:</label>
          <input type="text" disabled={typeModal === "details"} id="name"
           value={changeData?.name}
           onChange={handleChange}
          />
         </div>

         <div className={styles.input}>
          <label htmlFor="username">Username:</label>
          <input type="text" disabled={typeModal === "details"} id="username" value={changeData?.username} onChange={handleChange} />
         </div>

         <div className={styles.input}>
          <label htmlFor="email">Email:</label>
          <input type="text" disabled={typeModal === "details"} id="email" value={changeData?.email} onChange={handleChange} />
         </div>

         <div className={styles.input}>
          <label htmlFor="street">Street:</label>
          <input type="text" disabled={typeModal === "details"} id="street" value={changeData?.street} onChange={handleChange} />
         </div>

         <div className={styles.input}>
          <label htmlFor="suite">Suite:</label>
          <input type="text" disabled={typeModal === "details"} id="suite" value={changeData?.suite} onChange={handleChange} />
         </div>

         <div className={styles.input}>
          <label htmlFor="city">City:</label>
          <input type="text" disabled={typeModal === "details"} id="city" value={changeData?.city} onChange={handleChange} />
         </div>

         <div className={styles.input}>
          <label htmlFor="zipcode">Zipcode:</label>
          <input type="text" disabled={typeModal === "details"} id="zipcode" value={changeData?.zipcode} onChange={handleChange} />
         </div>

         <div className={styles.input}>
          <label htmlFor="lng">Longitude:</label>
          <input type="text" disabled={typeModal === "details"} id="lng" value={changeData.lng} onChange={handleChange} />
         </div>

         <div className={styles.input}>
          <label htmlFor="lat">Latitude:</label>
          <input type="text" disabled={typeModal === "details"} id="lat" value={changeData.lat} onChange={handleChange} />
         </div>
        </div>

        <div className={styles.buttonContainer}>
         <button type='button' onClick={onClose}>Cancelar</button>
         <button type={typeModal === "details" ? "button" : "submit"}>Confirmar</button>
        </div>
       </form>
      </>
     )
    }
   </>

  </div >
 );
}

export default ModalContent;