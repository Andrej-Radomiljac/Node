var questions = [];

var questionHandler = {

	"fPostQuestions" : function(data){
		
		questions = data;
		
	},
	
	"fGetQuestions" : function() {
		
		var i = 0;
		if(questions.length){
			
			return questions;
			
		}else{
			
			return 11;
			
		}
		
	},
	"fAddQuestion" : function(data){
		
		questions.push(data);
		
	},
	
	"fDropQuestion" : function(data){
		
		
		if(!questions.length){
			
			return 11;
			
		}else{
			
			var i = 0;
			while(i<questions.length){
				if(data.question == questions[i].question){
					
					questions.splice(i,1);
					return 0;
				}
				
				i++;
			}
			
		}
		
	},

};

module.exports = questionHandler;