export interface TodoItem {
  id?: string;
  name?: string;
  type?: string;
  start?: Date;
  end?: Date;
  progress?: number;
}

let todoItems: TodoItem[] = [
  {
    start: new Date(),
    id: "1",
    name: "Learn React",
  },
  {
    id: "2",
    name: "Learn Rakkas.JS testing",
  },
];

let nextId = 3;

export function readAllTodos(): TodoItem[] {
  return todoItems;
}

export function createTodo(item: Omit<TodoItem, "id">): number {
  todoItems.push({ ...item, id: nextId });
  return nextId++;
}

export function updateTodo(id: number, data: TodoItem): TodoItem | undefined {
  const found = todoItems.find((x) => x.id === id);

  if (found) {
    Object.assign(found, data);
  }

  return found;
}

export function deleteTodo(id: number): void {
  todoItems = todoItems.filter((x) => x.id !== id);
}
