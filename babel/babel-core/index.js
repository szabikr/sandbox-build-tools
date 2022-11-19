const fs = require('fs')
const babel = require('@babel/core')

function readSourceCode() {
  try {
    return fs.readFileSync('source-code.js')
  } catch (error) {
    console.log(
      `Something went wrong while reading the souce code. ERROR: ${error}`,
    )
    process.exit(1)
  }
}

function writeGeneratedCode(generatedCode) {
  try {
    fs.writeFileSync('generated-code.js', generatedCode)
  } catch (error) {
    console.log(
      `Something went wrong while writing generated code. ERROR: ${error}`,
    )
    process.exit(1)
  }
}

const sourceCode = readSourceCode()
console.log('Source code has been read...')
const generatedCode = babel.transformSync(sourceCode)
console.log('Source code has been compiled...')
writeGeneratedCode(generatedCode.code)
console.log('Generated code has been written to "generated-code.js"...')
