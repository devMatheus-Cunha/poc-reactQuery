import { useQuery } from "react-query";

interface SelectedCompanyDataProps {
  id: number;
  name: string;
  type: string;
}

const useCompanyById = (id?: string) => {
  const fetchDataCompanyById = async (): Promise<
    SelectedCompanyDataProps[]
  > => {
    const response = await fetch(
      `http://localhost:3000/phone_numbers?company_id=${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: selectedCompanyId,
    status: statusRequstSelectedCompanyId,
    refetch: refetchRequstSelectedCompanyId,
  } = useQuery(["company_data_by_id", id], fetchDataCompanyById);

  return {
    statusRequstSelectedCompanyId,
    selectedCompanyId,
    refetchRequstSelectedCompanyId,
  };
};

export default useCompanyById;
