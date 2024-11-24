import { useQuery } from "@tanstack/react-query";
import { FullPageLoading } from "../../../../Components/Common/Loading/FullPageLoading/FullPageLoading";
import { QueryLoading } from "./../../../../Components/Common/Loading/QueryLoading/QueryLoading";

export const useQueryShortcut = (queryKey, variable) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: variable ? [queryKey, variable] : [queryKey],
  });

  // if (isError) return <div>"Fetching Failed¯\_(ツ)_/¯"</div>;
  // if (isLoading) return <FullPageLoading />;

  // if (isError) return <div>Error</div>;
  // if (isLoading) return <FullPageLoading />;

  return data;
  // , isError, isLoading;
};
