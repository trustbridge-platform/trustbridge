import("./.output/server/index.mjs").then(module => {
  const server = module.default || module;
  const port = process.env.PORT || 3000;
  
  console.log("🚀 Starting TrustBridge server...");
  console.log("📡 Listening on port", port);
  
  const listener = async (req, res) => {
    try {
      const request = new Request(`http://localhost:${port}${req.url}`, {
        method: req.method,
        headers: req.headers,
        body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
      });
      const response = await server.fetch(request, {});
      res.writeHead(response.status, Object.fromEntries(response.headers));
      const body = await response.arrayBuffer();
      res.end(Buffer.from(body));
    } catch (error) {
      console.error("Server error:", error);
      res.writeHead(500);
      res.end("Internal Server Error");
    }
  };
  
  import("http").then(http => {
    http.createServer(listener).listen(port, () => {
      console.log(`✅ Server running at http://localhost:${port}`);
    });
  });
}).catch(err => {
  console.error("Failed to start server:", err);
});
