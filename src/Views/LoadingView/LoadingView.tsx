import React, { useState } from 'react'
import { Loading } from 'Components'
import './LoadingView.scss'

export const LoadingView: React.FC<{ isLoaded: boolean }> = ({ isLoaded, children }) => {
  if (!isLoaded) {
    return (
      <div className="LoadingView">
        <Loading />
      </div>
    )
  } else {
    return (<>{children}</>)
  }
}
