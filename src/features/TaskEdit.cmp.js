import React from "react";
import { graphql } from "react-apollo";
import { findTasksQuery, createTaskMutation } from "./Task.queries";

export const TaskEditDumb = props => {
  const [task, setTask] = React.useState({
    description: "",
    title: ""
  });

  // console.log(props);

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        value={task.title}
        onChange={e => setTask({ ...task, title: e.target.value })}
      />
      <input
        type="submit"
        value="+"
        onClick={() => {
          props.mutate({
            variables: {
              title: task.title,
              description: task.description
            },
            refetchQueries: [
              {
                query: findTasksQuery
              }
            ]
          });
        }}
      />
    </form>
  );
};

export const TaskEdit = graphql(createTaskMutation)(TaskEditDumb);
