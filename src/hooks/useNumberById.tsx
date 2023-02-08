import { useQuery } from "react-query";

interface SelectedNumberDataProps {
  id: string;
  type: string;
  company_id: number;
}

const useNumeberById = (id?: string) => {
  const fetchDataNumberById = async (): Promise<SelectedNumberDataProps> => {
    const response = await fetch(`http://localhost:3000/phone_numbers/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: selectedNumberId,
    status: statusRequstSelectedNumberId,
    refetch: refetchRequstSelectedNumberId,
  } = useQuery(["number_data_by_id", id], fetchDataNumberById);

  return {
    statusRequstSelectedNumberId,
    selectedNumberId,
    refetchRequstSelectedNumberId,
  };
};

export default useNumeberById;
