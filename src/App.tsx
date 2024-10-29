import React, { useState } from 'react';
import styled from 'styled-components';
import { Settings } from 'react-feather';
import VPNControls from './components/VPNControls/VPNControls';
import ResourceMonitor from './components/ResourceMonitor/ResourceMonitor';
import AITrainingPanel from './components/AITraining/AITrainingPanel';
import SettingsModal from './components/Settings/SettingsModal';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin: 0 0 16px 0;
  grid-column: 1 / -1;
  font-size: 2rem;
  letter-spacing: 1px;
`;

const Panel = styled.div`
  ${({ theme }) => theme.glassMorphism};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LeftPanel = styled(Panel)`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightPanel = styled(Panel)`
  grid-column: 2;
  grid-row: 2;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.glass.border};
  margin: 20px 0;
  width: 100%;
`;

const SettingsIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.7;
    transition: all 0.2s ease;
  }
  
  &:hover svg {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const App: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  return (
    <AppContainer>
      <Header>MintVPN</Header>
      <SettingsIcon onClick={handleSettingsClick}>
        <Settings size={24} />
      </SettingsIcon>
      
      <LeftPanel>
        <VPNControls />
        <Divider />
        <AITrainingPanel />
      </LeftPanel>
      
      <RightPanel>
        <ResourceMonitor />
      </RightPanel>
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </AppContainer>
  );
};

export default App;