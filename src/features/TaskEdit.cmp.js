import React from "react";
import { graphql } from "react-apollo";
import {
  saveTaskMutation,
  saveActionMutation,
  findTaskQuery
} from "./Task.queries";
import { flowRight as compose } from "lodash";
import { TaskDetailsCmp } from "./auto-components";

import "./TaskEdit.cmp.css";
import { withLoader } from "./withLoader.hoc";

export const TaskEditDumb = props => {
  const { findTask: value } = props.findTaskQuery;

  const [task, setTask] = React.useState(
    value
      ? value
      : {
          tasId: undefined,
          title: "",
          description: "",
          blocked: false,
          status: "IDEA"
        }
  );

  console.log({ value, task });

  const saveTaskMutation = () => {
    props.saveTaskMutation({
      variables: {
        ...task
      },
      refetchQueries: [
        {
          query: findTaskQuery
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
          query: findTaskQuery,
          variables: {
            tasId: props.tasId
          }
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
  graphql(findTaskQuery, {
    name: "findTaskQuery",
    options: ({ tasId }) => {
      return {
        variables: {
          tasId
        }
      };
    }
  }),
  graphql(saveTaskMutation, { name: "saveTaskMutation" }),
  graphql(saveActionMutation, { name: "saveActionMutation" })
)(withLoader(TaskEditDumb, "findTaskQuery"));
