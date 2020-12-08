
 export default class FactorError {
    Messages=[];
    syntaxError(recognizer, offendingSymbol, line, column, msg, e){
        this.Messages.push({column,line,msg});
    }
 }

 