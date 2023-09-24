module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });





  // 704505d65535999e3c222c3ba487989c961b9f73ffef2f41f4e8a9d385986709964c1e95b5a85ae08a86109b774f782d85bae6213822a23c8ea1d5d2f18c5e78c3719ec841f354eda5f5f09df6502f4a3263038f6698afa758380e49f9e57e3071e8eab205c0c7c1fbd6e28f5a7a1c4484a9444a757d1a751193293d8d9061b8