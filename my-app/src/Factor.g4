grammar Factor;
expression
  :expression PROPERTY                                                                                          #Property
  | expression '['expression ']'                                                                                 #Index
  |'('expression ')'                                                                                             #SubExpression
  | ('+'|'-') expression                                                                                         #Negative
  | '!' expression                                                                                               #Non 
  | SWITCH '('(expression|'_') '=>' expression (','(expression|'_') '=>' expression)* ')'                        #Switch
  | expression ('*'|'/'|'%') expression                                                                          #Multiplicative
  | expression ('+'|'-') expression                                                                              #additive
  | expression (IN|NOTIN) ('['|'(') expression ',' expression (']'|')')                                          #In
  | expression ('>'|'<'|'>='|'<=') expression                                                                    #Relational
  | expression ('=='|'!=') expression                                                                            #Equality
  | expression ('&&'|AND) expression                                                                             #And
  | expression ('||'|OR) expression                                                                              #Or
  | expression '?' expression ':' expression                                                                     #Conditional
  | (TRUE|FALSE)                                                                                                 #Boolean
  | '"' ('\\"'|'\\\\'|.)*? '"'                                                                                   #String
  | MONEY                                                                                        #money
  | UINT                                                                                                         #Uint
  | (DECIMAL '%'?|UINT '%')                                                                                      #Decimal
  | NULL                                                                                                         #Null
  | ID                                                                                                           #Field
  | SUBFORMULA                                                                                                   #SubFormula
  ;

prog :expression EOF;
OPEN_BRACKET:                 '[';
ClOSE_BRACKET:                ']';
OPEN_PARENS:                  '(';
CLOSE_PARENS:                 ')';
COMMA:                        ',';
PLUS:                         '+';
MINUS:                        '-';
STAR:                         '*';
DIV:                          '/';
PERCENT:                      '%';
BANG:                         '!';
OP_LT:                        '<';
OP_GT:                        '>';
OP_EQ:                       '==';
OP_NE:                       '!=';
OP_LE:                       '<=';
OP_GE:                       '>=';
OP_AND:                      '&&';
OP_OR:                       '||';
AND:                 [Aa][Nn][Dd];
OR:                      [Oo][Rr];
IN:                       [Ii][Nn];
NOTIN:        [Nn][Oo][Tt][Ii][Nn];
SWITCH:   [Ss][Ww][Ii][Tt][Cc][Hh];     
TRUE:             [Tt][Rr][Uu][Ee];
FALSE:        [Ff][Aa][Ll][Ss][Ee];
NULL:          [Nn][Uu][Ll][Ll];
UINT       : [0-9]+;
DECIMAL    : '.'[0-9]+|[0-9]+'.'[0-9]+;
NUMERIC    :  DECIMAL|UINT;
CURRENCY   :  [Hh][Kk]'$'|'\uffe5';
MONEY :CURRENCY NUMERIC;
PROPERTY:      '.'[_A-Za-z][_A-Za-z0-9]*;
ID:             [_A-Za-z][_A-Za-z0-9]*;
SUBFORMULA:  '@'[_A-Za-z][_A-Za-z0-9]*;
WS:                  [ \t\r\n]+ ->skip;