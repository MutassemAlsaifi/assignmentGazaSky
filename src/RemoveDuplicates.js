//Task 3
export  function removeDuplicates(my_array){
    


    let n = my_array.length
    
    
    for (let i = 0; i < n - 1; i++) {   
        for (let j = i + 1; j < n; j++) {
            
            if (my_array[i] === my_array[j]) {
                my_array.splice(j, 1);
    
            }
        }
    
    }
    
    console.log("Unique array:", my_array)
}




