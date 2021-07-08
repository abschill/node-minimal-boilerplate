import logger from 'utils/logger.js';
import settings from 'config/settings.json';
import asset from 'static/asset.json';
logger.success(settings.initial_message);
logger.object(asset);