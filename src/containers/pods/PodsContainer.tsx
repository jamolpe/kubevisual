import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { loadAllPods } from '../../store/reducers/pod/pod-actions';
import { podSelector } from '../../store/reducers/pod/pod-reducer';
import PodGrid from '../../components/pod/PodGrid';

import './PodsContainer.scss';

function PodsContainer() {
  const dispatch = useAppDispatch();
  const { pods } = useSelector(podSelector);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('reloading pods');
      dispatch(loadAllPods());
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pod-container">
      <PodGrid pods={pods} />
    </div>
  );
}

export default PodsContainer;
