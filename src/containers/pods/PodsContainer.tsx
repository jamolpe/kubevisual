import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { loadAllPods } from '../../store/reducers/pod/pod-actions';
import { podSelector } from '../../store/reducers/pod/pod-reducer';
import PodGrid from '../../components/pod/PodGrid';

import './PodsContainer.scss';

function PodsContainer() {
  const dispatch = useAppDispatch();
  const { pods, loading } = useSelector(podSelector);

  useEffect(() => {
    dispatch(loadAllPods());
  }, []);

  return (
    <div className="pod-container">
      <PodGrid pods={pods} />
      {/* {pods.map((p, i) => {
        return (
          <Hexagon
            className="pod-hexagon"
            style={{ stroke: '#42873f', height: '10px', fill: '#007aff' }}
          >
            <text fontSize={100} x="20%" y="50%" overflow={'ellipsis'}>
              {p.name}
            </text>
          </Hexagon>
        );
      })} */}
    </div>
  );
}

export default PodsContainer;
