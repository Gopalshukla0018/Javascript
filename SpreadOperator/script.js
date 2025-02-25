const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9]

const joinedArray = [...nums1,...nums2]


const user = {
    name: 'Gopal',
    age: 20,
}

const updatedUser ={
    ...user,
    city:'Noida'

}

function add(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum = sum+(arguments[i]);
        
    }
    return sum;
}