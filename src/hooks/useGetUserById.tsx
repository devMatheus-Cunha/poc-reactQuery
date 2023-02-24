import { useMutation } from "react-query";

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


const useGetUserById = () => {
  const { mutate: editMutate, isLoading: isLoadingEditUser } = useMutation<User, any, User>(async (data: User) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const updatedUser = await response.json();

    return updatedUser;
  });

  const { mutate: deleteMutate, isLoading: isLoadingDeleteUser } = useMutation<User, any, User>(
    async (data: User) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${data.id}`,
        {
          method: 'DELETE',
        }
      );
      return response.status === 200 ? data : Promise.reject('Error deleting user');
    }
  );


  const fetchEditUserById = async (event: React.ChangeEvent<HTMLInputElement>, data: User) => {
    event.preventDefault();
    editMutate(data);
  };

  const fetchDeleteUserById = async (event: React.ChangeEvent<HTMLInputElement>, data: User) => {
    event.preventDefault();
    deleteMutate(data);
  };


  return {
    fetchEditUserById,
    fetchDeleteUserById,
    isLoadingDeleteUser,
    isLoadingEditUser,
  };
};

export default useGetUserById;
