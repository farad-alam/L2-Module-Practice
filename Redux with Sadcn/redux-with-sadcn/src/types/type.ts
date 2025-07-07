

export interface ITask {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" |"high"
  dueDate: string;
  createdAt: Date
}
