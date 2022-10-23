import Hexagon from 'react-hexagon';
import { useEffect, useState } from 'react';
import { PodInfo } from '../../services/pod';
import HexagonalPod from './HexagonalPod';

type PodGridType = {
  pods: PodInfo[];
};

const gridWidth = 600;
const gridHeight = 600;

const PodGrid = ({ pods }: PodGridType) => {
  const [columns, setColums] = useState(1);
  const [hexSize, setHexsize] = useState(1);
  const [hexHeight, setHexHeight] = useState(1);
  const [hexWidth, setHexWidth] = useState(1);
  const [rows, setRows] = useState(0);

  const getGridDimensions = (N: number) => {
    const a = (5 * gridHeight) / (gridWidth * Math.sqrt(2));
    const b = gridHeight / (2 * gridWidth) - 2;

    const cols = Math.ceil((-b + Math.sqrt(b * b + 4 * N * a)) / (2 * a));

    const hex = Math.floor(gridWidth / (3 * cols + 0.5));
    const rws = Math.ceil(N / cols);

    setColums(cols);
    setHexsize(hex);
    setHexHeight(hex * 2);
    setHexWidth(Math.ceil(hex * Math.sqrt(3)));
    setRows(rws);
  };

  useEffect(() => {
    if (pods?.length > 0 && gridWidth > 0 && gridHeight > 0) {
      getGridDimensions(pods.length);
    }
  }, [pods]);

  const getHexDimensions = (row: number, col: number) => {
    const dimensions = {
      width: `${hexWidth}px`,
      height: `${hexHeight}px`,
      x: col * hexSize * 2.6
    };
    if (row % 2 === 1) {
      dimensions.x += hexSize * 1.3;
    }
    return dimensions;
  };

  const getRowDimensions = (row: number) => {
    const dimensions: any = {
      y: `${row * (hexSize * 0.7)}px`,
      height: `${hexHeight}px`,
      width: gridWidth
    };
    if (row % 2 === 0) {
      dimensions.marginLeft = `${(hexSize / 2) * 3}px`;
    }
    return dimensions;
  };
  if (!(pods?.length > 0 && rows > 0)) {
    return <div></div>;
  }
  return (
    <svg width={gridWidth} height={gridHeight} x={0} y={0}>
      {[...Array(rows).keys()]?.map((row) => {
        const remaining = pods?.length - row * columns;
        const cols = remaining < columns ? remaining : columns;
        const rowDim = getRowDimensions(row);
        return (
          <svg
            key={row}
            width={rowDim.width}
            height={rowDim.height}
            y={rowDim.y}
          >
            {[...Array(cols).keys()]?.map((c) => {
              const iHexagon = row * columns + c;
              const hexagon = pods[iHexagon];
              const hexDim = getHexDimensions(row, c);
              return (
                <svg
                  key={iHexagon}
                  height={hexDim.height}
                  width={hexDim.width}
                  x={`${hexDim.x}px`}
                >
                  <HexagonalPod podHexagon={hexagon} />)
                </svg>
              );
            })}
          </svg>
        );
      })}
    </svg>
  );
};

export default PodGrid;
