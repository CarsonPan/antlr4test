// Generated from Factor.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import FactorListener from './FactorListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003-o\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002\u0014\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u0002\u001b\n\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002\u001f\n\u0002\f\u0002\u000e\u0002\"\u000b\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002+\n\u0002\f\u0002\u000e\u0002.\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00025\n\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u00029\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002>\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "g\n\u0002\f\u0002\u000e\u0002j\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003,\u0003\u0002\u0004\u0002\u0004\u0002\f\u0003",
    "\u0002\u000f\u0010\u0003\u0002\"#\u0003\u0002\u0011\u0013\u0004\u0002",
    "\u0015\u0016\u0019\u001a\u0003\u0002\u0017\u0018\u0004\u0002\u001b\u001b",
    "\u001d\u001d\u0004\u0002\u001c\u001c\u001e\u001e\u0003\u0002\u001f ",
    "\u0004\u0002\n\n\f\f\u0004\u0002\u000b\u000b\r\r\u0002\u0089\u0002=",
    "\u0003\u0002\u0002\u0002\u0004k\u0003\u0002\u0002\u0002\u0006\u0007",
    "\b\u0002\u0001\u0002\u0007\b\u0007\f\u0002\u0002\b\t\u0005\u0002\u0002",
    "\u0002\t\n\u0007\r\u0002\u0002\n>\u0003\u0002\u0002\u0002\u000b\f\t",
    "\u0002\u0002\u0002\f>\u0005\u0002\u0002\u0015\r\u000e\u0007\u0014\u0002",
    "\u0002\u000e>\u0005\u0002\u0002\u0014\u000f\u0010\u0007!\u0002\u0002",
    "\u0010\u0013\u0007\f\u0002\u0002\u0011\u0014\u0005\u0002\u0002\u0002",
    "\u0012\u0014\u0007\u0003\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002",
    "\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002",
    "\u0015\u0016\u0007\u0004\u0002\u0002\u0016 \u0005\u0002\u0002\u0002",
    "\u0017\u001a\u0007\u000e\u0002\u0002\u0018\u001b\u0005\u0002\u0002\u0002",
    "\u0019\u001b\u0007\u0003\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002",
    "\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002",
    "\u001c\u001d\u0007\u0004\u0002\u0002\u001d\u001f\u0005\u0002\u0002\u0002",
    "\u001e\u0017\u0003\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002\u0002",
    " \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!#\u0003\u0002",
    "\u0002\u0002\" \u0003\u0002\u0002\u0002#$\u0007\r\u0002\u0002$>\u0003",
    "\u0002\u0002\u0002%>\t\u0003\u0002\u0002&,\u0007\u0007\u0002\u0002\'",
    "+\u0007\b\u0002\u0002(+\u0007\t\u0002\u0002)+\u000b\u0002\u0002\u0002",
    "*\'\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*)\u0003\u0002",
    "\u0002\u0002+.\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002,*\u0003",
    "\u0002\u0002\u0002-/\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002",
    "/>\u0007\u0007\u0002\u00020>\u0007)\u0002\u00021>\u0007%\u0002\u0002",
    "24\u0007&\u0002\u000235\u0007\u0013\u0002\u000243\u0003\u0002\u0002",
    "\u000245\u0003\u0002\u0002\u000259\u0003\u0002\u0002\u000267\u0007%",
    "\u0002\u000279\u0007\u0013\u0002\u000282\u0003\u0002\u0002\u000286\u0003",
    "\u0002\u0002\u00029>\u0003\u0002\u0002\u0002:>\u0007$\u0002\u0002;>",
    "\u0007+\u0002\u0002<>\u0007,\u0002\u0002=\u0006\u0003\u0002\u0002\u0002",
    "=\u000b\u0003\u0002\u0002\u0002=\r\u0003\u0002\u0002\u0002=\u000f\u0003",
    "\u0002\u0002\u0002=%\u0003\u0002\u0002\u0002=&\u0003\u0002\u0002\u0002",
    "=0\u0003\u0002\u0002\u0002=1\u0003\u0002\u0002\u0002=8\u0003\u0002\u0002",
    "\u0002=:\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=<\u0003\u0002",
    "\u0002\u0002>h\u0003\u0002\u0002\u0002?@\f\u0012\u0002\u0002@A\t\u0004",
    "\u0002\u0002Ag\u0005\u0002\u0002\u0013BC\f\u0011\u0002\u0002CD\t\u0002",
    "\u0002\u0002Dg\u0005\u0002\u0002\u0012EF\f\u000f\u0002\u0002FG\t\u0005",
    "\u0002\u0002Gg\u0005\u0002\u0002\u0010HI\f\u000e\u0002\u0002IJ\t\u0006",
    "\u0002\u0002Jg\u0005\u0002\u0002\u000fKL\f\r\u0002\u0002LM\t\u0007\u0002",
    "\u0002Mg\u0005\u0002\u0002\u000eNO\f\f\u0002\u0002OP\t\b\u0002\u0002",
    "Pg\u0005\u0002\u0002\rQR\f\u000b\u0002\u0002RS\u0007\u0005\u0002\u0002",
    "ST\u0005\u0002\u0002\u0002TU\u0007\u0006\u0002\u0002UV\u0005\u0002\u0002",
    "\fVg\u0003\u0002\u0002\u0002WX\f\u0018\u0002\u0002Xg\u0007*\u0002\u0002",
    "YZ\f\u0017\u0002\u0002Z[\u0007\n\u0002\u0002[\\\u0005\u0002\u0002\u0002",
    "\\]\u0007\u000b\u0002\u0002]g\u0003\u0002\u0002\u0002^_\f\u0010\u0002",
    "\u0002_`\t\t\u0002\u0002`a\t\n\u0002\u0002ab\u0005\u0002\u0002\u0002",
    "bc\u0007\u000e\u0002\u0002cd\u0005\u0002\u0002\u0002de\t\u000b\u0002",
    "\u0002eg\u0003\u0002\u0002\u0002f?\u0003\u0002\u0002\u0002fB\u0003\u0002",
    "\u0002\u0002fE\u0003\u0002\u0002\u0002fH\u0003\u0002\u0002\u0002fK\u0003",
    "\u0002\u0002\u0002fN\u0003\u0002\u0002\u0002fQ\u0003\u0002\u0002\u0002",
    "fW\u0003\u0002\u0002\u0002fY\u0003\u0002\u0002\u0002f^\u0003\u0002\u0002",
    "\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002",
    "\u0002\u0002i\u0003\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002",
    "kl\u0005\u0002\u0002\u0002lm\u0007\u0002\u0002\u0003m\u0005\u0003\u0002",
    "\u0002\u0002\f\u0013\u001a *,48=fh"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FactorParser extends antlr4.Parser {

    static grammarFileName = "Factor.g4";
    static literalNames = [ null, "'_'", "'=>'", "'?'", "':'", "'\"'", "'\\\"'", 
                            "'\\\\'", "'['", "']'", "'('", "')'", "','", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "'<'", 
                            "'>'", "'=='", "'!='", "'<='", "'>='", "'&&'", 
                            "'||'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "OPEN_BRACKET", "ClOSE_BRACKET", "OPEN_PARENS", 
                             "CLOSE_PARENS", "COMMA", "PLUS", "MINUS", "STAR", 
                             "DIV", "PERCENT", "BANG", "OP_LT", "OP_GT", 
                             "OP_EQ", "OP_NE", "OP_LE", "OP_GE", "OP_AND", 
                             "OP_OR", "AND", "OR", "IN", "NOTIN", "SWITCH", 
                             "TRUE", "FALSE", "NULL", "UINT", "DECIMAL", 
                             "NUMERIC", "CURRENCY", "MONEY", "PROPERTY", 
                             "ID", "SUBFORMULA", "WS" ];
    static ruleNames = [ "expression", "prog" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FactorParser.ruleNames;
        this.literalNames = FactorParser.literalNames;
        this.symbolicNames = FactorParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 16);
    		case 1:
    			return this.precpred(this._ctx, 15);
    		case 2:
    			return this.precpred(this._ctx, 13);
    		case 3:
    			return this.precpred(this._ctx, 12);
    		case 4:
    			return this.precpred(this._ctx, 11);
    		case 5:
    			return this.precpred(this._ctx, 10);
    		case 6:
    			return this.precpred(this._ctx, 9);
    		case 7:
    			return this.precpred(this._ctx, 22);
    		case 8:
    			return this.precpred(this._ctx, 21);
    		case 9:
    			return this.precpred(this._ctx, 14);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, FactorParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SubExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 5;
	            this.match(FactorParser.OPEN_PARENS);
	            this.state = 6;
	            this.expression(0);
	            this.state = 7;
	            this.match(FactorParser.CLOSE_PARENS);
	            break;

	        case 2:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 9;
	            _la = this._input.LA(1);
	            if(!(_la===FactorParser.PLUS || _la===FactorParser.MINUS)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 10;
	            this.expression(19);
	            break;

	        case 3:
	            localctx = new NonContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 11;
	            this.match(FactorParser.BANG);
	            this.state = 12;
	            this.expression(18);
	            break;

	        case 4:
	            localctx = new SwitchContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 13;
	            this.match(FactorParser.SWITCH);
	            this.state = 14;
	            this.match(FactorParser.OPEN_PARENS);
	            this.state = 17;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case FactorParser.T__4:
	            case FactorParser.OPEN_PARENS:
	            case FactorParser.PLUS:
	            case FactorParser.MINUS:
	            case FactorParser.BANG:
	            case FactorParser.SWITCH:
	            case FactorParser.TRUE:
	            case FactorParser.FALSE:
	            case FactorParser.NULL:
	            case FactorParser.UINT:
	            case FactorParser.DECIMAL:
	            case FactorParser.MONEY:
	            case FactorParser.ID:
	            case FactorParser.SUBFORMULA:
	                this.state = 15;
	                this.expression(0);
	                break;
	            case FactorParser.T__0:
	                this.state = 16;
	                this.match(FactorParser.T__0);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 19;
	            this.match(FactorParser.T__1);
	            this.state = 20;
	            this.expression(0);
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FactorParser.COMMA) {
	                this.state = 21;
	                this.match(FactorParser.COMMA);
	                this.state = 24;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case FactorParser.T__4:
	                case FactorParser.OPEN_PARENS:
	                case FactorParser.PLUS:
	                case FactorParser.MINUS:
	                case FactorParser.BANG:
	                case FactorParser.SWITCH:
	                case FactorParser.TRUE:
	                case FactorParser.FALSE:
	                case FactorParser.NULL:
	                case FactorParser.UINT:
	                case FactorParser.DECIMAL:
	                case FactorParser.MONEY:
	                case FactorParser.ID:
	                case FactorParser.SUBFORMULA:
	                    this.state = 22;
	                    this.expression(0);
	                    break;
	                case FactorParser.T__0:
	                    this.state = 23;
	                    this.match(FactorParser.T__0);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 26;
	                this.match(FactorParser.T__1);
	                this.state = 27;
	                this.expression(0);
	                this.state = 32;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 33;
	            this.match(FactorParser.CLOSE_PARENS);
	            break;

	        case 5:
	            localctx = new BooleanContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 35;
	            _la = this._input.LA(1);
	            if(!(_la===FactorParser.TRUE || _la===FactorParser.FALSE)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 6:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 36;
	            this.match(FactorParser.T__4);
	            this.state = 42;
	            this._errHandler.sync(this);
	            let _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 40;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                    switch(la_) {
	                    case 1:
	                        this.state = 37;
	                        this.match(FactorParser.T__5);
	                        break;

	                    case 2:
	                        this.state = 38;
	                        this.match(FactorParser.T__6);
	                        break;

	                    case 3:
	                        this.state = 39;
	                        this.matchWildcard();
	                        break;

	                    } 
	                }
	                this.state = 44;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            this.state = 45;
	            this.match(FactorParser.T__4);
	            break;

	        case 7:
	            localctx = new MoneyContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 46;
	            this.match(FactorParser.MONEY);
	            break;

	        case 8:
	            localctx = new UintContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 47;
	            this.match(FactorParser.UINT);
	            break;

	        case 9:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case FactorParser.DECIMAL:
	                this.state = 48;
	                this.match(FactorParser.DECIMAL);
	                this.state = 50;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                if(la_===1) {
	                    this.state = 49;
	                    this.match(FactorParser.PERCENT);

	                }
	                break;
	            case FactorParser.UINT:
	                this.state = 52;
	                this.match(FactorParser.UINT);
	                this.state = 53;
	                this.match(FactorParser.PERCENT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 10:
	            localctx = new NullContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 56;
	            this.match(FactorParser.NULL);
	            break;

	        case 11:
	            localctx = new FieldContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 57;
	            this.match(FactorParser.ID);
	            break;

	        case 12:
	            localctx = new SubFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 58;
	            this.match(FactorParser.SUBFORMULA);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 100;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 61;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 62;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FactorParser.STAR) | (1 << FactorParser.DIV) | (1 << FactorParser.PERCENT))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 63;
	                    this.expression(17);
	                    break;

	                case 2:
	                    localctx = new AdditiveContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 64;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 65;
	                    _la = this._input.LA(1);
	                    if(!(_la===FactorParser.PLUS || _la===FactorParser.MINUS)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 66;
	                    this.expression(16);
	                    break;

	                case 3:
	                    localctx = new RelationalContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 67;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 68;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FactorParser.OP_LT) | (1 << FactorParser.OP_GT) | (1 << FactorParser.OP_LE) | (1 << FactorParser.OP_GE))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 69;
	                    this.expression(14);
	                    break;

	                case 4:
	                    localctx = new EqualityContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 70;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 71;
	                    _la = this._input.LA(1);
	                    if(!(_la===FactorParser.OP_EQ || _la===FactorParser.OP_NE)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 72;
	                    this.expression(13);
	                    break;

	                case 5:
	                    localctx = new AndContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 73;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 74;
	                    _la = this._input.LA(1);
	                    if(!(_la===FactorParser.OP_AND || _la===FactorParser.AND)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 75;
	                    this.expression(12);
	                    break;

	                case 6:
	                    localctx = new OrContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 76;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 77;
	                    _la = this._input.LA(1);
	                    if(!(_la===FactorParser.OP_OR || _la===FactorParser.OR)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 78;
	                    this.expression(11);
	                    break;

	                case 7:
	                    localctx = new ConditionalContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 79;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 80;
	                    this.match(FactorParser.T__2);
	                    this.state = 81;
	                    this.expression(0);
	                    this.state = 82;
	                    this.match(FactorParser.T__3);
	                    this.state = 83;
	                    this.expression(10);
	                    break;

	                case 8:
	                    localctx = new PropertyContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 85;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 86;
	                    this.match(FactorParser.PROPERTY);
	                    break;

	                case 9:
	                    localctx = new IndexContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 87;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 88;
	                    this.match(FactorParser.OPEN_BRACKET);
	                    this.state = 89;
	                    this.expression(0);
	                    this.state = 90;
	                    this.match(FactorParser.ClOSE_BRACKET);
	                    break;

	                case 10:
	                    localctx = new InContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FactorParser.RULE_expression);
	                    this.state = 92;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 93;
	                    _la = this._input.LA(1);
	                    if(!(_la===FactorParser.IN || _la===FactorParser.NOTIN)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 94;
	                    _la = this._input.LA(1);
	                    if(!(_la===FactorParser.OPEN_BRACKET || _la===FactorParser.OPEN_PARENS)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 95;
	                    this.expression(0);
	                    this.state = 96;
	                    this.match(FactorParser.COMMA);
	                    this.state = 97;
	                    this.expression(0);
	                    this.state = 98;
	                    _la = this._input.LA(1);
	                    if(!(_la===FactorParser.ClOSE_BRACKET || _la===FactorParser.CLOSE_PARENS)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    break;

	                } 
	            }
	            this.state = 104;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FactorParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.expression(0);
	        this.state = 106;
	        this.match(FactorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FactorParser.EOF = antlr4.Token.EOF;
FactorParser.T__0 = 1;
FactorParser.T__1 = 2;
FactorParser.T__2 = 3;
FactorParser.T__3 = 4;
FactorParser.T__4 = 5;
FactorParser.T__5 = 6;
FactorParser.T__6 = 7;
FactorParser.OPEN_BRACKET = 8;
FactorParser.ClOSE_BRACKET = 9;
FactorParser.OPEN_PARENS = 10;
FactorParser.CLOSE_PARENS = 11;
FactorParser.COMMA = 12;
FactorParser.PLUS = 13;
FactorParser.MINUS = 14;
FactorParser.STAR = 15;
FactorParser.DIV = 16;
FactorParser.PERCENT = 17;
FactorParser.BANG = 18;
FactorParser.OP_LT = 19;
FactorParser.OP_GT = 20;
FactorParser.OP_EQ = 21;
FactorParser.OP_NE = 22;
FactorParser.OP_LE = 23;
FactorParser.OP_GE = 24;
FactorParser.OP_AND = 25;
FactorParser.OP_OR = 26;
FactorParser.AND = 27;
FactorParser.OR = 28;
FactorParser.IN = 29;
FactorParser.NOTIN = 30;
FactorParser.SWITCH = 31;
FactorParser.TRUE = 32;
FactorParser.FALSE = 33;
FactorParser.NULL = 34;
FactorParser.UINT = 35;
FactorParser.DECIMAL = 36;
FactorParser.NUMERIC = 37;
FactorParser.CURRENCY = 38;
FactorParser.MONEY = 39;
FactorParser.PROPERTY = 40;
FactorParser.ID = 41;
FactorParser.SUBFORMULA = 42;
FactorParser.WS = 43;

FactorParser.RULE_expression = 0;
FactorParser.RULE_prog = 1;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FactorParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NullContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(FactorParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterNull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitNull(this);
		}
	}


}

FactorParser.NullContext = NullContext;

class OrContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP_OR() {
	    return this.getToken(FactorParser.OP_OR, 0);
	};

	OR() {
	    return this.getToken(FactorParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitOr(this);
		}
	}


}

FactorParser.OrContext = OrContext;

class InContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA() {
	    return this.getToken(FactorParser.COMMA, 0);
	};

	IN() {
	    return this.getToken(FactorParser.IN, 0);
	};

	NOTIN() {
	    return this.getToken(FactorParser.NOTIN, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(FactorParser.OPEN_BRACKET, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(FactorParser.OPEN_PARENS, 0);
	};

	ClOSE_BRACKET() {
	    return this.getToken(FactorParser.ClOSE_BRACKET, 0);
	};

	CLOSE_PARENS() {
	    return this.getToken(FactorParser.CLOSE_PARENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterIn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitIn(this);
		}
	}


}

FactorParser.InContext = InContext;

class SubFormulaContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SUBFORMULA() {
	    return this.getToken(FactorParser.SUBFORMULA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterSubFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitSubFormula(this);
		}
	}


}

FactorParser.SubFormulaContext = SubFormulaContext;

class RelationalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP_GT() {
	    return this.getToken(FactorParser.OP_GT, 0);
	};

	OP_LT() {
	    return this.getToken(FactorParser.OP_LT, 0);
	};

	OP_GE() {
	    return this.getToken(FactorParser.OP_GE, 0);
	};

	OP_LE() {
	    return this.getToken(FactorParser.OP_LE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterRelational(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitRelational(this);
		}
	}


}

FactorParser.RelationalContext = RelationalContext;

class ConditionalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitConditional(this);
		}
	}


}

