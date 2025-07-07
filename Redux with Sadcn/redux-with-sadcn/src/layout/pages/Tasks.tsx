import React from "react";
import TaskCard from "../TaskCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectTask, updateFilterStatus } from "@/redux/features/todos/todoSlice";
import AddTask from "../AddTask";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Tasks() {
  const alltask = useAppSelector(selectTask);
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="w-6/12 mx-auto mt-16 ">
        <h2 className="text-3xl mb-8">All Task are goes here</h2>
        <div className="flex justify-between">
        <AddTask />
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger
                onClick={() => dispatch(updateFilterStatus({ filter: "all" }))}
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilterStatus({ filter: "low" }))}
                value="low"
              >
                Low
              </TabsTrigger>
              <TabsTrigger
                onClick={() =>
                  dispatch(updateFilterStatus({ filter: "medium" }))
                }
                value="medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilterStatus({ filter: "high" }))}
                value="high"
              >
                High
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="space-y-3 mt-8">
          {alltask.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tasks;
