import React from "react";

export const withLoader = (WrappedComponent, queryKey) => {
  return props => {
    const { loading } = props[queryKey];

    if (loading) return <div />;

    return <WrappedComponent {...props} />;
  };
};
