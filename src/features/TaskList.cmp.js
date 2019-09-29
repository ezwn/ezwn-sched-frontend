import React from "react";

import { TaskEdit } from "features/TaskEdit.cmp";

import { graphql } from "react-apollo";
import { findTasksQuery } from "./Task.queries";

const TaksListDumb = ({ data }) => {
  if (data.loading) return <div>Loading</div>;

  const { findTasks } = data;

  return (
    <div>
      <ul className="">
        {findTasks.map(task => (
          <li className="card" key={task.tasId}>
            <div className="content">{task.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TaskList = graphql(findTasksQuery)(TaksListDumb);
