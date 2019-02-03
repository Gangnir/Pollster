import * as fs from "fs";
import moment = require("moment");
import * as path from "path";
import { createLogger, format, LogCallback, Logger, transports } from "winston";

export class LogHelper {
    public static logInfo(message: string) {
        this.initialize();
        this.logger.info(message);
    }

    public static logError(error: any, message?: string) {
        this.initialize();
        this.logger.error(`${message || "-"} | ${error || "-"}`);
    }

    public static logDebug(message: string) {
        this.initialize();
        this.logger.debug(message);
    }
    private static initialized: boolean = false;
    private static logDir: string = "log";
    private static logger: Logger;
    private static env: string = process.env.NODE_ENV || "development";

    private static initialize() {
        if (this.initialized) {
            return;
        }

        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir);
        }

        const filename = path.join(this.logDir, `${moment().format("YYYYMMDD")}.log`);

        this.logger = createLogger({
            level: this.env === "development" ? "debug" : "info",
            format: format.combine(
                format.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss:SSS"
                }),
                format.printf((info) => `${info.timestamp} | ${info.level} | ${info.message}`)
            ),
            transports: [
                new transports.Console({
                    level: "info",
                    format: format.combine(
                        format.colorize(),
                        format.printf(
                          (info) => `${info.timestamp} | ${info.level} | ${info.message}`
                        )
                    )
                }),
                new transports.File({filename})
            ]
        });

        this.initialized = true;
    }
}
