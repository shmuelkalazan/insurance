import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Claims from './claims/Claims'
import Policies from './policies/Policies'
import PolicyDetails from './policies/PolicyDetails'
import ClaimDeatels from './claims/ClaimDetails'

export default function Page() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate replace to ="/policies"/>}/>
        <Route path='claims' element={<Claims/>}/>
        <Route path='claims/:id' element={<ClaimDeatels/>}/>
        <Route path='policies' element={<Policies/>} />
        <Route path='policies/:id' element={<PolicyDetails/>} />
      </Routes>
    </div>
  )
}
