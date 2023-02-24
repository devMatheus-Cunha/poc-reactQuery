import { useQuery } from "react-query";

interface UsersList  {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};


const useGetUsersList = () => {
  const fetchDataUsersList = async (): Promise<UsersList[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: usersList,
    status: statusRequstUsersList,
    refetch: refetchRequstUsersList,
  } = useQuery("users_list_data", fetchDataUsersList);

  return {
    statusRequstUsersList,
    usersList,
    refetchRequstUsersList,
  };
};

export default useGetUsersList;
