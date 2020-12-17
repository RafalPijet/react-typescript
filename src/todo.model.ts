export interface Todo {
    id: string;
    text: string;
}

export interface TodoListProps {
    items: {
        id: string,
        text: string
    }[],
    onDeleteItem: (id: string) => void
}

export interface NewTodoProps {
    takeDataInput: (data: string) => void;
  }