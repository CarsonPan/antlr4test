import antlr4 from 'antlr4';
import FactorLexer from './FactorLexer.js';
import FactorParser from './FactorParser.js';
import FactorErrorListener from './FactorErrorListener.js';
function Antlr4Test(props)
{
    let expression=props.expression;
    try{
    const chars = new antlr4.InputStream(expression);
    const lexer = new FactorLexer(chars);
    const factorErrorListener=new FactorErrorListener();
    lexer.addErrorListener(factorErrorListener)
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new FactorParser(tokens);
    parser.addErrorListener(factorErrorListener)
    parser.buildParseTrees = true;
    var aa= parser.prog();
    if(factorErrorListener.Messages.length)
    {
    return <h1>{JSON.stringify(factorErrorListener.Messages)}</h1>
    }
    else
    {
    return <h1>ok!</h1>
    }
    }catch(e)
    { 
        return <h1>{e}</h1>
    }
}
export default Antlr4Test;