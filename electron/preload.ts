import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  vpn: {
    connect: () => ipcRenderer.invoke('vpn:connect'),
    disconnect: () => ipcRenderer.invoke('vpn:disconnect'),
    getStatus: () => ipcRenderer.invoke('vpn:status'),
  },
  system: {
    getResources: () => ipcRenderer.invoke('system:resources'),
  },
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (event, ...args) => callback(event, ...args));
  },
  removeListener: (channel: string, callback: Function) => {
    ipcRenderer.removeListener(channel, callback as any);
  },
});

// Type definitions for the exposed API
export type ElectronAPI = {
  vpn: {
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    getStatus: () => Promise<boolean>;
  };
  system: {
    getResources: () => Promise<{
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
    }>;
  };
  on: (channel: string, callback: Function) => void;
  removeListener: (channel: string, callback: Function) => void;
}; 