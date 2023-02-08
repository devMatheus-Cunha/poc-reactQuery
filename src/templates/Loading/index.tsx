import React, { ReactElement } from "react";

import { ErrorPage } from "templates";

type ValidateContent = "error" | "loading" | "success" | "idle";

interface LoadingProps {
  status: ValidateContent;
  refetch: () => void;
  children: ReactElement;
}

interface StatusProps {
  success: React.ReactNode;
  loading: React.ReactNode;
  error: React.ReactNode;
  idle: React.ReactNode;
}

const Loading = ({ status, refetch, children }: LoadingProps) => {
  const validateContent = (status: ValidateContent) => {
    const statusArr: StatusProps = {
      success: { ...children },
      idle: { ...children },
      loading: (
        <div className="flex h-screen w-full items-center justify-center">
          <h1>Loading...</h1>
        </div>
      ),
      error: <ErrorPage refetch={refetch} />,
    };
    return statusArr[status as ValidateContent];
  };

  return <>{validateContent(status)}</>;
};
export default Loading;
