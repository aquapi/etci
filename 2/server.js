// Basic static server with Bun
Bun.serve({
    async fetch(req) {
        const pathStart = req.url.indexOf('/', 12),
            file = Bun.file(import.meta.dir + req.url.substring(pathStart));

        return await file.exists() ? new Response(file) : null;
    }
});
