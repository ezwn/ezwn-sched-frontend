import React from "react";

import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const findTasksQuery = gql`
  {
    findTasks {
      tasId
      description
      title
    }
  }
`;

const TaksListDumb = ({ data }) => {
  if (data.loading) return <div>Loading</div>;

  const { findTasks } = data;

  return (
    <div>
      <ul>
        {findTasks.map(task => (
          <li key={task.tasid}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const TaskList = graphql(findTasksQuery)(TaksListDumb);
