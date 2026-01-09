type LogLevel = 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  error?: Error | unknown;
  context?: Record<string, any>;
  timestamp: string;
  environment: string;
}

class Logger {
  private log(level: LogLevel, message: string, error?: unknown, context?: Record<string, any>) {
    const safeError =
      error instanceof Error
        ? { name: error.name, message: error.message }
        : typeof error === "string"
          ? { message: error }
          : error
            ? { message: "Unknown error" }
            : undefined;

    const entry: LogEntry = {
      level,
      message,
      error: process.env.NODE_ENV === "development" ? error : safeError,
      context,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    };

    if (process.env.NODE_ENV === 'development') {
      const color = level === 'error' ? '\x1b[31m' : level === 'warn' ? '\x1b[33m' : '\x1b[36m';
      const reset = '\x1b[0m';
      
      console[level](`${color}[${level.toUpperCase()}]${reset} ${message}`);
      if (error) console[level](error);
      if (context) console[level](context);
    } else {
      console[level](JSON.stringify(entry));
    }
  }

  info(message: string, context?: Record<string, any>) {
    this.log('info', message, undefined, context);
  }

  warn(message: string, context?: Record<string, any>) {
    this.log('warn', message, undefined, context);
  }

  error(message: string, error?: unknown, context?: Record<string, any>) {
    this.log('error', message, error, context);
  }
}

export const logger = new Logger();
