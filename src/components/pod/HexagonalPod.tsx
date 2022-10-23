import Hexagon from 'react-hexagon';
import { PodInfo } from '../../services/pod';

type HexagonalPodProps = {
  podHexagon: PodInfo;
};

const statusStyles: Record<string, string> = {
  Pending: '#F5B041',
  Running: '#52BE80',
  Succeeded: '#5DADE2',
  Failed: '#D35400',
  Unknown: '#808B96'
};

const HexagonalPod = ({ podHexagon }: HexagonalPodProps) => {
  const statusColour = statusStyles[podHexagon.status.phase];
  return (
    <Hexagon
      onClick={() => alert(`clicked ${podHexagon.name}`)}
      style={{ fill: statusColour, stroke: 'white' }}
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
  );
};

export default HexagonalPod;
