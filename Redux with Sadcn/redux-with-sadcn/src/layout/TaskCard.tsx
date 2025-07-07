import { useState } from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type ITask } from "@/types/type";
import { Badge, PenIcon, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import { deleteTask, updateTask } from "@/redux/features/todos/todoSlice";
import EditDialog from "./EditDialog";

function TaskCard({ task }: { task: ITask }) {
  const dispatch = useAppDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);

  const openEidtDialog = (id: string) => {
    console.log(id);
    setDialogOpen(true);
  };
  const onSubmit = (updatedTask: Partial<ITask>) => {
    dispatch(updateTask({ id: task.id, updatedTask }));
    setDialogOpen(false);
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
          <CardDescription>{task.description}</CardDescription>
          <div>DueDate:{task.dueDate.toLocaleDateString()}</div>
          <CardAction className="flex justify-around gap-1">
            <Badge
              className={cn("text-xl", {
                "text-green-500": task.priority === "low",
                "text-yellow-500": task.priority === "medium",
                "text-red-500": task.priority === "high",
              })}
            ></Badge>
            <PenIcon
              onClick={() => {
                openEidtDialog(task.id);
              }}
            ></PenIcon>
            <Trash
              onClick={() => dispatch(deleteTask({ id: task.id }))}
            ></Trash>
          </CardAction>
        </CardHeader>
      </Card>

      <EditDialog
        task={task}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default TaskCard;
