import React from "react";

interface LoadingProps {
  isLoading: boolean;
}

export const withLoadingSpinner = <T extends LoadingProps>(
  WrappedComponent: React.ComponentType<T>
) => {
  return class extends React.Component<T> {
    render() {
      const { isLoading, ...rest } = this.props as any;
      if (isLoading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...(rest as T)} />;
    }
  };
};
