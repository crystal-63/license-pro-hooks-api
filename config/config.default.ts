import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import userConfig from './config'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1679553341727_8095';

  // add your egg config in here
  config.middleware = [];

  //配置允许跨域
  config.cors = {
    origin: () => '*',
    allowMethods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
    //允许跨域拿到cookie
    credentials: true
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...userConfig,
    ...config,
    ...bizConfig,
  };
};
