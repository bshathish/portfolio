/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.pdf$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/docs/[hash][ext][query]',
            },
        });

        return config;
    },
};

export default nextConfig;
