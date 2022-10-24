import { Tooltip } from '@mui/material';
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
      x: col * hexSize * 2.6 // play with this values to ajust distances
    };
    if (row % 2 === 1) {
      dimensions.x += hexSize * 1.3; // play with this values to ajust distances
    }
    return dimensions;
  };

  const getRowDimensions = (row: number) => {
    const dimensions: any = {
      y: `${row * (hexSize * 0.75)}px`, // play with this values to ajust distances
      height: `${hexHeight}px`,
      width: gridWidth
    };
    if (row % 2 === 0) {
      dimensions.marginLeft = `${(hexSize / 2) * 3}px`; // play with this values to ajust distances
    }
    return dimensions;
  };

  if (!pods) {
    return <div>No pods to be displayed</div>;
  }
  return (
    <svg width={gridWidth} height={gridHeight} x={0} y={0}>
      {[...Array(rows).keys()].map((row) => {
        const remaining = pods?.length - row * columns;
        const cols = remaining < columns ? remaining : columns;
        const rowDim = getRowDimensions(row);
        return (
          remaining > 0 && (
            <svg
              key={row}
              width={rowDim.width}
              height={rowDim.height}
              y={rowDim.y}
            >
              {[...Array(cols).keys()].map((c) => {
                const iHexagon = row * columns + c;
                const pod = pods[iHexagon];
                const hexDim = getHexDimensions(row, c);
                return (
                  <HexagonalPod
                    height={hexDim.height}
                    width={hexDim.width}
                    x={`${hexDim.x}px`}
                    pod={pod}
                    iHexagon={iHexagon}
                  />
                );
              })}
            </svg>
          )
        );
      })}
    </svg>
  );
};

export default PodGrid;
