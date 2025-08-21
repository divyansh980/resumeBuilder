import { Button } from '@/components/ui/button'
import PersonalDetail from '@/dashboard/components/forms/PersonalDetail'
import { ArrowRight, LayoutGrid } from 'lucide-react'
import React from 'react'

const FormSection = () => {
  // const {activeFormIndex,setActiveFormIndex}=useState(1);
  return (
    <div>

    <div className='flex justify-between items-center'>
      <Button variant="outline" size="sm"
      className="flex gap-2 text-blue-500"> <LayoutGrid/>Theme</Button>
      <div>
        <Button className="flex gap-2" size="sm">Next <ArrowRight/> </Button>
      </div>
    </div>
      {/* Personal Details */}
      <PersonalDetail/>



      {/* Summery */}



      {/* Experiance */}



      {/* Education Details*/}



      {/* Skills */}

    </div>
  )
}

export default FormSection
