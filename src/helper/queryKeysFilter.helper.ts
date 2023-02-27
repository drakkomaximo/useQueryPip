export const queryKeysFilter = ({index}: {index:number}) =>{
    if(index === 0) return 'male'
    if(index === 1) return 'female'
    return 'others'
}