import React from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 15, 13, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
`;

const ModalContent = styled.div`
  ${({ theme }) => theme.glassMorphism};
  width: 500px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.glass.border};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 50%;

  &:hover {
    background: ${({ theme }) => theme.colors.glass.hover};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
`;

const SettingSection = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.glass.border};

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 16px 0;
  font-size: 1.1rem;
`;

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`;

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Title>Settings</Title>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>

        <SettingSection>
          <SectionTitle>General</SectionTitle>
          <SettingRow>
            <Label>Start with system</Label>
            <input type="checkbox" />
          </SettingRow>
          <SettingRow>
            <Label>Minimize to tray</Label>
            <input type="checkbox" />
          </SettingRow>
        </SettingSection>

        <SettingSection>
          <SectionTitle>VPN</SectionTitle>
          <SettingRow>
            <Label>Auto-connect on startup</Label>
            <input type="checkbox" />
          </SettingRow>
          <SettingRow>
            <Label>Kill switch</Label>
            <input type="checkbox" />
          </SettingRow>
        </SettingSection>

        <SettingSection>
          <SectionTitle>AI Training</SectionTitle>
          <SettingRow>
            <Label>Auto-start earning</Label>
            <input type="checkbox" />
          </SettingRow>
          <SettingRow>
            <Label>Maximum CPU temperature</Label>
            <input type="number" defaultValue={80} style={{ width: '60px' }} />
          </SettingRow>
        </SettingSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SettingsModal; 