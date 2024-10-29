export const theme = {
  colors: {
    background: '#0A0F0D',
    primary: '#7EFDD0',
    secondary: '#05B384',
    accent: '#013E2C',
    text: '#E9FBF4',
    glass: {
      background: 'rgba(126, 253, 208, 0.03)',
      border: 'rgba(126, 253, 208, 0.08)',
      hover: 'rgba(126, 253, 208, 0.05)',
    },
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Space Grotesk', sans-serif",
  },
  glassMorphism: {
    background: 'rgba(10, 15, 13, 0.7)',
    border: '1px solid rgba(126, 253, 208, 0.12)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    boxShadow: `
      0 4px 24px -1px rgba(126, 253, 208, 0.05),
      0 0 1px 0 rgba(126, 253, 208, 0.15)
    `,
  },
  animations: {
    glow: '@keyframes glow { 0% { box-shadow: 0 0 5px rgba(126, 253, 208, 0.2); } 50% { box-shadow: 0 0 20px rgba(126, 253, 208, 0.4); } 100% { box-shadow: 0 0 5px rgba(126, 253, 208, 0.2); } }',
    pulse: '@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.02); } 100% { transform: scale(1); } }',
    fadeIn: '@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }',
  },
}; 