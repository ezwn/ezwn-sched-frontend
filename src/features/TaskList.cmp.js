import React from "react";

import { graphql } from "react-apollo";
import { findTasksQuery } from "./Task.queries";
import ModalContext from "libs/ezwn-ui/react/modal/Modal.context";
import { TaskEdit } from "./TaskEdit.cmp";

const TaksListDumb = ({ data }) => {
  if (data.loading) return <div>Loading</div>;

  const { findTasks } = data;

  return (
    <ModalContext.Consumer>
      {showModal => (
        <ul>
          {findTasks.map(task => (
            <li
              className="card"
              key={task.tasId}
              onClick={() =>
                showModal(
                  <TaskEdit value={task} afterSubmit={() => showModal(null)} />
                )
              }
            >
              <div className="content">{task.title}</div>
            </li>
          ))}
        </ul>
      )}
    </ModalContext.Consumer>
  );
};

export const TaskList = graphql(findTasksQuery)(TaksListDumb);
