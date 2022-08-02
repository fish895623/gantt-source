import { RakkasRequest, RakkasResponse } from "rakkasjs";
import { deleteTodo, updateTodo } from "./crud";

export function del({ params }: RakkasRequest): RakkasResponse {
  deleteTodo(Number(params.todoId));

  return {
    body: null,
  };
}

export function patch({ params, body }: RakkasRequest): RakkasResponse {
  const updated = updateTodo(Number(params.todoId), body);

  if (!updated) {
    return {
      status: 404,
    };
  }

  return {
    status: 200,
    body: updated,
  };
}
