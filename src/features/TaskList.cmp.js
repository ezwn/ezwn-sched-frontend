import React from "react";

import { TaskEdit } from "features/TaskEdit.cmp";

import { graphql } from "react-apollo";
import { findTasksQuery } from "./Task.queries";

const TaksListDumb = ({ data }) => {
  if (data.loading) return <div>Loading</div>;

  const { findTasks } = data;

  return (
    <div>
      <ul>
        {findTasks.map(task => (
          <li key={task.tasId}>{task.title}</li>
        ))}
        <li>
          <TaskEdit />
        </li>
      </ul>
    </div>
  );
};

export const TaskList = graphql(findTasksQuery)(TaksListDumb);
