const hello = {
    name:"john",
    place:"calicut",
    greet:function(){
     console.log(`iam ${this.name} from ${this.place}`)
    },
    message: function(){
        console.log("sample message")
    }

}
module.exports = hello