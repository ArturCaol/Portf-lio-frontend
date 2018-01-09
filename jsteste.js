

var n = [];

for(i=0; i<100; i++){
    n[i] = i+1;
    if(((n[i]%3) == 0) && ((n[i]%5) == 0)) {
        n[i] = 'fizzbuzz';
    }
    if((n[i]%3) == 0){
        n[i] = 'fizz';
    }
    if((n[i]%5) == 0){
        n[i] = 'buzz';
    }
}