import app from "./app";


const port: number = parseInt(process.env.PORT || "5000");
app.listen(port, () => {
    console.log(`Server is up and runing on port ${port}`);
})