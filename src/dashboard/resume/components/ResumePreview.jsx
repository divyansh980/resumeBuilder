import { ResumeInfoContext } from '@/context/ResumeinfoContext'
import PersonalDetailPreview from '@/dashboard/components/preview/PersonalDetailPreview'
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


      {/* Educational Details */}


        {/* Skills  */}


    </div>
  )
}

export default ResumePreview
