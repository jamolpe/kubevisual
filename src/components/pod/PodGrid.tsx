import { Hexagon } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { PodInfo } from '../../services/pod';

type PodGridType = {
  pods: PodInfo[];
};

const gridWidth = 500;
const gridHeight = 500;

const PodGrid = ({ pods }: PodGridType) => {
  const [columns, setColums] = useState(1);
  const [hexSize, setHexsize] = useState(1);
  const [hexHeight, setHexHeight] = useState(1);
  const [hexWidth, setHexWidth] = useState(1);
  const [rows, setRows] = useState(0);

  const getGridDimensions = (N: number) => {
    const a = (5 * gridHeight) / (gridWidth * Math.sqrt(2));
    const b = gridHeight / (2 * gridWidth) - 2;

    const columns = Math.ceil((-b + Math.sqrt(b * b + 4 * N * a)) / (2 * a));

    const hexSize = Math.floor(gridWidth / (3 * columns + 0.5));
    const rows = Math.ceil(N / columns);

    console.log(
      JSON.stringify({ columns, hexSize, hexHeight, hexWidth, rows })
    );
    setColums(columns);
    setHexsize(hexSize);
    setHexHeight(hexSize * 2);
    setHexWidth(Math.ceil(hexSize * Math.sqrt(3)));
    setRows(rows);
  };

  useEffect(() => {
    if (pods.length > 0 && gridWidth > 0 && gridHeight > 0) {
      getGridDimensions(pods.length);
    }
  }, [pods]);

  const getHexDimensions = (row: number, col: number) => {
    const dimensions = {
      width: `${hexWidth}px`,
      height: `${hexHeight}px`,
      x: col * hexSize * 3
    };
    if (row % 2 === 1) {
      dimensions.x += hexSize * (3 / 2);
    }
    return dimensions;
  };

  const getRowDimensions = (row: number) => {
    const dimensions = {
      y: `${row * (hexSize * (Math.sqrt(3) / 2))}px`,
      height: `${hexHeight}px`,
      width: gridWidth,
      marginLeft: ''
    };
    if (row % 2 === 0) {
      dimensions.marginLeft = `${(hexSize / 2) * 3}px`;
    }
    return dimensions;
  };
  return (
    <svg width={gridWidth} height={gridHeight} x={0} y={0}>
      {[...Array(rows).keys()].map((row) => {
        const remaining = pods.length - row * columns;
        const cols = remaining < columns ? remaining : columns;
        const rowDim = getRowDimensions(row);
        return (
          <svg
            key={row}
            width={rowDim.width}
            height={rowDim.height}
            y={rowDim.y}
          >
            {[...Array(cols).keys()].map((c) => {
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
                  <Hexagon
                    style={{
                      stroke: '#42873f',
                      height: '10px',
                      fill: '#007aff'
                    }}
                  >
                    <text fontSize={100} x="20%" y="50%">
                      {hexagon.name}
                    </text>
                  </Hexagon>
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
