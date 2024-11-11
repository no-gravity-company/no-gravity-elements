const { spawn } = require('child_process');
const chokidar = require('chokidar');

// Initialize the watcher
const watcher = chokidar.watch('./packages', {
  ignored: /\/lib/, // Exclude paths containing "/lib"
  persistent: true,
});

// Run esbuild when a change is detected
watcher.on('change', (path) => {
  console.log(`File changed: ${path}`);

  // Spawn the process to run esbuild.js
  const process = spawn('node', ['esbuild.js'], { stdio: 'inherit' });

  process.on('error', (error) => {
    console.error(`Error executing esbuild: ${error}`);
  });
});
