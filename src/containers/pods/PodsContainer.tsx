import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { loadAllPods } from '../../store/reducers/pod/pod-actions';
import {
  podSelector,
  setRefreshTime
} from '../../store/reducers/pod/pod-reducer';
import PodGrid from '../../components/pod/PodGrid';

import './PodsContainer.scss';
import RefresherOption from '../../components/common/RefresherOption';

function PodsContainer() {
  const dispatch = useAppDispatch();
  const { pods, loading, refreshTime } = useSelector(podSelector);

  useEffect(() => {
    if (!loading) dispatch(loadAllPods());
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        dispatch(loadAllPods());
      }, refreshTime * 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [refreshTime, loading]);

  const onChangeRefresh = (value: number) => {
    dispatch(setRefreshTime(value));
  };

  return (
    <>
      <div className="pod-refresher">
        <RefresherOption value={refreshTime} onChange={onChangeRefresh} />
      </div>
      <div className="pod-container">
        <h2>General view</h2>
        <PodGrid pods={pods} />
      </div>
    </>
  );
}

export default PodsContainer;
