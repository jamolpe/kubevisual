import { ApiResponse, handleRequest } from './utils';

export interface PodStatus {
  phase: string;
  usage: { cpu: number; memory: number };
}

export interface PodInfo {
  name: string;
  uid: string;
  node: string;
  namespace: string;
  age: number;
  restarts: number;
  status: PodStatus;
}
//  {
//         "name": "coredns-95db45d46-2b2xk",
//         "uid": "f4bb2433-aac3-44b2-9b59-4d654a784d5e",
//         "node": "docker-desktop",
//         "namespace": "kube-system",
//         "status": {
//             "phase": "Running",
//             "usage": {
//                 "cpu": 0.005800066,
//                 "memory": 49614848
//             }
//         }
//     },

export const getAllPods = async () => {
  const response = await fetch(`/pod`, {
    method: 'GET'
  });
  return <Promise<ApiResponse<PodInfo[]>>>handleRequest(response);
};
