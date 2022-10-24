import { PodInfo } from '../../services/pod';
import './TooltipPod.scss';

type TooltipPodProps = {
  pod: PodInfo;
};

const TooltipPod = ({ pod }: TooltipPodProps) => {
  const calculateAge = (ageinSeconds: number) => {
    let seconds = ageinSeconds;
    const days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    const hrs = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    const mnts = Math.floor(seconds / 60);
    seconds -= mnts * 60;
    return `${days}d ${hrs}h ${mnts}m ${Math.floor(seconds)}s`;
  };
  return (
    <div className="tooltip-pod">
      <div className="pod-name">{pod.name}</div>
      <div className="pod-node">{pod.node}</div>
      <div className="pod-namespace">{pod.namespace}</div>
      <div className="pod-age">{calculateAge(pod.age)}</div>
      <div className="pod-restarts">{pod.restarts}</div>
      <div className="pod-phase">{pod.status.phase}</div>
    </div>
  );
};

export default TooltipPod;
