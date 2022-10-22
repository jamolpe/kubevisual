interface WraperContainerProps {
  component: JSX.Element;
}

import './wraperContainer.scss';

const WraperContainer = ({ component }: WraperContainerProps) => {
  return <div className="page-container">{component}</div>;
};

export default WraperContainer;
