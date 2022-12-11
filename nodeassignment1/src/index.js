const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data = await fs.writeFile(fileName, fileContent);
		
	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, "utf-8")
		console.log(data);
	
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data = await fs.appendFile(fileName, fileContent)
	console.log(data);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.unlink(fileName);
}
myFileWriter("file1.txt", "this is the first created file ");
myFileReader("file1.txt");
myFileUpdater("file1.txt", "this is the update line");
myFileDeleter("file1.txt");
module.exports = {myFileWriter,  myFileUpdater, myFileReader, myFileDeleter }