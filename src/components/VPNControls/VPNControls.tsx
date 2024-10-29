import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ControlRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:checked + span:before {
    transform: translateX(30px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.glass.background};
  transition: 0.4s;
  border-radius: 34px;
  border: 1px solid ${({ theme }) => theme.colors.glass.border};

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const LocationSelect = styled.select`
  ${({ theme }) => theme.glassMorphism};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  background: ${({ theme }) => theme.colors.glass.background};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  width: 200px;

  option {
    background: ${({ theme }) => theme.colors.background};
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const CPUSlider = styled.input`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.glass.background};
  border-radius: 2px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

const VPNControls: React.FC = () => {
  const [isVPNEnabled, setIsVPNEnabled] = useState(false);
  const [isEarningEnabled, setIsEarningEnabled] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('usa');
  const [cpuUsage, setCpuUsage] = useState(50);

  return (
    <Container>
      <ControlRow>
        <div>
          <Label>VPN Location</Label>
          <LocationSelect 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
          </LocationSelect>
        </div>
        <div>
          <Label>Connect</Label>
          <Toggle>
            <ToggleInput 
              type="checkbox" 
              checked={isVPNEnabled}
              onChange={(e) => setIsVPNEnabled(e.target.checked)}
            />
            <ToggleSlider />
          </Toggle>
        </div>
      </ControlRow>

      <ControlRow>
        <div>
          <Label>CPU Contribution: {cpuUsage}%</Label>
          <CPUSlider
            type="range"
            min="10"
            max="90"
            value={cpuUsage}
            onChange={(e) => setCpuUsage(Number(e.target.value))}
          />
        </div>
        <div>
          <Label>Earn</Label>
          <Toggle>
            <ToggleInput 
              type="checkbox" 
              checked={isEarningEnabled}
              onChange={(e) => setIsEarningEnabled(e.target.checked)}
            />
            <ToggleSlider />
          </Toggle>
        </div>
      </ControlRow>
    </Container>
  );
};

export default VPNControls; 