import React from "react";
import { graphql } from "react-apollo";
import { findTasksQuery, saveTaskMutation } from "./Task.queries";
import { TaskDetailsCmp } from "./auto-components";

import "./TaskEdit.cmp.css";

export const TaskEditDumb = props => {
  const [task, setTask] = React.useState(
    props.value
      ? props.value
      : {
          tasId: undefined,
          title: "",
          description: "",
          blocked: false,
          status: "IDEA"
        }
  );

  const mutate = () => {
    props.mutate({
      variables: {
        ...task
      },
      refetchQueries: [
        {
          query: findTasksQuery
        }
      ]
    });

    props.afterSubmit();
  };

  const updateState = patch => {
    setTask({ ...task, ...patch });
  };

  return (
    <form onSubmit={e => e.preventDefault()} className="taskEdit prim-slice-1 prim-vr">
      <div className="modal-part vr-state-list monoline-fields prim-slice-1">
        <TaskDetailsCmp value={task} onChange={updateState} />
      </div>
      <div className="modal-part">
        <input
          type="submit"
          value="+ Save"
          onClick={mutate}
          className="button"
        />
      </div>
    </form>
  );
};

export const TaskEdit = graphql(saveTaskMutation)(TaskEditDumb);
