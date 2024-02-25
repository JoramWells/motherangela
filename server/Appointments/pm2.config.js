module.exports = {
    app: [
        {
        name: 'appointment',
        script: 'index.js',
        instances: 'max',
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production',
        },
    },
],
};
