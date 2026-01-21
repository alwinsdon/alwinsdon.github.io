import React from "react";
import ProjectDetail from "./ProjectDetail";
import mock09 from '../../assets/images/mock09.png';

function TaskManagerProject() {
  return (
    <ProjectDetail
      title="Task Management Application"
      timeline="October 2023 - December 2023"
      background="This project was inspired by the need for a simple yet powerful task management tool for teams. I wanted to create an application that combines the simplicity of a to-do list with the collaboration features of enterprise project management tools, without the complexity and cost associated with existing solutions."
      description="Developed a collaborative task management application with real-time updates, allowing teams to create, assign, and track tasks efficiently. The app features drag-and-drop task organization, team workspaces, comment threads, file attachments, and notification systems. Built with React for the frontend and Firebase for real-time database synchronization and authentication."
      technologies={[
        "React",
        "TypeScript",
        "Firebase",
        "Firestore",
        "Material-UI",
        "React DnD",
        "Cloud Functions",
        "Firebase Auth"
      ]}
      features={[
        "Real-time collaboration with instant updates",
        "Drag-and-drop task organization across boards",
        "Team workspaces with role-based access",
        "Task assignments and due dates",
        "Comment threads on tasks",
        "File attachment support",
        "Email and in-app notifications",
        "Dark mode support"
      ]}
      images={[mock09]}
      githubLink="https://github.com/alwinsdon"
      liveLink="#"
    >
      <section className="project-section">
        <h2>Technical Highlights</h2>
        <p>
          Implementing real-time synchronization was the most exciting part of this project. Using Firestore's
          real-time listeners, any changes made by one team member are instantly reflected for all other users
          viewing the same workspace. I also implemented optimistic UI updates to make the app feel incredibly
          responsive even on slower connections.
        </p>
      </section>

      <section className="project-section">
        <h2>Lessons Learned</h2>
        <p>
          This project taught me a lot about state management in complex applications and the importance of
          data structure design in NoSQL databases. I learned to optimize Firestore queries to minimize reads
          and reduce costs, and implemented efficient caching strategies to improve performance.
        </p>
      </section>
    </ProjectDetail>
  );
}

export default TaskManagerProject;