FactorParser.ConditionalContext = ConditionalContext;

class IndexContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OPEN_BRACKET() {
	    return this.getToken(FactorParser.OPEN_BRACKET, 0);
	};

	ClOSE_BRACKET() {
	    return this.getToken(FactorParser.ClOSE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitIndex(this);
		}
	}


}

FactorParser.IndexContext = IndexContext;

class StringContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitString(this);
		}
	}


}

FactorParser.StringContext = StringContext;

class NonContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BANG() {
	    return this.getToken(FactorParser.BANG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterNon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitNon(this);
		}
	}


}

FactorParser.NonContext = NonContext;

class AdditiveContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(FactorParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(FactorParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterAdditive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitAdditive(this);
		}
	}


}

FactorParser.AdditiveContext = AdditiveContext;

class FieldContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(FactorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitField(this);
		}
	}


}

FactorParser.FieldContext = FieldContext;

class UintContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	UINT() {
	    return this.getToken(FactorParser.UINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterUint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitUint(this);
		}
	}


}

FactorParser.UintContext = UintContext;

class MultiplicativeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	STAR() {
	    return this.getToken(FactorParser.STAR, 0);
	};

	DIV() {
	    return this.getToken(FactorParser.DIV, 0);
	};

	PERCENT() {
	    return this.getToken(FactorParser.PERCENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterMultiplicative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitMultiplicative(this);
		}
	}


}

