// Runs in a background thread — receives messages from the main page
self.onmessage = (e) => {
  const n = e.data; // Number sent from worker-demo.html
  let result = 0;
  // Heavy loop: sum 0 + 1 + 2 + ... + (n-1) without freezing the UI
  for (let i = 0; i < n; i++) result += i;
  // Send result back to the main page
  self.postMessage(`Sum 0 to ${n} = ${result}`);
};