import { RequestHandler } from "rakkasjs";
import { readAllTodos, createTodo } from "./crud";

export const get: RequestHandler = () => ({ body: readAllTodos() });
export const post: RequestHandler = ({ body }) => {
  return {
    status: 201,
    body: createTodo(body),
  };
};
