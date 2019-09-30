
import { gql } from "apollo-boost";

export const findTasksQuery = gql`
  {
    findTasks {
      tasId
      title
      description
      blocked
      status
    }
  }
`;

export const saveTaskMutation = gql`
  mutation($tasId: Int!, $title: String!, $description: String, $blocked: Boolean!, $status: String!) {
    saveTask(tasId: $tasId, title: $title, description: $description, blocked: $blocked, status: $status) {
      tasId
      title
      description
      blocked
      status
    }
  }
`;

export const saveActionMutation = gql`
  mutation($actId: Int!, $moment: String!, $summary: String, $details: String, $task: Task!) {
    saveAction(actId: $actId, moment: $moment, summary: $summary, details: $details, task: $task) {
      actId
      moment
      summary
      details
      task
    }
  }
`;