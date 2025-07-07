

export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" |"high"
  dueDate: Date;
  createdAt: Date
}

export type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">