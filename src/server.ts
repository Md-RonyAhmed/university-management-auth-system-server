import mongoose from 'mongoose';
import { Server } from 'http';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

// handle uncaught exceptions
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function connectDB() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`🛢 Database is connected successfully`);
    app.listen(config.port, () => {
      logger.info(`Application listening on port: ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connect database', err);
  }

  // handle unhandled rejection
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

connectDB();

// handle signals termination
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
