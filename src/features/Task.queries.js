
import { gql } from "apollo-boost";

export const findTasksQuery = gql`
  {
    findTasks {
      tasId
      title
      description
      blocked
      status,
      actions {
        actId
        moment
        summary
        details
      }
    }
  }
`;

export const saveTaskMutation = gql`
  mutation($tasId: Int, $title: String!, $description: String, $blocked: Boolean!, $status: String!) {
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
  mutation($actId: Int, $moment: DateTime!, $summary: String, $details: String, $task: Int!) {
    saveAction(actId: $actId, moment: $moment, summary: $summary, details: $details, task: $task) {
      actId
    }
  }
`;