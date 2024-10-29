import { ipcMain } from 'electron';
import os from 'os';

// Function to calculate CPU usage percentage
function getCPUUsage() {
  const cpus = os.cpus();
  const usage = cpus.reduce((acc, cpu) => {
    const total = Object.values(cpu.times).reduce((a, b) => a + b);
    const idle = cpu.times.idle;
    return acc + ((total - idle) / total);
  }, 0);
  
  return (usage / cpus.length) * 100;
}

// Function to get memory usage
function getMemoryUsage() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  
  return {
    total: totalMemory,
    used: usedMemory,
    free: freeMemory,
    percentage: (usedMemory / totalMemory) * 100
  };
}

// Set up IPC handlers
ipcMain.handle('system:resources', async () => {
  return {
    cpu: getCPUUsage(),
    memory: getMemoryUsage(),
    platform: process.platform,
    arch: process.arch,
    hostname: os.hostname()
  };
});

// Update system resources every second
setInterval(() => {
  const resources = {
    cpu: getCPUUsage(),
    memory: getMemoryUsage(),
    platform: process.platform,
    arch: process.arch,
    hostname: os.hostname()
  };
  
  // Broadcast resource updates to all windows
  const windows = require('electron').BrowserWindow.getAllWindows();
  windows.forEach(window => {
    window.webContents.send('system:resources-update', resources);
  });
}, 1000); 