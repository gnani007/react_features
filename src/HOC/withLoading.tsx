import React from "react";

// Define props for HOC
interface WithLoadingProps {
  isLoading: boolean;
}

// Generic HOC with TypeScript
function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithLoadingComponent(props: P & WithLoadingProps) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...(restProps as P)} />;
  };
}

export default withLoading;
