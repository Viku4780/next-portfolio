'use client';

import ProjectCreationMain from "@/features/Projects/components/ProjectCreationMain";
import ProjectMainComponent from "@/features/Projects/components/ProjectMainComponent";
import AdminElementCreationHeader from "@/shared/components/AdminElementCreationHeader";
import AdminElementCreationTemplate from "@/shared/components/AdminElementCreationTemplate";
import AdminElementCreationBtn from "@/shared/components/AdminElementCreationBtn";
import AdminElementTemplate from "@/shared/components/AdminElementTemplate";
import { useState } from "react";

export default function ProjectPage() {
  const [createProject, setCreateProject] = useState<boolean>(false);
  return (
    
   !createProject ?  <AdminElementTemplate metaData={{ title: "Project", desc: "Manage and organize your portfolio projects." }} children1={<AdminElementCreationBtn setCreateElement={setCreateProject} val={'Project'} />} children2={<ProjectMainComponent /> } /> : <AdminElementCreationTemplate children1={<AdminElementCreationHeader metaData={{element: 'Project', desc: 'Create a new project to showcase in your portfolio.'}} />} children2={<ProjectCreationMain />}  />
  )
}