import React from 'react'
import { topSkills } from '@/contents/skills'
import { Wrench } from 'lucide-react'

const TopSkill = () => {
  return (
    <div
                className="
                  rounded-lg
                  border
                  border-white/10
                  p-3
                  backdrop-blur-xl
                "
              >
                <h2 className="mb-8 text-xl font-semibold">
                  Top Skills
                </h2>
    
                <div className="space-y-7">
                  {topSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-sm
                              border
                              border-white/10
                              bg-white/5
                            "
                          >
                            <Wrench
                              size={16}
                              className="text-slate-300"
                            />
                          </div>
    
                          <span className="font-medium">
                            {skill.name}
                          </span>
                        </div>
    
                        <span className="text-sm text-slate-400">
                          {skill.progress}
                        </span>
                      </div>
    
                      <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <div
                          style={{ width: skill.width }}
                          className={`
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            ${skill.color}
                          `}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  )
}

export default TopSkill
