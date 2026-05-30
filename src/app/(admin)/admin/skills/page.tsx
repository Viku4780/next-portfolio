'use client'


import AddSkillMain from '@/features/skills/components/AddSkillMain';
import AdminElementCreationHeader from '@/shared/components/AdminElementCreationHeader';
import AdminElementCreationTemplate from '@/shared/components/AdminElementCreationTemplate';
import SkillMain from '@/features/skills/components/SkillMain';
import AdminElementCreationBtn from '@/shared/components/AdminElementCreationBtn';
import AdminElementTemplate from '@/shared/components/AdminElementTemplate';
import { useState } from 'react'

export default function SkillsPage() {
  const [addSkill, setAddSkill] = useState<boolean>(false);
  return (

      !addSkill ?  <AdminElementTemplate metaData={{ title: "Skills", desc: "Manage your technical skills" }} children1={<AdminElementCreationBtn setCreateElement={setAddSkill} val={'Skill'} />} children2={<SkillMain /> } /> : <AdminElementCreationTemplate children1={<AdminElementCreationHeader metaData={{element: 'Skill', desc: 'Add a new skill to showcase your expertise.'}} />} children2={<AddSkillMain />}  />

  )
}