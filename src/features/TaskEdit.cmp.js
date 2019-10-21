import React from "react";
import { graphql } from "react-apollo";
import {
  saveTaskMutation,
  saveActionMutation,
  findTaskQuery
} from "./Task.queries";
import { flowRight as compose } from "lodash";
import { TaskDetailsCmp, ActionDetailsCmp } from "./auto-components";

import "./TaskEdit.cmp.css";
import { withLoader } from "./withLoader.hoc";

export const TaskEditDumb = props => {
  // console.log(props.findTaskQuery);

  const [task, setTask] = React.useState(
    props.findTaskQuery.findTask
      ? props.findTaskQuery.findTask
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
          query: findTaskQuery
        }
      ]
    });

    props.afterSubmit();
  };

  // const saveActionMutation = action => {
  //   props.saveActionMutation({
  //     variables: {
  //       ...action
  //     },
  //     refetchQueries: [
  //       {
  //         query: findTaskQuery,
  //         variables: {
  //           tasId: props.tasId
  //         }
  //       }
  //     ]
  //   });
  // };

  const patchTask = patch => {
    setTask({ ...task, ...patch });
  };

  const patchAction = patch => {
    console.log(patch);
  };

  const addNewAction = () => {
    const time = new Date().toISOString();

    const action = {
      actId: `NEW_${time}`,
      moment: `1996-12-19T16:39:57-08:00`,
      summary: "action summary (title)",
      details: "",
      task: task.tasId
    };
    // saveActionMutation(action);
    setTask({ ...task, actions: [...task.actions, action] });
  };

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="taskEdit prim-slice-1 prim-vr"
    >
      <div className="modal-part vr-state-list monoline-fields prim-slice-1">
        <TaskDetailsCmp value={task} onChange={patchTask} />
        <h2>Actions</h2>
        {task.actions.map(act => (
          <ActionDetailsCmp
            key={act.actId}
            value={act}
            onChange={patchAction}
            fields={ActionDetailsCmp.defaultFields.filter(
              f => f.name !== "actId"
            )}
          />
        ))}

        <div className="square-button cursor-pointer" onClick={addNewAction}>
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
