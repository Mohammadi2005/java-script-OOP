// Factory Function

function CreateCircle(radius) {

    return {
        Radius:radius,
        Environment:function(){
            console.log(this.Radius * 2 * 3.14);
        },
        GetRadius:function(){
            console.log(this.Radius);
        }
    }
}

var myCircle = CreateCirce(2);

myCircle.Environment();
myCircle.GetRadius();
