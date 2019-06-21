var Letter = function(array){
    this.array1 = []
    splitArray = array.split("")
    this.setup = function(array){
        for (var i = 0; i < splitArray.length; i++){
            this.array1.push(" _ ")
        }
        console.log(this.array1)
    }
        console.log(this.array1) 
}

computerword = "building"
letter1 = new Letter(computerword)
letter1.setup();
