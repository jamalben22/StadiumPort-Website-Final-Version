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
    const entry: LogEntry = {
      level,
      message,
      error,
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
      // Production logging logic
      // Ideally, send to a service like Sentry, LogRocket, or Datadog
      // For now, structured JSON logging for Vercel/cloud logs
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