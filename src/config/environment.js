import bootstrap from './../bootstrap';

bootstrap();

const env = {
    app: {
        name: process.env.APP_NAME,
        port: process.env.APP_PORT
    }
};

export default env;
