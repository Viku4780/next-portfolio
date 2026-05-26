'use client';

import ProjectCreation from "@/features/Projects/components/ProjectCreation";
import ProjectShowing from "@/features/Projects/components/ProjectShowing";
import { useState } from "react";

export default function ProjectPage() {
  const [createProject, setCreateProject] = useState<boolean>(false);
  return (
   
    !createProject ?
    <ProjectShowing setCreateProject={setCreateProject} /> : <ProjectCreation />
  )
}