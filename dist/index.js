import express from 'express';
const dev = process.env.NODE_ENV !== 'production';
async function startServer() {
    const { default: next } = await import('next');
    const app = next({ dev });
    const handle = app.getRequestHandler();
    await app.prepare();
    const server = express();
    // Fallback to Next.js handler for all other routes
    server.all(/(.*)/, (req, res) => {
        return handle(req, res);
    });
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
        if (err)
            throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
}
startServer().catch((error) => {
    console.error('Failed to start server', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map