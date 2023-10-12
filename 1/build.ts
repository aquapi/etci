// @ts-nocheck
Bun.build({
    entrypoints: [
        import.meta.dir + '/1.ts',
        import.meta.dir + '/2.ts'
    ],
    outdir: import.meta.dir + '/out'
});
