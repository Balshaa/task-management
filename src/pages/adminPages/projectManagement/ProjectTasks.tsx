import React from 'react'

const ProjectTasks = () => {
  return (
    <div>
      Tasks
      {/* <div>
      <h2>Project Tasks</h2>
      <h3>Backlog</h3>
      {tasks
        .filter(task => task.status === 'backlog')
        .map(task => (
          <div key={task.id}>
            <h4>{task.title}</h4>
            <p>{task.assignee}</p>
            <button onClick={() => handleViewDetails(task.id)}>View Details</button>
            <button onClick={() => handleAssignTask(task.id)}>Assign</button>
          </div>
        ))}
      render others in this way
      </div> */}
    </div>
  )
}

export default ProjectTasks


// import React, { useState } from 'react';

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: 'backlog' | 'pending' | 'inProgress' | 'completed';
//   assignedTo: string;
// }

// interface KanbanBoardProps {
//   tasks: Task[];
//   onTaskEdit: (taskId: string, updatedTask: Task) => void;
//   onTaskAssign: (taskId: string, assignedTo: string) => void;
// }

// const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks, onTaskEdit, onTaskAssign }) => {
//   const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
//   const [assigningTaskId, setAssigningTaskId] = useState<string | null>(null);
//   const [assignedTo, setAssignedTo] = useState('');

//   const handleEdit = (taskId: string) => {
//     setEditingTaskId(taskId);
//   };

//   const handleAssign = (taskId: string) => {
//     setAssigningTaskId(taskId);
//   };

//   const handleSaveEdit = (taskId: string, updatedTask: Task) => {
//     onTaskEdit(taskId, updatedTask);
//     setEditingTaskId(null);
//   };

//   const handleSaveAssign = (taskId: string) => {
//     onTaskAssign(taskId, assignedTo);
//     setAssigningTaskId(null);
//     setAssignedTo('');
//   };

//   const handleCancelEdit = () => {
//     setEditingTaskId(null);
//   };

//   const handleCancelAssign = () => {
//     setAssigningTaskId(null);
//     setAssignedTo('');
//   };

//   return (
//     <div>
//       <div className="column">
//         <h2>Backlog</h2>
//         {tasks
//           .filter((task) => task.status === 'backlog')
//           .map((task) => (
//             <div key={task.id}>
//               <span>{task.title}</span>
//               {editingTaskId === task.id ? (
//                 <div>
//                   <input
//                     type="text"
//                     defaultValue={task.description}
//                     onChange={(e) =>
//                       handleSaveEdit(task.id, { ...task, description: e.target.value })
//                     }
//                   />
//                   <button onClick={handleCancelEdit}>Cancel</button>
//                 </div>
//               ) : (
//                 <button onClick={() => handleEdit(task.id)}>Edit</button>
//               )}
//               {assigningTaskId === task.id ? (
//                 <div>
//                   <input
//                     type="text"
//                     value={assignedTo}
//                     onChange={(e) => setAssignedTo(e.target.value)}
//                   />
//                   <button onClick={() => handleSaveAssign(task.id)}>Assign</button>
//                   <button onClick={handleCancelAssign}>Cancel</button>
//                 </div>
//               ) : (
//                 <button onClick={() => handleAssign(task.id)}>Assign</button>
//               )}
//             </div>
//           ))}
//       </div>
//       {/* Repeat the above block for other columns (Pending, In Progress, Completed) */}
//     </div>
//   );
// };

// export default KanbanBoard;