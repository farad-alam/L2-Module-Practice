import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type ITask } from "@/types/type";
import { Button } from "@/components/ui/button";
import { Badge } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import { deleteTask } from "@/redux/features/todos/todoSlice";
function TaskCard({ task }: { task: ITask }) {
  const dispatch = useAppDispatch()
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
          <CardDescription>{task.description}</CardDescription>
          <div>DueDate:{task.dueDate.toLocaleDateString()}</div>
          <CardAction className="space-y-2 text-center">
            <Badge
              className={cn("text-xl", {
                "text-green-500": task.priority === "low",
                "text-yellow-500": task.priority === "medium",
                "text-red-500": task.priority === "high",
              })}
            ></Badge>
            <Button onClick={() => dispatch(deleteTask({ id: task.id }))}>
              Delete
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </>
  );
}

export default TaskCard;
