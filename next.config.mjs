/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Configura el cargador para archivos PDF
        config.module.rules.push({
          test: /\.pdf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next',
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        });
    
        // Importante: vuelve a exportar la configuración
        return config;
      },
    
};

export default nextConfig;
