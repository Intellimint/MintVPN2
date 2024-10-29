import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MonitorContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const ProgressBar = styled.div<{ value: number }>`
  width: 200px;
  height: 20px;
  background: #111;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.value}%;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
`;

interface SystemResources {
  cpu: number;
  memory: {
    total: number;
    used: number;
    free: number;
    percentage: number;
  };
  platform: string;
  arch: string;
  hostname: string;
}

const ResourceMonitor: React.FC = () => {
  const [resources, setResources] = useState<SystemResources | null>(null);

  useEffect(() => {
    // Initial fetch
    window.electron.system.getResources().then(setResources);

    // Listen for updates
    const handleUpdate = (_event: any, data: SystemResources) => {
      setResources(data);
    };

    // Add listener
    window.electron.on('system:resources-update', handleUpdate);

    // Cleanup
    return () => {
      window.electron.removeListener('system:resources-update', handleUpdate);
    };
  }, []);

  if (!resources) return null;

  return (
    <MonitorContainer>
      <h3>System Resources</h3>
      <MetricRow>
        <span>CPU Usage:</span>
        <ProgressBar value={resources.cpu} />
        <span>{resources.cpu.toFixed(1)}%</span>
      </MetricRow>
      <MetricRow>
        <span>Memory Usage:</span>
        <ProgressBar value={resources.memory.percentage} />
        <span>{resources.memory.percentage.toFixed(1)}%</span>
      </MetricRow>
      <MetricRow>
        <span>Platform:</span>
        <span>{resources.platform} ({resources.arch})</span>
      </MetricRow>
      <MetricRow>
        <span>Hostname:</span>
        <span>{resources.hostname}</span>
      </MetricRow>
    </MonitorContainer>
  );
};

export default ResourceMonitor; 