import { ResumeInfoContext } from '@/context/ResumeinfoContext'
import EducationalPreview from '@/dashboard/components/preview/EducationalPreview'
import ExperiencePreview from '@/dashboard/components/preview/ExperiencePreview'
import PersonalDetailPreview from '@/dashboard/components/preview/PersonalDetailPreview'
import SkillsPreview from '@/dashboard/components/preview/SkillsPreview'
import SummaryPreview from '@/dashboard/components/preview/SummaryPreview'
import React, { useContext } from 'react'

const ResumePreview = () => {

  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor:resumeInfo?.themeColor
      }}>

    
      {/* Personal Details */}
      <PersonalDetailPreview resumeInfo={resumeInfo}/>


      {/* summery */}
      <SummaryPreview resumeInfo={resumeInfo}/>


      {/* Professional experience */}
      <ExperiencePreview resumeInfo={resumeInfo}/>


      {/* Educational Details */}
      <EducationalPreview resumeInfo={resumeInfo}/>


        {/* Skills  */}
        <SkillsPreview resumeInfo={resumeInfo}/>


    </div>
  )
}

export default ResumePreview
