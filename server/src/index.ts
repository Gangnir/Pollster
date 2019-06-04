import app from "./app";
import { LogHelper } from "./helpers/logHelper";

const PORT = 3000;

app.listen(PORT, () => {
    LogHelper.logInfo( `Server started at http://localhost:${ PORT }` );
});

process.on("exit", () => {
    LogHelper.logInfo( "Server shutting down" );
});
