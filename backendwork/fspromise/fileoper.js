const fs = require('fs').promises;

const pd = fs.writeFile('student.pdf', "CSEB students data");


pd.then(() => {
    console.log("File created successfully");
})
.catch((err) => {
    console.log("Error while writing file: " + err);
})
.finally(() => {
    console.log("Resources closed");
})
async function readFilepromise()
{
    try{
    const data=await fs.readFile('student.pdf',{encoding:'utf-8'})
    console.log(data);
    }
    catch(err)
    {
        console.log("Error while reading the data:"+err);
    }
}
readFilepromise();