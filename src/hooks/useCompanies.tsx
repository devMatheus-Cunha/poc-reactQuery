import { useQuery } from "react-query";

interface CompaniesDataProps {
  id: number;
  name: string;
  vatin: string;
}

const useCompanies = () => {
  const fetchDataCompanies = async (): Promise<CompaniesDataProps[]> => {
    const response = await fetch("http://localhost:3000/companies");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: companiesData,
    status: statusRequstCompaniesData,
    refetch: refetchRequstCompaniesData,
  } = useQuery("companies_data", fetchDataCompanies);

  return {
    statusRequstCompaniesData,
    companiesData,
    refetchRequstCompaniesData,
  };
};

export default useCompanies;
