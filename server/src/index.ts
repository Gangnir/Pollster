import app from "./app";
import { LogHelper } from "./helpers/logHelper";

const PORT = 3000;

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `Server started at http://localhost:${ PORT }` );
    LogHelper.logInfo( `Server started at http://localhost:${ PORT }` );
});

process.on("exit", () => {
    LogHelper.logInfo( "Server shutting down" );
});
