import { gql } from "apollo-boost";

export const findTasksQuery = gql`
  {
    findTasks {
      tasId
      description
      title
    }
  }
`;

export const createTaskMutation = gql`
  mutation($title: String!, $description: String) {
    createTask(title: $title, description: $description) {
      description
      title
    }
  }
`;
