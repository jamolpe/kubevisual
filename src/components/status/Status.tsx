import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { resetState } from '../../store/reducers/status/status-reducer';
import './status.scss';
interface StatusProps {
  type: string;
  message: string;
}
const Status = ({ type, message }: StatusProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message !== '') {
      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
    }
  });
  return <>{message && <div className={`status ${type}`}>{message}</div>}</>;
};

export default Status;