FactorParser.MultiplicativeContext = MultiplicativeContext;

class NegativeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PLUS() {
	    return this.getToken(FactorParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(FactorParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterNegative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitNegative(this);
		}
	}


}

FactorParser.NegativeContext = NegativeContext;

class SwitchContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SWITCH() {
	    return this.getToken(FactorParser.SWITCH, 0);
	};

	OPEN_PARENS() {
	    return this.getToken(FactorParser.OPEN_PARENS, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	CLOSE_PARENS() {
	    return this.getToken(FactorParser.CLOSE_PARENS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FactorParser.COMMA);
	    } else {
	        return this.getToken(FactorParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterSwitch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitSwitch(this);
		}
	}


}

FactorParser.SwitchContext = SwitchContext;

class MoneyContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MONEY() {
	    return this.getToken(FactorParser.MONEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterMoney(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitMoney(this);
		}
	}


}

FactorParser.MoneyContext = MoneyContext;

class DecimalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DECIMAL() {
	    return this.getToken(FactorParser.DECIMAL, 0);
	};

	UINT() {
	    return this.getToken(FactorParser.UINT, 0);
	};

	PERCENT() {
	    return this.getToken(FactorParser.PERCENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterDecimal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitDecimal(this);
		}
	}


}

FactorParser.DecimalContext = DecimalContext;

class AndContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP_AND() {
	    return this.getToken(FactorParser.OP_AND, 0);
	};

	AND() {
	    return this.getToken(FactorParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitAnd(this);
		}
	}


}

FactorParser.AndContext = AndContext;

class EqualityContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP_EQ() {
	    return this.getToken(FactorParser.OP_EQ, 0);
	};

	OP_NE() {
	    return this.getToken(FactorParser.OP_NE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterEquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitEquality(this);
		}
	}


}

FactorParser.EqualityContext = EqualityContext;

class BooleanContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(FactorParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(FactorParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterBoolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitBoolean(this);
		}
	}


}

FactorParser.BooleanContext = BooleanContext;

class SubExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPEN_PARENS() {
	    return this.getToken(FactorParser.OPEN_PARENS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_PARENS() {
	    return this.getToken(FactorParser.CLOSE_PARENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterSubExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitSubExpression(this);
		}
	}


}

FactorParser.SubExpressionContext = SubExpressionContext;

class PropertyContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PROPERTY() {
	    return this.getToken(FactorParser.PROPERTY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitProperty(this);
		}
	}


}

FactorParser.PropertyContext = PropertyContext;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FactorParser.RULE_prog;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(FactorParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FactorListener ) {
	        listener.exitProg(this);
		}
	}


}




FactorParser.ExpressionContext = ExpressionContext; 
FactorParser.ProgContext = ProgContext; 
