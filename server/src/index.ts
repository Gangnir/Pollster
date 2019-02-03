import app from "./app";
const PORT = 3000;

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `Server started at http://localhost:${ PORT }` );
});
