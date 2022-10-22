import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { loadAllPods } from '../../store/reducers/pod/pod-actions';
import { podSelector } from '../../store/reducers/pod/pod-reducer';
import { HexGrid, Layout, Hexagon, GridGenerator } from 'react-hexgrid';

const PodsContainer = () => {
  const dispatch = useAppDispatch();
  const { pods, loading } = useSelector(podSelector);
  useEffect(() => {
    dispatch(loadAllPods());
  }, []);

  return (
    <div>
      <HexGrid>
        <Layout>
          {pods.map((p, i) => {
            return <Hexagon key={i} q={i} r={i} s={i} />;
          })}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default PodsContainer;
