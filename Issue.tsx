import React, { useCallback, useEffect } from 'react';

import 'reactflow/dist/style.css';

const AttackReconstructionCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onNodeClick = (event, node) => console.log('click node', node);
  const onNodeMouseEnter = (event, node) => console.log('node hover', node);
  const onNodeMouseLeave = (event, node) => console.log('stopped node hover', node);

  const formatArtifactsForNodes = (artifacts) => {
  };

  const formattEdgeForNodes = (lines) => {
  };

  useEffect(() => {
    setNodes(formatArtifactsForNodes(data.artifacts));
    setEdges(formattEdgeForNodes(data.relationships));
  }, []);

  // Currently not displaying any connections/edges between nodes
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
    [setEdges],
  );

  return (
    <div className='uax-canvas' data-testid='uax-canvas'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodeClick={onNodeClick}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeShapes}
        proOptions={{ hideAttribution: true }}>
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default AttackReconstructionCanvas;
