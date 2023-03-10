import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { featureClient } from '../api/axiosClient'
import { FeatureEduDataRequest, FeatureExpDataRequest, FeatureHeaderDataRequest } from '../api/FeaturesApi'
import { Education, Experience, Header, Skill } from '../types'

interface FeatureContext {
  featureHeaderData: Header[] | undefined
  setFeatureHeaderData: React.Dispatch<React.SetStateAction<Header[] | undefined>>
  featureEduData: Education[] | undefined
  setFeatureSkillData: React.Dispatch<React.SetStateAction<Skill[] | undefined>>
  featureExpData: Experience[] | undefined
  setFeatureExpData: React.Dispatch<React.SetStateAction<Experience[] | undefined>>
  featureSkillData: Skill[] | undefined
  setFeatureEduData: React.Dispatch<React.SetStateAction<Education[] | undefined>>
}

export const FeatureContext = createContext<Partial<FeatureContext>>({})

type FeatureProviderProps = {
  children: ReactNode
}

const FeatureProvider = ({ children }: FeatureProviderProps) => {
  const [featureHeaderData, setFeatureHeaderData] = useState<Header[]>()
  const [featureEduData, setFeatureEduData] = useState<Education[]>()
  const [featureSkillData, setFeatureSkillData] = useState<Skill[]>()
  const [featureExpData, setFeatureExpData] = useState<Experience[]>()

  useEffect(() => {
    // header 
    const getFeatureHeaderData = async () => {
      const response = await FeatureHeaderDataRequest()
      if (response.data) {
        setFeatureHeaderData(response.data)
      }
      //handle error 
      else{
        toast.warning('unable to get features header data')
      }
    }

    // education
    const getFeatureEducationData =async () => {
      const response = await FeatureEduDataRequest()
      
      if (response.status === 200){
        setFeatureEduData(response?.data)
      }
      //handle error
      else{
        toast.warning('unable to get features education data')
      }
    }

    //experience
    const getFeatureExpData =async () => {
      const response = await FeatureExpDataRequest()

      if (response.status === 200) {
        setFeatureExpData(response.data)
      } 
      else{
        toast.warning('unable to get features experience data')
      }
    }

    getFeatureExpData()
    getFeatureEducationData()
    getFeatureHeaderData()
  }, [])

  useEffect(() => {
    // console.log("this is feature header data", featureHeaderData);
    // console.log("this is featureExpData data", featureExpData);
  }, [featureHeaderData, featureExpData])


  return (
    <FeatureContext.Provider value={{
      featureEduData, featureExpData, featureHeaderData, featureSkillData,
      setFeatureEduData, setFeatureExpData, setFeatureHeaderData, setFeatureSkillData
    }}>
      {children}
    </FeatureContext.Provider>
  )
}

export default FeatureProvider