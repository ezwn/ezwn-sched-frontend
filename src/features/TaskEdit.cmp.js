import React from "react";
import { graphql } from "react-apollo";
import {
  findTasksQuery,
  saveTaskMutation,
  saveActionMutation
} from "./Task.queries";
import { flowRight as compose } from "lodash";
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

  const saveTaskMutation = () => {
    props.saveTaskMutation({
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

  const saveActionMutation = action => {
    props.saveActionMutation({
      variables: {
        ...action
      },
      refetchQueries: [
        {
          query: findTasksQuery
        }
      ]
    });
  };

  const updateState = patch => {
    setTask({ ...task, ...patch });
  };

  const newAction = () => {
    saveActionMutation({
      actId: null,
      moment: `1996-12-19T16:39:57-08:00`, // ${new Date().toISOString().substring(0,)}
      summary: "action summary (title)",
      details: "",
      task: task.tasId
    });
  };

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="taskEdit prim-slice-1 prim-vr"
    >
      <div className="modal-part vr-state-list monoline-fields prim-slice-1">
        <TaskDetailsCmp value={task} onChange={updateState} />
        <h2>Actions</h2>
        {task.actions.map(act => (
          <div key={act.actId}>{act.summary}</div>
        ))}
        <div className="square-button cursor-pointer" onClick={newAction}>
          +
        </div>
      </div>
      <div className="modal-part">
        <input
          type="submit"
          value="+ Save"
          onClick={saveTaskMutation}
          className="button"
        />
      </div>
    </form>
  );
};

export const TaskEdit = compose(
  graphql(saveTaskMutation, { name: "saveTaskMutation" }),
  graphql(saveActionMutation, { name: "saveActionMutation" })
)(TaskEditDumb);
