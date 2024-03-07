import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SplashPage from "./components/contents/SplashPage";
import NewProject from "./components/contents/NewProject/NewProject";
import ProjectPanel from "./components/contents/ProjectPanel";

function App() {
    // declare start default state
    const [projState, setProjState] = useState({
        selectedProjId: undefined,
        projects: [],
        tasks: [],
    });

    /*-------------------------------------------------------------------------------------------------------------------------------*/
    const handleStartAddProj = () => {
        setProjState((prevProject) => {
            return {
                ...prevProject,
                selectedProjId: null,
            };
        });
    };

    const handleAddProj = (projectData) => {
        setProjState((prevProject) => {
            // เพิ่มตัวแปร id ให้กับโปรเจคใหม่ตาม format pxxxx
            const newProject = {
                ...projectData,
                id: "p" + Math.random().toString(),
            };

            return {
                ...prevProject,
                selectedProjId: undefined /* newProject.id */,
                projects: [...prevProject.projects, newProject],
            };
        });
    };

    const handleCancleProj = (event) => {
        setProjState((prevProject) => {
            return {
                ...prevProject,
                selectedProjId: undefined,
            };
        });
    };

    const handleSelectProj = (id) => {
        setProjState((prevProject) => {
            return {
                ...prevProject,
                selectedProjId: id,
            };
        });
    };

    const handleDeleteProj = () => {
        setProjState((prevProject) => {
            return {
                ...prevProject,
                selectedProjId: undefined,
                projects: prevProject.projects.filter(
                    // return a new array without objs that don't match the consition (ret false).
                    (project) => project.id !== prevProject.selectedProjId
                ),
            };
        });
    };

    /*-------------------------------------------------------------------------------------------------------------------------------*/
    const handleAddTask = (taskText) => {
        setProjState((prevProject) => {
            const newTask = {
                id: "t" + Math.random().toString(),
                projectId: projState.selectedProjId,
                text: taskText,
                // tasks status: To do (0) -> in progress (1) -> done (2)
                status: "0",
            };

            return {
                ...prevProject,
                tasks: [...prevProject.tasks, newTask],
            };
        });
    };

    const handleDeleteTask = (taskId) => {
        setProjState((prevProject) => {
            return {
                ...prevProject,
                tasks: prevProject.tasks.filter((task) => task.id !== taskId),
            };
        });
    };

    const handleChangeTaskStatus = (taskId, status) => {
        setProjState((prevProject) => {
            return {
                ...prevProject,
                tasks: [
                    ...prevProject.tasks,
                    prevProject.tasks.map((task) => {
                        if (task.id === taskId) task.status = status;
                    }),
                ],
            };
        });
    };

    /*-------------------------------------------------------------------------------------------------------------------------------*/
    // find the project that match with selectedProjId
    const selectedProject = projState.projects.find(
        (project) => project.id === projState.selectedProjId
    );
    // find to tasks that match with current project
    const selectedTasks = projState.tasks.filter(
        (task) => task.projectId === projState.selectedProjId
    );
    let content;

    // change the content panel by checking the currently *selectedProjId*
    switch (projState.selectedProjId) {
        case undefined:
            content = <SplashPage onStartAddProj={handleStartAddProj} />;
            break;
        case null:
            content = (
                <NewProject
                    onAddProj={handleAddProj}
                    onCancleProj={handleCancleProj}
                />
            );
            break;
        default:
            content = (
                <ProjectPanel
                    project={selectedProject}
                    onDelete={handleDeleteProj}
                    tasks={selectedTasks}
                    onAddTask={handleAddTask}
                    onDeleteTask={handleDeleteTask}
                    onChangeTaskStatus={handleChangeTaskStatus}
                />
            );
            break;
    }

    /*-------------------------------------------------------------------------------------------------------------------------------*/
    return (
        <main className="h-screen flex gap-10 overflow-y-hidden font-raleway bg-indigo-200/25">
            <NavBar
                onStartAddProj={handleStartAddProj}
                projects={projState.projects}
                onSelectProj={handleSelectProj}
                selectedProjId={projState.selectedProjId}
            ></NavBar>
            {content}
        </main>
    );
}

export default App;
