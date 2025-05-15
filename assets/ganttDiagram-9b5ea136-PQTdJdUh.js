import{K as _t,L as Dt,a as se,s as ne,D as ie,E as re,b as ae,c as oe,g as rt,d as kt,M as ce,N as le,O as ue,e as de,P as fe,Q as he,R,l as pt,S as me,T as Wt,U as zt,V as ke,W as ye,X as ge,Y as pe,Z as xe,$ as ve,a0 as Te,a1 as Ot,a2 as Vt,a3 as Pt,a4 as Nt,a5 as Bt,a6 as be,k as we,j as _e,F as De,C as Se}from"./mermaid-DtogqvnA.js";var Xt={exports:{}};(function(t,i){(function(n,r){t.exports=r()})(_t,function(){var n="day";return function(r,a,h){var f=function(F){return F.add(4-F.isoWeekday(),n)},T=a.prototype;T.isoWeekYear=function(){return f(this).year()},T.isoWeek=function(F){if(!this.$utils().u(F))return this.add(7*(F-this.isoWeek()),n);var b,A,O,B,P=f(this),S=(b=this.isoWeekYear(),A=this.$u,O=(A?h.utc:h)().year(b).startOf("year"),B=4-O.isoWeekday(),O.isoWeekday()>4&&(B+=7),O.add(B,n));return P.diff(S,"week")+1},T.isoWeekday=function(F){return this.$utils().u(F)?this.day()||7:this.day(this.day()%7?F:F-7)};var M=T.startOf;T.startOf=function(F,b){var A=this.$utils(),O=!!A.u(b)||b;return A.p(F)==="isoweek"?O?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):M.bind(this)(F,b)}}})})(Xt);var Ce=Xt.exports;const Ee=Dt(Ce);var Ht={exports:{}};(function(t,i){(function(n,r){t.exports=r()})(_t,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,h=/\d\d/,f=/\d\d?/,T=/\d*[^-_:/,()\s\d]+/,M={},F=function(p){return(p=+p)+(p>68?1900:2e3)},b=function(p){return function(D){this[p]=+D}},A=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var L=D.match(/([+-]|\d\d)/g),Y=60*L[1]+(+L[2]||0);return Y===0?0:L[0]==="+"?-Y:Y}(p)}],O=function(p){var D=M[p];return D&&(D.indexOf?D:D.s.concat(D.f))},B=function(p,D){var L,Y=M.meridiem;if(Y){for(var G=1;G<=24;G+=1)if(p.indexOf(Y(G,0,D))>-1){L=G>12;break}}else L=p===(D?"pm":"PM");return L},P={A:[T,function(p){this.afternoon=B(p,!1)}],a:[T,function(p){this.afternoon=B(p,!0)}],Q:[a,function(p){this.month=3*(p-1)+1}],S:[a,function(p){this.milliseconds=100*+p}],SS:[h,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[f,b("seconds")],ss:[f,b("seconds")],m:[f,b("minutes")],mm:[f,b("minutes")],H:[f,b("hours")],h:[f,b("hours")],HH:[f,b("hours")],hh:[f,b("hours")],D:[f,b("day")],DD:[h,b("day")],Do:[T,function(p){var D=M.ordinal,L=p.match(/\d+/);if(this.day=L[0],D)for(var Y=1;Y<=31;Y+=1)D(Y).replace(/\[|\]/g,"")===p&&(this.day=Y)}],w:[f,b("week")],ww:[h,b("week")],M:[f,b("month")],MM:[h,b("month")],MMM:[T,function(p){var D=O("months"),L=(O("monthsShort")||D.map(function(Y){return Y.slice(0,3)})).indexOf(p)+1;if(L<1)throw new Error;this.month=L%12||L}],MMMM:[T,function(p){var D=O("months").indexOf(p)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,b("year")],YY:[h,function(p){this.year=F(p)}],YYYY:[/\d{4}/,b("year")],Z:A,ZZ:A};function S(p){var D,L;D=p,L=M&&M.formats;for(var Y=(p=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,g,s){var u=s&&s.toUpperCase();return g||L[s]||n[s]||L[u].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(d,o,y){return o||y.slice(1)})})).match(r),G=Y.length,X=0;X<G;X+=1){var q=Y[X],j=P[q],k=j&&j[0],v=j&&j[1];Y[X]=v?{regex:k,parser:v}:q.replace(/^\[|\]$/g,"")}return function(x){for(var g={},s=0,u=0;s<G;s+=1){var d=Y[s];if(typeof d=="string")u+=d.length;else{var o=d.regex,y=d.parser,e=x.slice(u),W=o.exec(e)[0];y.call(g,W),x=x.replace(W,"")}}return function(l){var c=l.afternoon;if(c!==void 0){var m=l.hours;c?m<12&&(l.hours+=12):m===12&&(l.hours=0),delete l.afternoon}}(g),g}}return function(p,D,L){L.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(F=p.parseTwoDigitYear);var Y=D.prototype,G=Y.parse;Y.parse=function(X){var q=X.date,j=X.utc,k=X.args;this.$u=j;var v=k[1];if(typeof v=="string"){var x=k[2]===!0,g=k[3]===!0,s=x||g,u=k[2];g&&(u=k[2]),M=this.$locale(),!x&&u&&(M=L.Ls[u]),this.$d=function(e,W,l,c){try{if(["x","X"].indexOf(W)>-1)return new Date((W==="X"?1e3:1)*e);var m=S(W)(e),I=m.year,w=m.month,C=m.day,_=m.hours,E=m.minutes,st=m.seconds,nt=m.milliseconds,ft=m.zone,ht=m.week,V=new Date,U=C||(I||w?1:V.getDate()),N=I||V.getFullYear(),J=0;I&&!w||(J=w>0?w-1:V.getMonth());var Z,tt=_||0,H=E||0,it=st||0,et=nt||0;return ft?new Date(Date.UTC(N,J,U,tt,H,it,et+60*ft.offset*1e3)):l?new Date(Date.UTC(N,J,U,tt,H,it,et)):(Z=new Date(N,J,U,tt,H,it,et),ht&&(Z=c(Z).week(ht).toDate()),Z)}catch{return new Date("")}}(q,v,j,L),this.init(),u&&u!==!0&&(this.$L=this.locale(u).$L),s&&q!=this.format(v)&&(this.$d=new Date("")),M={}}else if(v instanceof Array)for(var d=v.length,o=1;o<=d;o+=1){k[1]=v[o-1];var y=L.apply(this,k);if(y.isValid()){this.$d=y.$d,this.$L=y.$L,this.init();break}o===d&&(this.$d=new Date(""))}else G.call(this,X)}}})})(Ht);var Me=Ht.exports;const Ae=Dt(Me);var jt={exports:{}};(function(t,i){(function(n,r){t.exports=r()})(_t,function(){return function(n,r){var a=r.prototype,h=a.format;a.format=function(f){var T=this,M=this.$locale();if(!this.isValid())return h.bind(this)(f);var F=this.$utils(),b=(f||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(A){switch(A){case"Q":return Math.ceil((T.$M+1)/3);case"Do":return M.ordinal(T.$D);case"gggg":return T.weekYear();case"GGGG":return T.isoWeekYear();case"wo":return M.ordinal(T.week(),"W");case"w":case"ww":return F.s(T.week(),A==="w"?1:2,"0");case"W":case"WW":return F.s(T.isoWeek(),A==="W"?1:2,"0");case"k":case"kk":return F.s(String(T.$H===0?24:T.$H),A==="k"?1:2,"0");case"X":return Math.floor(T.$d.getTime()/1e3);case"x":return T.$d.getTime();case"z":return"["+T.offsetName()+"]";case"zzz":return"["+T.offsetName("long")+"]";default:return A}});return h.bind(this)(b)}}})})(jt);var Le=jt.exports;const Ie=Dt(Le);var vt=function(){var t=function(g,s,u,d){for(u=u||{},d=g.length;d--;u[g[d]]=s);return u},i=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],n=[1,25],r=[1,26],a=[1,27],h=[1,28],f=[1,29],T=[1,30],M=[1,31],F=[1,9],b=[1,10],A=[1,11],O=[1,12],B=[1,13],P=[1,14],S=[1,15],p=[1,16],D=[1,18],L=[1,19],Y=[1,20],G=[1,21],X=[1,22],q=[1,24],j=[1,32],k={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(s,u,d,o,y,e,W){var l=e.length-1;switch(y){case 1:return e[l-1];case 2:this.$=[];break;case 3:e[l-1].push(e[l]),this.$=e[l-1];break;case 4:case 5:this.$=e[l];break;case 6:case 7:this.$=[];break;case 8:o.setWeekday("monday");break;case 9:o.setWeekday("tuesday");break;case 10:o.setWeekday("wednesday");break;case 11:o.setWeekday("thursday");break;case 12:o.setWeekday("friday");break;case 13:o.setWeekday("saturday");break;case 14:o.setWeekday("sunday");break;case 15:o.setDateFormat(e[l].substr(11)),this.$=e[l].substr(11);break;case 16:o.enableInclusiveEndDates(),this.$=e[l].substr(18);break;case 17:o.TopAxis(),this.$=e[l].substr(8);break;case 18:o.setAxisFormat(e[l].substr(11)),this.$=e[l].substr(11);break;case 19:o.setTickInterval(e[l].substr(13)),this.$=e[l].substr(13);break;case 20:o.setExcludes(e[l].substr(9)),this.$=e[l].substr(9);break;case 21:o.setIncludes(e[l].substr(9)),this.$=e[l].substr(9);break;case 22:o.setTodayMarker(e[l].substr(12)),this.$=e[l].substr(12);break;case 24:o.setDiagramTitle(e[l].substr(6)),this.$=e[l].substr(6);break;case 25:this.$=e[l].trim(),o.setAccTitle(this.$);break;case 26:case 27:this.$=e[l].trim(),o.setAccDescription(this.$);break;case 28:o.addSection(e[l].substr(8)),this.$=e[l].substr(8);break;case 30:o.addTask(e[l-1],e[l]),this.$="task";break;case 31:this.$=e[l-1],o.setClickEvent(e[l-1],e[l],null);break;case 32:this.$=e[l-2],o.setClickEvent(e[l-2],e[l-1],e[l]);break;case 33:this.$=e[l-2],o.setClickEvent(e[l-2],e[l-1],null),o.setLink(e[l-2],e[l]);break;case 34:this.$=e[l-3],o.setClickEvent(e[l-3],e[l-2],e[l-1]),o.setLink(e[l-3],e[l]);break;case 35:this.$=e[l-2],o.setClickEvent(e[l-2],e[l],null),o.setLink(e[l-2],e[l-1]);break;case 36:this.$=e[l-3],o.setClickEvent(e[l-3],e[l-1],e[l]),o.setLink(e[l-3],e[l-2]);break;case 37:this.$=e[l-1],o.setLink(e[l-1],e[l]);break;case 38:case 44:this.$=e[l-1]+" "+e[l];break;case 39:case 40:case 42:this.$=e[l-2]+" "+e[l-1]+" "+e[l];break;case 41:case 43:this.$=e[l-3]+" "+e[l-2]+" "+e[l-1]+" "+e[l];break}},table:[{3:1,4:[1,2]},{1:[3]},t(i,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:r,14:a,15:h,16:f,17:T,18:M,19:F,20:b,21:A,22:O,23:B,24:P,25:S,26:p,27:D,28:L,30:Y,32:G,33:X,34:23,35:q,37:j},t(i,[2,7],{1:[2,1]}),t(i,[2,3]),{9:33,11:17,12:n,13:r,14:a,15:h,16:f,17:T,18:M,19:F,20:b,21:A,22:O,23:B,24:P,25:S,26:p,27:D,28:L,30:Y,32:G,33:X,34:23,35:q,37:j},t(i,[2,5]),t(i,[2,6]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),{29:[1,34]},{31:[1,35]},t(i,[2,27]),t(i,[2,28]),t(i,[2,29]),{36:[1,36]},t(i,[2,8]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),{38:[1,37],40:[1,38]},t(i,[2,4]),t(i,[2,25]),t(i,[2,26]),t(i,[2,30]),t(i,[2,31],{39:[1,39],40:[1,40]}),t(i,[2,37],{38:[1,41]}),t(i,[2,32],{40:[1,42]}),t(i,[2,33]),t(i,[2,35],{39:[1,43]}),t(i,[2,34]),t(i,[2,36])],defaultActions:{},parseError:function(s,u){if(u.recoverable)this.trace(s);else{var d=new Error(s);throw d.hash=u,d}},parse:function(s){var u=this,d=[0],o=[],y=[null],e=[],W=this.table,l="",c=0,m=0,I=2,w=1,C=e.slice.call(arguments,1),_=Object.create(this.lexer),E={yy:{}};for(var st in this.yy)Object.prototype.hasOwnProperty.call(this.yy,st)&&(E.yy[st]=this.yy[st]);_.setInput(s,E.yy),E.yy.lexer=_,E.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var nt=_.yylloc;e.push(nt);var ft=_.options&&_.options.ranges;typeof E.yy.parseError=="function"?this.parseError=E.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ht(){var $;return $=o.pop()||_.lex()||w,typeof $!="number"&&($ instanceof Array&&(o=$,$=o.pop()),$=u.symbols_[$]||$),$}for(var V,U,N,J,Z={},tt,H,it,et;;){if(U=d[d.length-1],this.defaultActions[U]?N=this.defaultActions[U]:((V===null||typeof V>"u")&&(V=ht()),N=W[U]&&W[U][V]),typeof N>"u"||!N.length||!N[0]){var mt="";et=[];for(tt in W[U])this.terminals_[tt]&&tt>I&&et.push("'"+this.terminals_[tt]+"'");_.showPosition?mt="Parse error on line "+(c+1)+`:
`+_.showPosition()+`
Expecting `+et.join(", ")+", got '"+(this.terminals_[V]||V)+"'":mt="Parse error on line "+(c+1)+": Unexpected "+(V==w?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(mt,{text:_.match,token:this.terminals_[V]||V,line:_.yylineno,loc:nt,expected:et})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+V);switch(N[0]){case 1:d.push(V),y.push(_.yytext),e.push(_.yylloc),d.push(N[1]),V=null,m=_.yyleng,l=_.yytext,c=_.yylineno,nt=_.yylloc;break;case 2:if(H=this.productions_[N[1]][1],Z.$=y[y.length-H],Z._$={first_line:e[e.length-(H||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(H||1)].first_column,last_column:e[e.length-1].last_column},ft&&(Z._$.range=[e[e.length-(H||1)].range[0],e[e.length-1].range[1]]),J=this.performAction.apply(Z,[l,m,c,E.yy,N[1],y,e].concat(C)),typeof J<"u")return J;H&&(d=d.slice(0,-1*H*2),y=y.slice(0,-1*H),e=e.slice(0,-1*H)),d.push(this.productions_[N[1]][0]),y.push(Z.$),e.push(Z._$),it=W[d[d.length-2]][d[d.length-1]],d.push(it);break;case 3:return!0}}return!0}},v=function(){var g={EOF:1,parseError:function(u,d){if(this.yy.parser)this.yy.parser.parseError(u,d);else throw new Error(u)},setInput:function(s,u){return this.yy=u||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var u=s.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var u=s.length,d=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===o.length?this.yylloc.first_column:0)+o[o.length-d.length].length-d[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),u=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+u+"^"},test_match:function(s,u){var d,o,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),o=s[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],d=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var e in y)this[e]=y[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,u,d,o;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),e=0;e<y.length;e++)if(d=this._input.match(this.rules[y[e]]),d&&(!u||d[0].length>u[0].length)){if(u=d,o=e,this.options.backtrack_lexer){if(s=this.test_match(d,y[e]),s!==!1)return s;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(s=this.test_match(u,y[o]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var u=this.next();return u||this.lex()},begin:function(u){this.conditionStack.push(u)},popState:function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},pushState:function(u){this.begin(u)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(u,d,o,y){switch(o){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:break;case 15:this.begin("href");break;case 16:this.popState();break;case 17:return 40;case 18:this.begin("callbackname");break;case 19:this.popState();break;case 20:this.popState(),this.begin("callbackargs");break;case 21:return 38;case 22:this.popState();break;case 23:return 39;case 24:this.begin("click");break;case 25:this.popState();break;case 26:return 37;case 27:return 4;case 28:return 19;case 29:return 20;case 30:return 21;case 31:return 22;case 32:return 23;case 33:return 25;case 34:return 24;case 35:return 26;case 36:return 12;case 37:return 13;case 38:return 14;case 39:return 15;case 40:return 16;case 41:return 17;case 42:return 18;case 43:return"date";case 44:return 27;case 45:return"accDescription";case 46:return 33;case 47:return 35;case 48:return 36;case 49:return":";case 50:return 6;case 51:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[22,23],inclusive:!1},callbackname:{rules:[19,20,21],inclusive:!1},href:{rules:[16,17],inclusive:!1},click:{rules:[25,26],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,18,24,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],inclusive:!0}}};return g}();k.lexer=v;function x(){this.yy={}}return x.prototype=k,k.Parser=x,new x}();vt.parser=vt;const Ye=vt;R.extend(Ee);R.extend(Ae);R.extend(Ie);let Q="",St="",Ct,Et="",lt=[],ut=[],Mt={},At=[],xt=[],ot="",Lt="";const Ut=["active","done","crit","milestone"];let It=[],dt=!1,Yt=!1,Ft="sunday",Tt=0;const Fe=function(){At=[],xt=[],ot="",It=[],yt=0,wt=void 0,gt=void 0,z=[],Q="",St="",Lt="",Ct=void 0,Et="",lt=[],ut=[],dt=!1,Yt=!1,Tt=0,Mt={},De(),Ft="sunday"},We=function(t){St=t},ze=function(){return St},Oe=function(t){Ct=t},Ve=function(){return Ct},Pe=function(t){Et=t},Ne=function(){return Et},Be=function(t){Q=t},Re=function(){dt=!0},Ge=function(){return dt},Xe=function(){Yt=!0},He=function(){return Yt},je=function(t){Lt=t},Ue=function(){return Lt},Ze=function(){return Q},qe=function(t){lt=t.toLowerCase().split(/[\s,]+/)},Qe=function(){return lt},$e=function(t){ut=t.toLowerCase().split(/[\s,]+/)},Ke=function(){return ut},Je=function(){return Mt},ts=function(t){ot=t,At.push(t)},es=function(){return At},ss=function(){let t=Rt();const i=10;let n=0;for(;!t&&n<i;)t=Rt(),n++;return xt=z,xt},Zt=function(t,i,n,r){return r.includes(t.format(i.trim()))?!1:t.isoWeekday()>=6&&n.includes("weekends")||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(t.format(i.trim()))},ns=function(t){Ft=t},is=function(){return Ft},qt=function(t,i,n,r){if(!n.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=R(t.startTime):a=R(t.startTime,i,!0),a=a.add(1,"d");let h;t.endTime instanceof Date?h=R(t.endTime):h=R(t.endTime,i,!0);const[f,T]=rs(a,h,i,n,r);t.endTime=f.toDate(),t.renderEndTime=T},rs=function(t,i,n,r,a){let h=!1,f=null;for(;t<=i;)h||(f=i.toDate()),h=Zt(t,n,r,a),h&&(i=i.add(1,"d")),t=t.add(1,"d");return[i,f]},bt=function(t,i,n){n=n.trim();const a=/^after\s+([\d\w- ]+)/.exec(n.trim());if(a!==null){let f=null;if(a[1].split(" ").forEach(function(T){let M=ct(T);M!==void 0&&(f?M.endTime>f.endTime&&(f=M):f=M)}),f)return f.endTime;{const T=new Date;return T.setHours(0,0,0,0),T}}let h=R(n,i.trim(),!0);if(h.isValid())return h.toDate();{pt.debug("Invalid date:"+n),pt.debug("With date format:"+i.trim());const f=new Date(n);if(f===void 0||isNaN(f.getTime())||f.getFullYear()<-1e4||f.getFullYear()>1e4)throw new Error("Invalid date:"+n);return f}},Qt=function(t){const i=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return i!==null?[Number.parseFloat(i[1]),i[2]]:[NaN,"ms"]},$t=function(t,i,n,r=!1){n=n.trim();let a=R(n,i.trim(),!0);if(a.isValid())return r&&(a=a.add(1,"d")),a.toDate();let h=R(t);const[f,T]=Qt(n);if(!Number.isNaN(f)){const M=h.add(f,T);M.isValid()&&(h=M)}return h.toDate()};let yt=0;const at=function(t){return t===void 0?(yt=yt+1,"task"+yt):t},as=function(t,i){let n;i.substr(0,1)===":"?n=i.substr(1,i.length):n=i;const r=n.split(","),a={};ee(r,a,Ut);for(let f=0;f<r.length;f++)r[f]=r[f].trim();let h="";switch(r.length){case 1:a.id=at(),a.startTime=t.endTime,h=r[0];break;case 2:a.id=at(),a.startTime=bt(void 0,Q,r[0]),h=r[1];break;case 3:a.id=at(r[0]),a.startTime=bt(void 0,Q,r[1]),h=r[2];break}return h&&(a.endTime=$t(a.startTime,Q,h,dt),a.manualEndTime=R(h,"YYYY-MM-DD",!0).isValid(),qt(a,Q,ut,lt)),a},os=function(t,i){let n;i.substr(0,1)===":"?n=i.substr(1,i.length):n=i;const r=n.split(","),a={};ee(r,a,Ut);for(let h=0;h<r.length;h++)r[h]=r[h].trim();switch(r.length){case 1:a.id=at(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:r[0]};break;case 2:a.id=at(),a.startTime={type:"getStartDate",startData:r[0]},a.endTime={data:r[1]};break;case 3:a.id=at(r[0]),a.startTime={type:"getStartDate",startData:r[1]},a.endTime={data:r[2]};break}return a};let wt,gt,z=[];const Kt={},cs=function(t,i){const n={section:ot,type:ot,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:i},task:t,classes:[]},r=os(gt,i);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=gt,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.order=Tt,Tt++;const a=z.push(n);gt=n.id,Kt[n.id]=a-1},ct=function(t){const i=Kt[t];return z[i]},ls=function(t,i){const n={section:ot,type:ot,description:t,task:t,classes:[]},r=as(wt,i);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,wt=n,xt.push(n)},Rt=function(){const t=function(n){const r=z[n];let a="";switch(z[n].raw.startTime.type){case"prevTaskEnd":{const h=ct(r.prevTaskId);r.startTime=h.endTime;break}case"getStartDate":a=bt(void 0,Q,z[n].raw.startTime.startData),a&&(z[n].startTime=a);break}return z[n].startTime&&(z[n].endTime=$t(z[n].startTime,Q,z[n].raw.endTime.data,dt),z[n].endTime&&(z[n].processed=!0,z[n].manualEndTime=R(z[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),qt(z[n],Q,ut,lt))),z[n].processed};let i=!0;for(const[n,r]of z.entries())t(n),i=i&&r.processed;return i},us=function(t,i){let n=i;rt().securityLevel!=="loose"&&(n=_e.sanitizeUrl(i)),t.split(",").forEach(function(r){ct(r)!==void 0&&(te(r,()=>{window.open(n,"_self")}),Mt[r]=n)}),Jt(t,"clickable")},Jt=function(t,i){t.split(",").forEach(function(n){let r=ct(n);r!==void 0&&r.classes.push(i)})},ds=function(t,i,n){if(rt().securityLevel!=="loose"||i===void 0)return;let r=[];if(typeof n=="string"){r=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<r.length;h++){let f=r[h].trim();f.charAt(0)==='"'&&f.charAt(f.length-1)==='"'&&(f=f.substr(1,f.length-2)),r[h]=f}}r.length===0&&r.push(t),ct(t)!==void 0&&te(t,()=>{Se.runFunc(i,...r)})},te=function(t,i){It.push(function(){const n=document.querySelector(`[id="${t}"]`);n!==null&&n.addEventListener("click",function(){i()})},function(){const n=document.querySelector(`[id="${t}-text"]`);n!==null&&n.addEventListener("click",function(){i()})})},fs=function(t,i,n){t.split(",").forEach(function(r){ds(r,i,n)}),Jt(t,"clickable")},hs=function(t){It.forEach(function(i){i(t)})},ms={getConfig:()=>rt().gantt,clear:Fe,setDateFormat:Be,getDateFormat:Ze,enableInclusiveEndDates:Re,endDatesAreInclusive:Ge,enableTopAxis:Xe,topAxisEnabled:He,setAxisFormat:We,getAxisFormat:ze,setTickInterval:Oe,getTickInterval:Ve,setTodayMarker:Pe,getTodayMarker:Ne,setAccTitle:oe,getAccTitle:ae,setDiagramTitle:re,getDiagramTitle:ie,setDisplayMode:je,getDisplayMode:Ue,setAccDescription:ne,getAccDescription:se,addSection:ts,getSections:es,getTasks:ss,addTask:cs,findTaskById:ct,addTaskOrg:ls,setIncludes:qe,getIncludes:Qe,setExcludes:$e,getExcludes:Ke,setClickEvent:fs,setLink:us,getLinks:Je,bindFunctions:hs,parseDuration:Qt,isInvalidDate:Zt,setWeekday:ns,getWeekday:is};function ee(t,i,n){let r=!0;for(;r;)r=!1,n.forEach(function(a){const h="^\\s*"+a+"\\s*$",f=new RegExp(h);t[0].match(f)&&(i[a]=!0,t.shift(1),r=!0)})}const ks=function(){pt.debug("Something is calling, setConf, remove the call")},Gt={monday:Te,tuesday:ve,wednesday:xe,thursday:pe,friday:ge,saturday:ye,sunday:ke},ys=(t,i)=>{let n=[...t].map(()=>-1/0),r=[...t].sort((h,f)=>h.startTime-f.startTime||h.order-f.order),a=0;for(const h of r)for(let f=0;f<n.length;f++)if(h.startTime>=n[f]){n[f]=h.endTime,h.order=f+i,f>a&&(a=f);break}return a};let K;const gs=function(t,i,n,r){const a=rt().gantt,h=rt().securityLevel;let f;h==="sandbox"&&(f=kt("#i"+i));const T=h==="sandbox"?kt(f.nodes()[0].contentDocument.body):kt("body"),M=h==="sandbox"?f.nodes()[0].contentDocument:document,F=M.getElementById(i);K=F.parentElement.offsetWidth,K===void 0&&(K=1200),a.useWidth!==void 0&&(K=a.useWidth);const b=r.db.getTasks();let A=[];for(const k of b)A.push(k.type);A=j(A);const O={};let B=2*a.topPadding;if(r.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const k={};for(const x of b)k[x.section]===void 0?k[x.section]=[x]:k[x.section].push(x);let v=0;for(const x of Object.keys(k)){const g=ys(k[x],v)+1;v+=g,B+=g*(a.barHeight+a.barGap),O[x]=g}}else{B+=b.length*(a.barHeight+a.barGap);for(const k of A)O[k]=b.filter(v=>v.type===k).length}F.setAttribute("viewBox","0 0 "+K+" "+B);const P=T.select(`[id="${i}"]`),S=ce().domain([le(b,function(k){return k.startTime}),ue(b,function(k){return k.endTime})]).rangeRound([0,K-a.leftPadding-a.rightPadding]);function p(k,v){const x=k.startTime,g=v.startTime;let s=0;return x>g?s=1:x<g&&(s=-1),s}b.sort(p),D(b,K,B),de(P,B,K,a.useMaxWidth),P.append("text").text(r.db.getDiagramTitle()).attr("x",K/2).attr("y",a.titleTopMargin).attr("class","titleText");function D(k,v,x){const g=a.barHeight,s=g+a.barGap,u=a.topPadding,d=a.leftPadding,o=fe().domain([0,A.length]).range(["#00B9FA","#F95002"]).interpolate(he);Y(s,u,d,v,x,k,r.db.getExcludes(),r.db.getIncludes()),G(d,u,v,x),L(k,s,u,d,g,o,v),X(s,u),q(d,u,v,x)}function L(k,v,x,g,s,u,d){const y=[...new Set(k.map(c=>c.order))].map(c=>k.find(m=>m.order===c));P.append("g").selectAll("rect").data(y).enter().append("rect").attr("x",0).attr("y",function(c,m){return m=c.order,m*v+x-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",v).attr("class",function(c){for(const[m,I]of A.entries())if(c.type===I)return"section section"+m%a.numberSectionStyles;return"section section0"});const e=P.append("g").selectAll("rect").data(k).enter(),W=r.db.getLinks();if(e.append("rect").attr("id",function(c){return c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?S(c.startTime)+g+.5*(S(c.endTime)-S(c.startTime))-.5*s:S(c.startTime)+g}).attr("y",function(c,m){return m=c.order,m*v+x}).attr("width",function(c){return c.milestone?s:S(c.renderEndTime||c.endTime)-S(c.startTime)}).attr("height",s).attr("transform-origin",function(c,m){return m=c.order,(S(c.startTime)+g+.5*(S(c.endTime)-S(c.startTime))).toString()+"px "+(m*v+x+.5*s).toString()+"px"}).attr("class",function(c){const m="task";let I="";c.classes.length>0&&(I=c.classes.join(" "));let w=0;for(const[_,E]of A.entries())c.type===E&&(w=_%a.numberSectionStyles);let C="";return c.active?c.crit?C+=" activeCrit":C=" active":c.done?c.crit?C=" doneCrit":C=" done":c.crit&&(C+=" crit"),C.length===0&&(C=" task"),c.milestone&&(C=" milestone "+C),C+=w,C+=" "+I,m+C}),e.append("text").attr("id",function(c){return c.id+"-text"}).text(function(c){return c.task}).attr("font-size",a.fontSize).attr("x",function(c){let m=S(c.startTime),I=S(c.renderEndTime||c.endTime);c.milestone&&(m+=.5*(S(c.endTime)-S(c.startTime))-.5*s),c.milestone&&(I=m+s);const w=this.getBBox().width;return w>I-m?I+w+1.5*a.leftPadding>d?m+g-5:I+g+5:(I-m)/2+m+g}).attr("y",function(c,m){return m=c.order,m*v+a.barHeight/2+(a.fontSize/2-2)+x}).attr("text-height",s).attr("class",function(c){const m=S(c.startTime);let I=S(c.endTime);c.milestone&&(I=m+s);const w=this.getBBox().width;let C="";c.classes.length>0&&(C=c.classes.join(" "));let _=0;for(const[st,nt]of A.entries())c.type===nt&&(_=st%a.numberSectionStyles);let E="";return c.active&&(c.crit?E="activeCritText"+_:E="activeText"+_),c.done?c.crit?E=E+" doneCritText"+_:E=E+" doneText"+_:c.crit&&(E=E+" critText"+_),c.milestone&&(E+=" milestoneText"),w>I-m?I+w+1.5*a.leftPadding>d?C+" taskTextOutsideLeft taskTextOutside"+_+" "+E:C+" taskTextOutsideRight taskTextOutside"+_+" "+E+" width-"+w:C+" taskText taskText"+_+" "+E+" width-"+w}),rt().securityLevel==="sandbox"){let c;c=kt("#i"+i);const m=c.nodes()[0].contentDocument;e.filter(function(I){return W[I.id]!==void 0}).each(function(I){var w=m.querySelector("#"+I.id),C=m.querySelector("#"+I.id+"-text");const _=w.parentNode;var E=m.createElement("a");E.setAttribute("xlink:href",W[I.id]),E.setAttribute("target","_top"),_.appendChild(E),E.appendChild(w),E.appendChild(C)})}}function Y(k,v,x,g,s,u,d,o){if(d.length===0&&o.length===0)return;let y,e;for(const{startTime:w,endTime:C}of u)(y===void 0||w<y)&&(y=w),(e===void 0||C>e)&&(e=C);if(!y||!e)return;if(R(e).diff(R(y),"year")>5){pt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const W=r.db.getDateFormat(),l=[];let c=null,m=R(y);for(;m.valueOf()<=e;)r.db.isInvalidDate(m,W,d,o)?c?c.end=m:c={start:m,end:m}:c&&(l.push(c),c=null),m=m.add(1,"d");P.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",function(w){return"exclude-"+w.start.format("YYYY-MM-DD")}).attr("x",function(w){return S(w.start)+x}).attr("y",a.gridLineStartPadding).attr("width",function(w){const C=w.end.add(1,"day");return S(C)-S(w.start)}).attr("height",s-v-a.gridLineStartPadding).attr("transform-origin",function(w,C){return(S(w.start)+x+.5*(S(w.end)-S(w.start))).toString()+"px "+(C*k+.5*s).toString()+"px"}).attr("class","exclude-range")}function G(k,v,x,g){let s=me(S).tickSize(-g+v+a.gridLineStartPadding).tickFormat(Wt(r.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));const d=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||a.tickInterval);if(d!==null){const o=d[1],y=d[2],e=r.db.getWeekday()||a.weekday;switch(y){case"millisecond":s.ticks(Bt.every(o));break;case"second":s.ticks(Nt.every(o));break;case"minute":s.ticks(Pt.every(o));break;case"hour":s.ticks(Vt.every(o));break;case"day":s.ticks(Ot.every(o));break;case"week":s.ticks(Gt[e].every(o));break;case"month":s.ticks(zt.every(o));break}}if(P.append("g").attr("class","grid").attr("transform","translate("+k+", "+(g-50)+")").call(s).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||a.topAxis){let o=be(S).tickSize(-g+v+a.gridLineStartPadding).tickFormat(Wt(r.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(d!==null){const y=d[1],e=d[2],W=r.db.getWeekday()||a.weekday;switch(e){case"millisecond":o.ticks(Bt.every(y));break;case"second":o.ticks(Nt.every(y));break;case"minute":o.ticks(Pt.every(y));break;case"hour":o.ticks(Vt.every(y));break;case"day":o.ticks(Ot.every(y));break;case"week":o.ticks(Gt[W].every(y));break;case"month":o.ticks(zt.every(y));break}}P.append("g").attr("class","grid").attr("transform","translate("+k+", "+v+")").call(o).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function X(k,v){let x=0;const g=Object.keys(O).map(s=>[s,O[s]]);P.append("g").selectAll("text").data(g).enter().append(function(s){const u=s[0].split(we.lineBreakRegex),d=-(u.length-1)/2,o=M.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("dy",d+"em");for(const[y,e]of u.entries()){const W=M.createElementNS("http://www.w3.org/2000/svg","tspan");W.setAttribute("alignment-baseline","central"),W.setAttribute("x","10"),y>0&&W.setAttribute("dy","1em"),W.textContent=e,o.appendChild(W)}return o}).attr("x",10).attr("y",function(s,u){if(u>0)for(let d=0;d<u;d++)return x+=g[u-1][1],s[1]*k/2+x*k+v;else return s[1]*k/2+v}).attr("font-size",a.sectionFontSize).attr("class",function(s){for(const[u,d]of A.entries())if(s[0]===d)return"sectionTitle sectionTitle"+u%a.numberSectionStyles;return"sectionTitle"})}function q(k,v,x,g){const s=r.db.getTodayMarker();if(s==="off")return;const u=P.append("g").attr("class","today"),d=new Date,o=u.append("line");o.attr("x1",S(d)+k).attr("x2",S(d)+k).attr("y1",a.titleTopMargin).attr("y2",g-a.titleTopMargin).attr("class","today"),s!==""&&o.attr("style",s.replace(/,/g,";"))}function j(k){const v={},x=[];for(let g=0,s=k.length;g<s;++g)Object.prototype.hasOwnProperty.call(v,k[g])||(v[k[g]]=!0,x.push(k[g]));return x}},ps={setConf:ks,draw:gs},xs=t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`,vs=xs,bs={parser:Ye,db:ms,renderer:ps,styles:vs};export{bs as diagram};
//# sourceMappingURL=ganttDiagram-9b5ea136-PQTdJdUh.js.map
