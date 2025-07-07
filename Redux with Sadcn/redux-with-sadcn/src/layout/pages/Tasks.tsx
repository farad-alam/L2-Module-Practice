import React from "react";
import TaskCard from "../TaskCard";
import { useAppSelector } from "@/redux/hook";
import { selectTask } from "@/redux/features/todos/todoSlice";
import AddTask from "../AddTask";

function Tasks() {
   const alltask = useAppSelector(selectTask)
  return (
    <>
      <div className="w-6/12 mx-auto mt-16 ">
        <h2 className="text-3xl mb-8">All Task are goes here</h2>
        <AddTask/>
        <div className="space-y-3 mt-8">
         {
            alltask.map((task)=> <TaskCard key={task.id} task={task} />)
         }
         
        </div>
      </div>
    </>
  );
}

export default Tasks;
