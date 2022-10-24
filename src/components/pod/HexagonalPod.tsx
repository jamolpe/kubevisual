import { Tooltip } from '@mui/material';
import { useState } from 'react';
import Hexagon from 'react-hexagon';
import { PodInfo } from '../../services/pod';

type HexagonalPodProps = {
  pod: PodInfo;
  x: string;
  width: string;
  height: string;
  iHexagon: number;
};

const statusStyles: Record<string, string> = {
  Pending: '#F5B041',
  Running: '#52BE80',
  Succeeded: '#5DADE2',
  Failed: '#D35400',
  Unknown: '#808B96',
  Terminating: '#7D3C98'
};

const HexagonalPod = ({
  pod,
  width,
  height,
  iHexagon,
  x
}: HexagonalPodProps) => {
  const [hover, setHover] = useState(false);
  const statusColour = statusStyles[pod.status.phase];

  return (
    <Tooltip key={iHexagon} title="Delete">
      <svg
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        height={height}
        width={width}
        x={x}
      >
        <Hexagon
          style={{
            fill: statusColour,
            strokeWidth: 15,
            stroke: hover ? '#A04000' : '#566573'
          }}
          flatTop
        >
          <text
            x="50%"
            y="50%"
            fontSize={100}
            fontWeight="lighter"
            style={{ fill: 'white' }}
            textAnchor="middle"
          ></text>
        </Hexagon>
      </svg>
    </Tooltip>
  );
};

export default HexagonalPod;
